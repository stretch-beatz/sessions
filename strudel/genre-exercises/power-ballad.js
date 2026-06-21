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

/*
// Run a Rockstar program
const prog = await rockstar_pro`
  Papa was a rolling stone
  (Wherever he laid his hat)
  (was his home)
  (And when he died)
  (All he left us was alone)
  Say Papa
  Build Papa up up up
  Scream Papa
  Mama said knock you out
  Shout Mama
`
*/

// $_: n(base(prog.output).slow(2)).scale(my_scale). s("supersaw").gain(1.5)
// samples('shabda/phonemes/en-GB/m:'+prog.speech.join(',')+'?force=0&overrides=papa:P_AA1_P_A')




