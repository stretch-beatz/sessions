//@title stretch_beatz Template
//@by stretch_beatz

/*cd samples
npx @strudel/sampler*/
samples('http://localhost:5432/');

setcpm(85/4)//172
$: s("nena_mala_long").n("<0 1 2 3 4 5 6 7 8 >").slow(4)
// Midi
const cc = await midin('Launch Control');
const kb = await midikeys('Launch Control');

// Samples
samples('github:tidalcycles/dirt-samples/master')

// Scale choice on cc(27) there is bass & lead scale and vocals to match 
var scaleSelect = cc(27).range(0,1)
var bassScale = chooseWith(scaleSelect, ["g1:minor", "c1:minor", "c1:major"])
var leadScale = chooseWith(scaleSelect, ["g3:minor", "c3:minor", "c3:major"])
// var scaleVocal = chooseWith(scaleSelect, ["etv_gm_136_phrase", "etv_cm_136_phrase", "~"])

// Drums choice on cc(47)
var drumBank = chooseWith(cc(47), ["korgm1", "tr808", "bossdr220","tr909"])

const tracks = {};

// tracks.t0 = createTrack(); //empty if you want to use cc(48) to bring in layers

/////////////////////////////////////
// t1 
tracks.t1 = createTrack(); 
tracks.t1.colorFamily = 'reds'; 
tracks.t1.drums     = stack (
s("bd sd*3").n("0")
).bank(drumBank)
const bassEuclidPattern = "<3!3 5>"
tracks.t1.bass   = n(base(462879,4,bassEuclidPattern))
  .euclidLegato(bassEuclidPattern,8)
  .scale(bassScale)
  .s("gm_synth_bass_1")
// tracks.t1.lead   =  
// tracks.t1.vocals = 


/////////////////////////////////////
// t2 
tracks.t2 = createTrack(); 
tracks.t2.colorFamily = 'blues'; 
tracks.t2.drums     = stack (
  s("oh*4").n("0")
).bank(drumBank)
// tracks.t2.bass   =  
// tracks.t2.lead   =  
// tracks.t2.vocals = 

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
  
  // .cpm(cc(46).range(140/4, 172/4)) //mucks with scheduler
  //.timeline(cc(46).range(0,100))
  .pianoroll();


await initHydra({ feedStrudel:1, detectAudio:true }) //strudel = s0

// Load the visualisers
const midiVis = new MidiVisualiser({cc})
midiVis.start()

// hydra code
s1.init({src: midiVis.canvas})
smoothMix([s0,s1])
  .out(o0)
