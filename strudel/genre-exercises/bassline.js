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
  s("bd").n(1),
  //s("bd - - - bd [- -  bd bd] - -").n(1).slow(2),

  //Snare / Clap: Place a tight, snappy snare or clap on the 2nd and 4th beats of the bar. Pitching the snare up often adds a speedier, rhythmic feel.
  // s("[- sd]*2").n(2),

  //  2. Hi-Hats & Shuffles Closed Hats: Place short, snappy closed hi-hats on the eighth notes (the "and" of every beat).
  // s("[- hh]*4").n(1),
  

  //Open Hats: Add an open hi-hat right after the main kick or just before the snare (often referred to as a flam pattern) to add a distinct bounce.
  // s("[[- - - oh] -]*2").n(1),

   //Ghost Notes / Rims: Fill in the blank spaces with ghost notes, soft rim shots, or side-sticks in the 16th-note positions. This creates a call-and-response feel and defines the "skippy" garage sound.
   // s("[- - - rim]*4 ").n(0).gain(0.7)//.swing(4)
)

// Sped up female RnB vocals
samples('github:neshanjo/strudel-producer-space-samples') // https://strudel-samples.alternet.site/pack/neshanjo/strudel-producer-space-samples

$_: s("etv_gm_136_phrase").n("<0 1 2 3 - 4 5 - - 6  - 7 - 8>"// - 3 0 0 3>"
  // .slow("<1 2 1>")
  // .degrade()
  ).speed((4/3))//*(124/136))

var bassline = n("0 [~ 7] ~ 0 | ~ [0 7] ~ 0 | 2 [~ 9] ~ 2 | ~ [4 11] ~ 4")
        // Enforces G Major across all degree inputs

// A classic "wub" pattern
$_: bassline
  .scale("G2:major")
  .s("saw")
  .lpf(300)          // Base cutoff (the 'hidden' sound)
  .lpenv(2000)       // The 'wub' depth (how far it opens)
  .lpattack(0.005)   // Nearly instant opening
  .lpdecay(0.15)     // Adjust this to control the 'wub' length
  .lpq(5)            // Resonance (adds that liquid/squelchy sound)
  .crush(3)          // The "Off Me Nut" grit
  .gain(0.8)


