const { init, rockstar_pro } = await import('https://esm.sh/rockstar-strudel')

// Pre-warm the WASM engine while other code loads (optional but recommended)
await init()

/*
80s power ballads
    70-90 bpm (or 130+ halftime)
    Belting vocals
    Synth strings
    Piano
    Halftimey reverby drums that often come in later
    Reverb on everything
    Guitar solo?
    Key changes!
    Constant emotional escalation
    Examples: Beverley Craven - Promise Me (of course!!) https://www.youtube.com/watch?v=EmTBKbyaEjU
    Bryan Adams - (Everything I Do) I Do It For You
    Bonnie Tyler - Total Eclipse of the Heart https://www.youtube.com/watch?v=XMmXCyrV_WQ
    George Michael - Careless Whisper (here the saxophone does the belting…) https://www.youtube.com/watch?v=izGwDsrQ1eQ
*/
setcpm(150/4) // 70-90 bpm (or 130+ halftime)


/*
Power ballads frequently utilize A minor, C major, or G major as their primary keys to balance melancholic verses with soaring, anthemic choruses. The true defining feature of the genre is the dramatic upward key change (modulation) right before the final chorus to maximize emotional intensity.
*/

/*
Common Primary Keys & Chord Changes
Key of A minor (vi): Often uses dark, emotive progressions. 
Verse: Am - F - C - G or Am - G - F - E. Chorus: F - C - G - Am.
*/
const A_minor_vi = ["<Am F C G>", "F C G Am"]  
/*
Key of C major (I): Vulnerable but hopeful. 
Verse: C - G - Am - F. Chorus: C - G - Am - F.
*/
const C_major_I = ["<C G Am F>", "C G Am F"]

/*
Key of G major (I): Common for guitar-heavy ballads. 
Verse: G - D - Em - C. Chorus: C - D - Em - C
*/
const G_major_I = ["<G D Em C>", "C D Em F"]

const chords = G_major_I



// Belting vocals // sax lines
// Synth strings
const iStrings = "gm_violin,gm_viola"
// Piano
const iPiano = "gm_piano"
// Halftimey reverby drums that often come in later
// Reverb on everything

const sBD =s("bd").room("0.9:4")
// Guitar solo?
const iGuitar = "gm_overdriven_guitar"
// Key changes!
const start_scale = "a:minor"// "c:major"//, "g:major"
const keyChange = "0*48 1*16"


// $: n("<0,1,2> <0,1,3>").
$:  s(iStrings).chord(chords[0]).slow(2)
  .voicing().gain(0.3)._punchcard()
$:  s(iPiano).n("<0 2 [2 3] ~ 4>").euclidLegato(5,8).chord(chords[0])
  .voicing()._punchcard()
// .scaleTranspose(keyChange)

// Constant emotional escalation

$: sBD

// Rockstar for verse 1
const verse1_prog = await rockstar_pro`
  Papa was a rolling stone
  (Wherever he laid his hat)
  Say Papa`

// Rockstar for chorus
const chorus_prog = await rockstar_pro`
  Papa was a rolling stone
  (Wherever he laid his hat)
  Say Papa`

// Rockstar for verse 2
const verse2_prog = await rockstar_pro`
  Papa was a rolling stone
  (Wherever he laid his hat)
  Say Papa`

// $_: n(base(prog.output).slow(2)).scale(my_scale). s("supersaw").gain(1.5)
// samples('shabda/phonemes/en-GB/m:'+prog.speech.join(',')+'?force=0&overrides=papa:P_AA1_P_A')
