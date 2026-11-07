//@title Template V2
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
var scale_select = cc(27).range(0,1)
var bass_scale = chooseWith(scale_select, ["g1:minor", "c1:minor", "c1:major"])
var lead_scale = chooseWith(scale_select, ["g3:minor", "c3:minor", "c3:major"])
bass_scale.vis_text('bass_scale')

// Drums choice on cc(47)
var drum_bank = chooseWith(cc(47), ["RolandTR909", "RolandTR808", "Linn9000","AkaiLinn"])
drum_bank.vis_text('drum_bank')

const tracks = {};

// tracks.t0 = createTrack(); //empty if you want to use cc(48) to bring in layers

/////////////////////////////////////
// t1 
tracks.t1 = createTrack(); 
// tracks.t1.colorFamily = 'reds'; 
tracks.t1.drums     = stack (
  s("bd").n("0 1")
).bank(drum_bank)
 
/*
  let vocal_run = "<0@4 12@12>";
  let vocal_start = "<0@4>";

tracks.t1.vocals = stack(
  // s(vocal_bar).n(run(vocal_run).slow(vocal_run).add(vocal_start))
  )
*/

/*
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
*/

/*
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
*/

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
  .pianoroll();

$: stack( // Emergency Drums on cc(26 & 46)
  s("bd").euclid(base(cc(26).range(0, 8).round()),8).every(4, jux(rev)),
  s("hh").euclid(base(cc(46).range(0, 8).round()),8).every(2, jux(rev))
).bank(drum_bank)

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
