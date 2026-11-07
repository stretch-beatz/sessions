//@title 20261106
//@by stretch_beatz
/*
       ___
    \ /   \ /
     <[] []>
    /_|___|_\
 ___/  | |  \___
       | |
       | |
       | |
    ___| |___
   /___| |___\   */

samples('http://localhost:5432/');
let choices = await extendedSamples(); //get the key bpm etc for the samples

const patternVis = new PatternVisualiser({ rows: 8, leftPadding: 480})

// Midi
const cc = await midin('Launch Control');
const kb = await midikeys('Launch Control');

// Samples
samples('github:tidalcycles/dirt-samples/master')

// Scale choice on cc(27) there is bass & lead scale and vocals to match 
var scaleSelect = cc(27).range(0,1)
var bass_scale = chooseWith(scaleSelect, choices.bass_scale)
var lead_scale = chooseWith(scaleSelect, choices.lead_scale)
var vocal_bar = chooseWith(scaleSelect, choices.bar)
var vocal_name = chooseWith(scaleSelect, choices.name)
var vocal_credit = chooseWith(scaleSelect, choices.credit)
var vocal_key = chooseWith(scaleSelect, choices.key)
var vocal_short = chooseWith(scaleSelect, choices.short)
var vocal_long = chooseWith(scaleSelect, choices.long)
var vocal_cpm = chooseWith(scaleSelect, choices.cpm)


// Drums choice on cc(47)
var drumBank = chooseWith(cc(47), ["RolandTR909", "RolandTR808", "Linn9000","AkaiLinn"])

drumBank.vis_text('drumBank')
vocal_cpm.vis_text('vocal_cpm')
vocal_name.vis_text('Vocal from')
vocal_credit.vis_text('by')
vocal_key.vis_text('in')


const tracks = {};

// tracks.t0 = createTrack(); //empty if you want to use cc(48) to bring in layers

/////////////////////////////////////
// t1 
tracks.t1 = createTrack(); 
// tracks.t1.colorFamily = 'reds'; 
tracks.t1.drums     = stack (
s("bd*4").n("0 1").gain(2),
s("hh").euclidRot("<3>",8,2)
).bank(drumBank)
 
const bassEuclidPattern = "<1 5>"

tracks.t1.bass   = note(
  baseMidin(base, cc, 41, 5, 7)
  )
  .scale(bass_scale)
  .euclidLegato(cc(42).range("<5>",16).round(),16).slow(2)
  .s("gabba")
  
  tracks.t1.lead   =  note(
    baseMidin(base, cc, 21, 7, 7)
  ).scale(lead_scale).euclid(cc(22).range(2,7).round(), 8)
  .s("gabba")

  let vocal_run = "<0@4 12@12>";
  let vocal_start = "<0@4>";

tracks.t1.vocals = stack(
  // s(vocal_bar).n(run(vocal_run).slow(vocal_run).add(vocal_start))
  )
  


/////////////////////////////////////
// t2 
tracks.t2 = createTrack(); 
// tracks.t2.colorFamily = 'blues'; 
tracks.t2.drums     = stack(
    s("bd")
    .gain(2)
    .bank(drumBank)
    .euclid(base(cc(23).range("<1>","<5>").round()),8)
    .color("blue"),
  s("hh")
    .bank(drumBank)
    .euclidRot(base(cc(43).range("<1>","<4>").round()),16,2),
  s("sd")// oh")
    .bank(drumBank)
    .euclid(base(cc(24).range("<1>","<7>").round()),16)
  .sometimes(rev), 
  s("oh")
    .bank(drumBank)
    .euclid(base(cc(44).range("<1>","<3>").round()),8)
)
  
var bl_bassline = note(baseMidin(base, cc, 41, 9, 16))  
  // .euclid(cc(41).range(1, 16).round(), 16).slow(2)

var wub = bl_bassline
  .scale(bass_scale)
  .s("saw")
  .lpf(300).lpenv(2000).lpattack(0.005).lpdecay(0.15).lpq(5)
  .crush(3)
  .gain(0.8)
  .color("purple")

var wobBass = bl_bassline
    .scale(bass_scale)
    .s("sawtooth")
    .gain(0.34)
    .hpf(35)
    .lpf(sine.fast(4).range(180, 2600))
    .lpq(16)
    .distort(0.65)
    .color("orange")

var subBass = bl_bassline
    .scale(bass_scale)
    .s("sine")
    .gain("0.28 1")
    .lpf(140)
    .release(0.25)
    .color("blue")

var wobBass2 = bl_bassline
    .scale(bass_scale)
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
tracks.t2.bass   = basslines 

tracks.t2.lead   =  note(
    baseMidin(base, cc, 21, 7, 7)
  ).scale(lead_scale).euclid(cc(22).range(2,7).round(), 8)
  .s("supersaw")

  let vocal_run2 = "<8@8>";
  let vocal_start2 = "<0@8 8@8>";

tracks.t2.vocals = stack(
  //s(vocal_bar).n(run(vocal_run2).slow(vocal_run2).add(vocal_start2))
  )

samples('github:sonidosingapura/blu-mar-ten/main/Bass')

tracks.reggeaton = createTrack();

samples('github:sonidosingapura/blu-mar-ten/main/Bass')
const kick = s("bd ~ ~ ~ ~ bd ~ ~")

tracks.reggeaton.drums = stack(
  kick,
  // s("~ ~ ~ sd ~ ~ sd ~"),
  // s("~ ~ ~ cp ~ ~ cp ~"),//.swing(),
  // s("hh*8").gain(0.25),
  // s("perc(3,8)").gain(0.4)
).bank(drumBank)//.every(4, x=>x.fast("1.5"))

tracks.reggeaton.bass = "<i VI III VII>"
.romanChord("d#:major").layer(
  pat => pat.dict("triads").anchor("d2").voicing()
    .sound("<bmt_town_808_bass>").struct(kick).gain(0.8),
)


tracks.reggeaton.lead = "<i VI III VII>"
.romanChord("d#:major").layer(
  pat => n(base(65432,"<5@3 6>")).set(pat).anchor("d5").voicing()
    .sound("marimba"),
  // pat => pat.dict("triads").anchor("d3").voicing()
    // .sound("gm_string_ensemble_1").gain(0.5),
  )

tracks.reggeaton.vocal = s("nena_mala_bar")
  .n("<1>")
  .euclidLegato("<5>",8)

////////////////////////////////////
// Mixer
// cc(48) is chooses how much of each track is playing
var faderIndex = cc(48).range(0, faderMax);

// Get pairs of tracks from the sections so i can mix up the tracks
const sides = toSides(tracks, faderIndex);
var indexSignal = cc(28).range(0, sides.left.length - 1);

var leftDeck = pick(indexSignal, sides.left)
var rightDeck = pick(indexSignal, sides.right)

// Combine both active streams cleanly
$: stack(leftDeck, rightDeck)
  
  .cpm(vocal_cpm) //mucks with scheduler
  //.timeline(cc(46).range(0,100))
  .pianoroll();


await initHydra({ feedStrudel:1, detectAudio:true }) //strudel = s0

// Load the visualisers
const midiVis = new MidiVisualiser({cc})
midiVis.start()
patternVis.start()

// hydra code
s1.init({src: midiVis.canvas})
s2.init({src: patternVis.canvas})
// smoothMix([s0,s1],1)
smoothMix([s2,s1,s0],1)
  // .rotate(0,0.1)
  // .modulate(noise(3))
  // .kaleid(4)
  .out(o0)
