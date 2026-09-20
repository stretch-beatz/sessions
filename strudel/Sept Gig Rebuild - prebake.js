//@title Track Test - Sept Gig Rebuild & vis
//@by stretch_beatz

// Midi
const cc = await midin('Launch Control');
const kb = await midikeys('Launch Control');

// Samples
samples('github:tidalcycles/dirt-samples/master')
samples('github:creativenucleus/strudel-m8-168-dnb-jungle')
samples('github:neshanjo/strudel-producer-space-samples')

// Scale choice on cc(27) there is bass & lead scale and vocals to match 
var scaleSelect = cc(27).range(0,1)
var bassScale = chooseWith(scaleSelect, ["g1:minor", "c1:minor", "c1:major"])
var leadScale = chooseWith(scaleSelect, ["g3:minor", "c3:minor", "c3:major"])
var scaleVocal = chooseWith(scaleSelect, ["etv_gm_136_phrase", "etv_cm_136_phrase", "~"])

// Drums choice on cc(47)
var drumBank = chooseWith(cc(47), ["linn", "bossdr110", "bossdr220","tr909"])

const sections = {};

// sections.t0 = createTrack(); //empty if you want to use cc(48) to bring in layers

/////////////////////////////////////////////
// 1 Bassline
sections.bassline = createTrack(); 
sections.bassline.colorFamily = 'reds'; 
var main_drum = stack(
  // s("bd*4"),
  s("bd - - - bd [- -  bd bd] - -").n(1).slow(2),  
  s("[- sd]*2").n(2)
    .every(4, rev)
  )//.jux(rev)


var bl_bassline = n("0 [~ 7] ~ 0 | ~ [0 7] ~ 0 | 2 [~ 9] ~ 2 | ~ [4 11] ~ 4")
// var bl_bassline = n("0 [~ 0] ~ 0 | ~ [0 0] ~ 0 | 0 [~ 0] ~ 0 | ~ [0 0] ~ 0"
// .add(note(baseMidin(base, cc, 21, 5, 16))))
// var bl_bassline = note(baseMidin(base, cc, 21, 5, 16))  
  // .euclid(cc(41).range(1, 16).round(), 16).slow(2)

var wub = bl_bassline
  .scale(bassScale)
  .s("saw")
  .lpf(300).lpenv(2000).lpattack(0.005).lpdecay(0.15).lpq(5)
  .crush(3)
  .gain(0.8)
  .color("purple")

var wobBass = bl_bassline
    .scale(bassScale)
    .s("sawtooth")
    .gain(0.34)
    .hpf(35)
    .lpf(sine.fast(4).range(180, 2600))
    .lpq(16)
    .distort(0.65)
    .color("orange")

var subBass = bl_bassline
    .scale(bassScale)
    .s("sine")
    .gain("0.28 1")
    .lpf(140)
    .release(0.25)
    .color("blue")

var wobBass2 = bl_bassline
    .scale(bassScale)
    .s("sawtooth")
    .gain(0.33)
    .hpf(35)
    .lpf(sine.fast(6).range(160, 3200))
    .lpq(18)
    .distort(0.68)
    .color("red")

var sectionLength = 8

var basslines = arrange(
    // [4, "-"],
    [sectionLength, wobBass],
    [sectionLength, wub],
    [sectionLength, stack(wobBass, subBass)],
    [sectionLength, wub],
    [sectionLength, stack(wobBass2, subBass)]
  )


sections.bassline.drums = stack (
  main_drum,
  s("[- hh]*4").n(1),
  s("[[- - - oh] -]*2").n(1),
  s("[- - - rim]*4 ").n(0).gain(0.7)
) 
sections.bassline.bass = basslines 
sections.bassline.vocals = s(scaleVocal)
  .n("<0 1 2 3 - 4 5 - - 6 - - >"
    .timeline(1)
  )
  .speed((4/3))

/////////////////////////////////////
// 2 Gabba
sections.gabba = createTrack(); 
sections.gabba.colorFamily = 'blues';
var gabba_main_drum = stack(
  s("bd*4")
    .every(5, x=>x.fast(2))
    .gain(1.2)
  )
sections.gabba.drums = stack(
  gabba_main_drum,
  s("hh")
    .euclid(
      // "<5>"
      cc(21).range("<5 4>",16).round()
      ,16)
    .slow(2)
  .gain(1.2)
  ).color("blue")

sections.gabba.bass = note(
  baseMidin(base, cc, 41, 7, 7)
  // base(cc(41).range("<10000>", "<99999>").round(), 5,7) 
  )
  .scale(bassScale)
  .struct(gabba_main_drum)
  .euclidLegato(cc(42).range("<4>",16).round(),16).slow(2)
  // .clip(0.5)
  .s("gabba")
  .color("orange")
  
sections.gabba.lead = s("<pads>")
  .euclidLegato(5, 8)
  .note(
    baseMidin(base, cc, 43, 5, 7)
  )  
  .scale(leadScale)
  .clip(0.5)
  .gain(0.3)


