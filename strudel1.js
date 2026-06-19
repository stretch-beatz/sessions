const { init, rockstar_pro } = await import('https://esm.sh/rockstar-strudel')

// Pre-warm the WASM engine while other code loads (optional but recommended)
await init()

const cc = await midin('Launch Control')

samples('github:bubobubobubobubo/dough-amiga')
samples('github:yaxu/spicule')

const my_scale = "c:major"

$: s("kick")
// $: s("sn bd")
  .n(cc(23).centered("5*3 6", 5).round())
  // .n("0*3 1")
  .euclid("7*3 9".slow("2").add(cc(43).centered(0,5).round()) , 16)
  // .every(8, x=> x.chunk(4, palindrome))
  .every(6, jux(rev))//x=> x.chunk(4, jux(rev)))



$_: s("kick micron")
// $: s("sn bd")
  // .n(base(cc(24).range(1000,"5555"), "10".slow(8)).round())
  // .n("0*3 1")
  .euclid("7*3 9".slow("2") , 16)
  .every(8, x=> x.chunk(4, palindrome))
  .every(6, jux(rev))//x=> x.chunk(4, jux(rev)))
  

$_: s("bd [oh hh]").euclid("7 5 9", 16).every("1 3 5".slow(8), jux(rev))//.room("<0 1 1 2 3>")

// $_: s("jvgabba*2 big").note(cc(23).centeredR("0 3 <[2 1] [3 4]>",4)).scale(my_scale)
  .euclid("6*3 7*2 8*1 5",8)
  .every(5, jux(rev))

// $: note("c a f e").lpf(cc(21).range(0, 1000)).lpq(cc(41).range(0, 10)).sound("sawtooth")

// $: s("pirate").chop(8).palindrome().degradeBy(cc(21).range(1,0))
  // .lpf(cc(41).range(0, 100)).lpq(cc(42).range(0, 10)).room(cc(22).range(0,2))

  
   // .speed("<1 2 3 1 -2 -4>")

  // .striate(6).slow(3)
  // .chop(8)
 // .rev() // reverse order of chops
 // .loopAt("0 2 3")
    
    //.n("<0 1 2 3>").fit()//.degrade(0.1).fit(4)

$_: s("STA4*8").n("0 1 2 3").euclid(5,8)


  //.distort("0*2 0.5")
         // .s("gm_distortion_guitar gm_overdriven_guitar".slow(4))
        // .arp("0 [0,2] 1 [0,2]")
        // .sometimesBy(0.05, x=>x.s("gm_guitar_fret_noise"))

//$: note(cc(48).range(2, 6).round().apply(Math.pow))._pianoroll

// $: note("1 7 5 5 4 3").scale("c:major").s("saw")

// $: "bd".s().struct(binary(563))
/*
$: stack(
  "bd".s().euclid(base(563,"8"), 8).every(8, jux(rev)),
  "hh".s().euclid(base(175,8), 8).every(10, jux(rev)),
  "sd".s().euclid(base(563,8), 8).every(6, jux(rev)),
  )
*/


// Run a Rockstar program
/*const prog = await rockstar_pro`
  Papa was a rolling stone
  (Wherever he laid his hat)
  (was his home)
  (And when he died)
  (All he left us was alone)
  Say Papa
  Build Papa up
  Scream Papa
`*/

const prog = await rockstar_pro`
  Papa was a rolling stone
  Say Papa
  Build Papa up
  Scream Papa
  Papa was a rolling stone 
  Mama said knock you out
  Say Mama
  Build Papa up
  Scream Papa with Mama
`


//samples('shabda/speech/en-GB/m:'+prog.speech.join(','))
console.log(prog.output)

$: note(base(prog.output, "10 8", 3).slow(2)
        //.chunk(4, x=>x.add("<0 3>"))
       //.euclid(cc(45).centered("5 6",2).round().slow(2), 8)
       ).scale(my_scale.slow(16))
  .s("ravebass").gain(1.5)

  
samples('shabda/phonemes/en-GB/m:'+prog.speech.join(',')+'?force=0&overrides=papa:P_AA1_P_A')

samples('shabda/speech/en-GB/f:'+prog.speech.join(','))

//console.log('data', data)
$: s("bd*4")

