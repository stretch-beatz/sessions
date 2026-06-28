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
)
/*3. The Secret Ingredient: Swing
UKG relies entirely on swing to get its signature shuffle.Program your drums straight onto the grid, and then apply swing (e.g., MPC 16th-note swing settings like 64 or 68) to push the offbeat notes slightly later in time.
*/

// Sped up female RnB vocals
samples('github:neshanjo/strudel-producer-space-samples') // https://strudel-samples.alternet.site/pack/neshanjo/strudel-producer-space-samples

$: s("etv_gm_136_phrase").n("<0 1 2 3 - 4 5 - - 6  - 7 - 8>"// - 3 0 0 3>"
  // .slow("<1 2 1>")
  // .degrade()
  ).speed((4/3))//*(124/136))

// Define a bouncy 4-bar UKG/Bassline pattern
$:  note("d2 [~ d3] ~ d2 | ~ [d2 d3] ~ d2 | f2 [~ f3] ~ f2 | ~ [g2 g3] ~ g2")
    .s("sawtooth") // Aggressive harmonic base
  .detune("5 6 5")            // Adds movement and width
  .sustain("0.3 0.4")
  // The "Wub" mechanism: sweeps low-pass filter cutoff with a fast LFO sine wave
  .lpf(sine.range("150 200", "2000 2200").slow(0.25)) 
  .resonance(12)      // Sharpens the filter edge for a wetter "wub"
  .distort(0.2)       // Gritty British club finish
  .gain("3")

  

/*Examples: TS7 -
Come on Over (feat. Bianca Gerald) https://www.youtube.com/watch?v=Hp6LmRR6X5E
Thorpey - I Can Love U https://offmenutrecords.bandcamp.com/track/i-can-love-u
*/
