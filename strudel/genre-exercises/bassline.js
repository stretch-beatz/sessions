// Bassline

// 135-142 bpm
setcpm(136/4)

// Wub bass - envelope filtered/LFO
// Often multiple intricate basslines
// Bass offbeat from drums
// Often a half speed section
// UK garage drum pattern

//1. The Core Elements Kick: Place on the 1st beat of the first bar. On the second bar, place a kick on the 1st beat and a "double kick" (two quick hits right before the 3rd beat) to create a push-pull rhythm
$: stack (
  s("bd - - - bd [- -  bd bd] - -").n(1).slow(2),

  //Snare / Clap: Place a tight, snappy snare or clap on the 2nd and 4th beats of the bar. Pitching the snare up often adds a speedier, rhythmic feel.
  s("[- sd]*2").n(2),

  //  2. Hi-Hats & Shuffles Closed Hats: Place short, snappy closed hi-hats on the eighth notes (the "and" of every beat).
  s("[- hh]*4").n(1),

  //Open Hats: Add an open hi-hat right after the main kick or just before the snare (often referred to as a flam pattern) to add a distinct bounce.
  // $: s("[- - oh -] -*3").n(2)
  s("[[- - - oh] -]*2").n(1),

   //Ghost Notes / Rims: Fill in the blank spaces with ghost notes, soft rim shots, or side-sticks in the 16th-note positions. This creates a call-and-response feel and defines the "skippy" garage sound.
  s("[- - - rim]*4 ").n(0).gain(0.7)//.swing(4)
)//.rib(1,5/4)
/*3. The Secret Ingredient: Swing
UKG relies entirely on swing to get its signature shuffle.Program your drums straight onto the grid, and then apply swing (e.g., MPC 16th-note swing settings like 64 or 68) to push the offbeat notes slightly later in time.
*/

// Sped up female RnB vocals
samples('github:neshanjo/strudel-producer-space-samples') // https://strudel-samples.alternet.site/pack/neshanjo/strudel-producer-space-samples

$_: s("etv_gm_136_phrase").n("<0 1 2 3 - 4 5 - - 6  - 7 - 8>"// - 3 0 0 3>"
  // .slow("<1 2 1>")
  // .degrade()
  ).speed((4/3))//*(124/136))

var bassline = n("0 [~ 7] ~ 0 | ~ [0 7] ~ 0 | 2 [~ 9] ~ 2 | ~ [4 11] ~ 4")
        // Enforces G Major across all degree inputs
var basslines = [
  bassline
  .s("sawtooth") // Aggressive harmonic base
  .detune("6")            // Adds movement and width
  .sustain("2")
  // The "Wub" mechanism: sweeps low-pass filter cutoff with a fast LFO sine wave
  .lpf(sine.range("150", "2200").slow("0.25")) 
  .resonance(12)      // Sharpens the filter edge for a wetter "wub"
  .distort(0.2)       // Gritty British club finish
  .gain("3")
,

  bassline.s("sawtooth").scale("G2:major"),     // Pure raw sawtooth foundation
  bassline.s("square").scale("G1:major").gain(0.75)
  .sustain(0.35)
    // --- HIGH-COMPLEXITY MODULATION ---
    // Fast LFO sweeping the filter cutoff for the wet wobble
    .lpf(sine.range(140, 3400).slow(0.18)) 
    .resonance(30)         // Squelchy, piercing filter peak
    .detune(55)            // Massive phase movement and width
    .distort(0.7)          // Hard clipped British club grit
    .hpf(42)
,

  // The Sheffield Bouncing Rhythm in G Major
  // $: note("0 [~ 7] ~ 0 | ~ [0 7] ~ 0")
  bassline
    .scale("G:major")
    .sound("square")
    .sustain(0.12) 
    .lpf(400) 
    .resonance(22) 
    .distort(0.4) 
,
  bassline
    .scale("g2:major")
    .s("sawtooth")
    .gain(0.34)
    .hpf(35)
    .lpf(sine.fast(4).range(180, 2600))
    .lpq(16)
    .distort(0.65)
,
  n("0").scale("G2:major")
    .s("sine")
    .gain(0.28)
    .lpf(140)
    .release(0.25)
,
  bassline
    .scale("G2:major")
    .s("sawtooth")
    .gain(0.33)
    .hpf(35)
    .lpf(sine.fast(6).range(160, 3200))
    .lpq(18)
    .distort(0.68)
  ]

$: basslines[1 % basslines.length]

// $: chooseInWith(parray(basslines))