//////////////////////////////////////////////
// 3 SPACE
const { Observer, Equator, GeoVector, MoonPhase, KM_PER_AU } = await import('https://esm.run/astronomy-engine@2.1.19');
const observer = new Observer(53.38, -1.46, 0); // SHEFFIELD
const date = new Date();
const moon = Equator('Moon', date, observer, true, true);
const moonDist = round(moon.dist * KM_PER_AU)
const moonDistance = (moonDist - 360000) / 45000
const mars = Equator('Mars', date, observer, true, true);
const marsDist = round(mars.dist * KM_PER_AU)
const sun = Equator('Sun', date, observer, true, true);
const sunDist = round(sun.dist * KM_PER_AU)

const moonEuclidPattern = "<6 5@2 3>"
const sunEuclidPattern = "<5*3 5@3 7>" 
sections.space = createTrack(); 
sections.space.colorFamily = 'greens';

sections.space.drums = stack(
    s("clubkick*4").color("blue"),
    stack(
      s("oh").n(1)
      .euclid(moonEuclidPattern,8).slow(2)
      .color("red"),
    s("hh").n(1)
      .euclid(moonEuclidPattern.rev(),8).slow(2)
      .color("orange")
    )
    .bank(drumBank)
  )
  .room(0.2);
  
sections.space.bass = note(
  base(sunDist, 8, sunEuclidPattern))
    .scale(bassScale)
    .euclidLegato(base(sunDist, sunEuclidPattern, 8), 8).slow(2)
    // .fast("<2*5 4>")
    // .clip("<1*5 3>")
    .s("<future>")

sections.space.lead = 
    note(base(sunDist, "<8 7@2 9>", sunEuclidPattern))
      .scale(leadScale)
      .euclidLegato(base(sunDist, sunEuclidPattern, 8), 8)
      .s("<gm_tubular_bells>")
      .color("purple")

///////////////////////////////////////////////////////////////////
// knob_twiddler
sections.kt = createTrack(); 
sections.kt.colorFamily = 'pinksPurples'; 
sections.kt.drums = stack(
    s("bd")
    .gain(2)
    .bank(drumBank)
    .euclid(base(cc(21).range("<1@3 2>","<5 6@2 7>").round()),8)
    .color("blue"),
  s("hh")
    .bank(drumBank)
    .euclidRot(base(cc(41).range("<1>","<5 8>").round()),16,2),
  s("sd")// oh")
    .bank(drumBank)
    .euclid(base(cc(22).range("<1@4 4>","<7 6>").round()),16)
  .sometimes(rev), 
  s("oh")
    .bank(drumBank)
    .euclid(base(cc(42).range("<1 3 0>","<3 3 7@3>").round()),8)
)
sections.kt.bass =  note(baseMidin(base, cc, 24, 6, 7).slow(2))
    .scale(bassScale)
    .euclidLegato(cc(23).range("<1@5 0*3>", "<7@3 8>").round(), 8)
  .sometimes(x=>x.slow(2))
  .o(3)
    .sound(chooseWith(cc(43), [
      "gm_synth_bass_1", 
      "gm_synth_bass_2", 
      "gm_slap_bass_1","gm_slap_bass_2"
    ]))
   .acidenv(cc(44))
    .gain(2)//cc(44).range(1,4))

sections.kt.lead = note(baseMidin(base, cc, 26, 7, 7))
    .scale(leadScale)
    .euclidLegato(cc(25).range(1, 16).round(), 16)
    .sound(chooseWith(cc(45), [
      "sawtooth", "bytebeat",
      "balafon"]))
     .acidenv(cc(46))
    // .gain(cc(46).range(1,4))

////////////////////////////////////
// Mixer
// cc(48) is chooses how much of each track is playing
var faderIndex = cc(48).range(0, faderMax);

// Get pairs of tracks from the sections so i can mix up the tracks
const sides = toSides(sections, faderIndex);
var indexSignal = cc(28).range(0, sides.left.length - 1);

var leftDeck = pick(indexSignal, sides.left)
var rightDeck = pick(indexSignal, sides.right)

// Combine both active streams cleanly
$: stack(leftDeck, rightDeck).pianoroll();


await initHydra({ feedStrudel:1, detectAudio:true }) //strudel = s0

// Load the visualisers
const midiVis = new MidiVisualiser({cc})
const spaceVis = new SpaceVisualiser({observer, Equator, KM_PER_AU})
midiVis.start()
spaceVis.start()

// hydra code
s1.init({src: midiVis.canvas})
s2.init({src: spaceVis.canvas})
smoothMix([s0,s1,s2])
  // .modulateRotate(shape(999,0.3,0.5),()=> a.fft[1] * Math.PI)
  // .scrollY(()=> a.fft[0])
  
  /*.modulateRotate(shape(999,0.3,0.5),H(cc(26).mul(Math.PI)))
   .scrollY(
     ()=> a.fft[0]*(cc(46).firstCycleValues?.[0] ?? 0)
   )*/
  .out(o0)