//const sections = ["phc_P_AA1_P_A ~ phc_W_AA1_Z phc_AH0 phc_R_OW1_L_IH0_NG ~ phc_S_T_OW1_N ~","phc_W_EH0 ~ phc_R_EH1_V_ER0 ~ phc_HH_IY1 ~ phc_L_EY1_D ~","phc_HH_IH1_Z ~ phc_HH_AE1_T ~ ~ ~ ~ ~","phc_W_AA1_Z ~ phc_HH_IH1_Z ~ phc_HH_OW1_M ~ ~ ~","phc_AH0_N_D ~ phc_W_EH1_N ~ phc_HH_IY1 ~ phc_D_AY1_D ~","phc_AO1_L ~ phc_HH_IY1 ~ phc_L_EH1_F_T ~ phc_AH1_S ~","phc_W_AA1_Z phc_AH0 phc_L_OW1_N ~ ~ ~ ~ ~","phc_S_EY1 ~ phc_P_AA1_P_A ~ ~ ~ ~ ~","phc_B_IH1_L_D ~ phc_P_AA1_P_A ~ phc_AH1_P ~ ~ ~","phc_S_K_R_IY1_M ~ phc_P_AA1_P_A ~ ~ ~ ~ ~","phc_P_AA1_P_A ~ phc_W_AA1_Z phc_AH0 phc_R_OW1_L_IH0_NG ~ phc_S_T_OW1_N ~","phc_M_AA1_M_AH0 ~ phc_S_EH1_D ~ phc_N_AA1_K ~ phc_Y_UW1 ~","phc_AW1_T ~ ~ ~ ~ ~ ~ ~","phc_S_EY1 ~ phc_M_AA1_M_AH0 ~ ~ ~ ~ ~","phc_B_IH1_L_D ~ phc_P_AA1_P_A ~ phc_AH1_P ~ ~ ~","phc_S_K_R_IY1_M ~ phc_P_AA1_P_A ~ phc_W_IH1_DH ~ phc_M_AA1_M_AH0 ~"];
const sections = [ "phc_P_AA1_P_A ~ phc_W_AA1_Z phc_AH0 phc_R_OW1_L_IH0_NG ~ phc_S_T_OW1_N ~", "phc_S_EY1 ~ phc_P_AA1_P_A ~ ~ ~ ~ ~", "phc_B_IH1_L_D ~ phc_P_AA1_P_A ~ phc_AH1_P ~ ~ ~", "phc_S_K_R_IY1_M ~ phc_P_AA1_P_A ~ ~ ~ ~ ~", "phc_P_AA1_P_A ~ phc_W_AA1_Z phc_AH0 phc_R_OW1_L_IH0_NG ~ phc_S_T_OW1_N ~", "phc_M_AA1_M_AH0 ~ phc_S_EH1_D ~ phc_N_AA1_K ~ phc_Y_UW1 ~", "phc_AW1_T ~ ~ ~ ~ ~ ~ ~", "phc_S_EY1 ~ phc_M_AA1_M_AH0 ~ ~ ~ ~ ~", "phc_B_IH1_L_D ~ phc_P_AA1_P_A ~ phc_AH1_P ~ ~ ~", "phc_S_K_R_IY1_M ~ phc_P_AA1_P_A ~ phc_W_IH1_DH ~ phc_M_AA1_M_AH0 ~" ];


/*
const sections = [
  "phc_P_AA1_P_A ~ phc_W_AA1_Z phc_AH0 phc_R_OW1_L_IH0_NG ~ phc_S_T_OW1_N ~",
  "phc_W_EH0 ~ phc_R_EH1_V_ER0 ~ phc_HH_IY1 ~ phc_L_EY1_D ~",
  "phc_HH_IH1_Z ~ phc_HH_AE1_T ~ ~ ~ ~ ~",
  "phc_W_AA1_Z ~ phc_HH_IH1_Z ~ phc_HH_OW1_M ~ ~ ~",
  "phc_AH0_N_D ~ phc_W_EH1_N ~ phc_HH_IY1 ~ phc_D_AY1_D ~",
  "phc_AO1_L ~ phc_HH_IY1 ~ phc_L_EH1_F_T ~ phc_AH1_S ~",
  "phc_W_AA1_Z phc_AH0 phc_L_OW1_N ~ ~ ~ ~ ~",
  "phc_S_EY1 ~ phc_P_AA1_P_A ~ ~ ~ ~ ~",
  "phc_B_IH1_L_D ~ phc_P_AA1_P_A ~ phc_AH1_P ~ ~ ~",
  "phc_S_K_R_IY1_M ~ phc_P_AA1_P_A ~ ~ ~ ~ ~",
  "phc_P_AA1_P_A ~ phc_W_AA1_Z phc_AH0 phc_R_OW1_L_IH0_NG ~ phc_S_T_OW1_N ~",
  "phc_M_AA1_M_AH0 ~ phc_S_EH1_D ~ phc_N_AA1_K ~ phc_Y_UW1 ~",
  "phc_AW1_T ~ ~ ~ ~ ~ ~ ~",
  "phc_S_EY1 ~ phc_M_AA1_M_AH0 ~ ~ ~ ~ ~",
  "phc_B_IH1_L_D ~ phc_P_AA1_P_A ~ phc_AH1_P ~ ~ ~",
  "phc_S_K_R_IY1_M ~ phc_P_AA1_P_A ~ phc_W_IH1_DH ~ phc_M_AA1_M_AH0 ~"
]
*/
//$: s(slowcat(prog.speech).slow(4)//.slice(11,13))
$: s(slowcat(sections).slow(4)//.slice(11,13))
     // .bite(4, "3 2 1 0")
    // .brak()
     //.chunkBack(4, x=>x.add(7))
     .every(3, rev)
).slow(2)
  
  // $: s(prog.speech)
// .striate(6)//.slow(3)
 // .chop(4)
  // .rev() // reverse order of chops
 //.loopAt(2)  


//.clip(base(prog.output,"8 3").mul(0.125))
  
// $: note(seq(to_base(prog.output, 10).flat(2))
$_: note(base(prog.output, "8*3 10", "4 5")
  .euclid(base(prog.output.slice(0,5),"8*3 12"),8)
  //.slow(2)
  //.slow("<4 2 4>")
  .scale("C:major")
   )
  .s("gm_distortion_guitar gm_overdriven_guitar".slow(4))
 .every(2, jux(rev))
 
                                      
