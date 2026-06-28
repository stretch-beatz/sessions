// Bassline

// 135-142 bpm
setcpm(142/4)

// Wub bass - envelope filtered/LFO
// Often multiple intricate basslines
// Bass offbeat from drums
// Often a half speed section
// UK garage drum pattern

//1. The Core Elements Kick: Place on the 1st beat of the first bar. On the second bar, place a kick on the 1st beat and a "double kick" (two quick hits right before the 3rd beat) to create a push-pull rhythm
$: s("bd - - - bd [- -  bd bd] - -").n(1).slow(2)

//Snare / Clap: Place a tight, snappy snare or clap on the 2nd and 4th beats of the bar. Pitching the snare up often adds a speedier, rhythmic feel.
$: s("[- sd]*2").n(2)

//  2. Hi-Hats & Shuffles Closed Hats: Place short, snappy closed hi-hats on the eighth notes (the "and" of every beat).
$: s("[- hh]*4").n(1)

//Open Hats: Add an open hi-hat right after the main kick or just before the snare (often referred to as a flam pattern) to add a distinct bounce.
 // $: s("[- - oh -] -*3").n(2)
 $: s("[[- - - oh] -]*2").n(1)

//Ghost Notes / Rims: Fill in the blank spaces with ghost notes, soft rim shots, or side-sticks in the 16th-note positions. This creates a call-and-response feel and defines the "skippy" garage sound.

/*3. The Secret Ingredient: Swing
UKG relies entirely on swing to get its signature shuffle.Program your drums straight onto the grid, and then apply swing (e.g., MPC 16th-note swing settings like 64 or 68) to push the offbeat notes slightly later in time.
*/

// Sped up female RnB vocals
samples('github:neshanjo/strudel-producer-space-samples') // https://strudel-samples.alternet.site/pack/neshanjo/strudel-producer-space-samples


/*Examples: TS7 -
Come on Over (feat. Bianca Gerald) https://www.youtube.com/watch?v=Hp6LmRR6X5E
Thorpey - I Can Love U https://offmenutrecords.bandcamp.com/track/i-can-love-u
*/
