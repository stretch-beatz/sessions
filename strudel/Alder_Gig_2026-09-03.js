//@title Sept Gig Prep
//@by stretch___beatz

// Visuals by SUTC OLP students
// await initHydra(); var SWAP_INTERVAL_MS = 30000; var SWAP_INTERVAL_MS = 20000; function getRandomInt(e){return Math.floor(Math.random()*e)}await initHydra({feedStrudel:1});var aImages=['https://th.bing.com/th/id/OIP.2stYdpfk62fcRZIl9Lr3HAHaFW?rs=1&pid=ImgDetMain','https://th.bing.com/th/id/OIP.PtTWJAKDjQS-02KNcxEEJAAAAA?rs=1&pid=ImgDetMain','https://upload.wikimedia.org/wikipedia/commons/a/ad/Ada_lovelace_10k_31i.png','https://upload.wikimedia.org/wikipedia/commons/0/0e/Analog_Computing_Machine_GPN-2000-000354.jpg','https://upload.wikimedia.org/wikipedia/commons/6/65/%27bombe%27.jpg','https://upload.wikimedia.org/wikipedia/commons/2/24/Women_holding_parts_of_the_first_four_Army_computers.jpg','https://upload.wikimedia.org/wikipedia/commons/5/5d/Charles-babbage.intel.jpg','https://upload.wikimedia.org/wikipedia/commons/5/5c/Bombe-rebuild.jpg','https://upload.wikimedia.org/wikipedia/commons/f/f8/Alan_Turing_%281951%29.jpg','https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/01/12/katherine-johnson.jpg','https://upload.wikimedia.org/wikipedia/commons/6/62/Katherine_Johnson_at_NASA%2C_in_1966.jpg'],STUDENT_SNIPPETS=[{file:'students/ afkllc.js',code:'src(s0)\n    .saturate(2)\n    .modulateKaleid(shape([4,0,2,10]),[1,2,3,4,5])\n    .contrast(1.3)\n    .pixelate([10000,600,21.32, 5, 2000,5000],[10000,600,21.32, 5, 2000,5000])\n    .luma(0.21, 0.351)\n    .repeatX(3.95)\n    .repeatY(3.14, 1)\n    .scrollY(1,0.2)\n    .color([1,2,3],2,3)\n    .out(o0)'},{file:'students/acw.js',code:'shape(5,0.5,1.5)\n.scale(0.5,0.5)\n.repeat(100000,10000000)\n.modulateScale(osc(3,0.5),-0.6)\n.add(o0,0.5)\n.scale(-1)\n.out()'},{file:'students/acw2.js',code:'//Made by Arthur C-W: Cool butterfly\nosc(40,0.2,1)\n  .modulateScale(osc(40,0,1).kaleid(8))\n  .repeat(2,4)\n  .modulate(o0,0.05)\n  .modulateKaleid(shape(4,0.1,1))\n  .out(o0)'},{file:'students/acw3.js',code:'osc(40,0.2,1)\n  .modulateScale(osc(5,0,1).kaleid(8))\n  .repeat(2,4)\n  .modulate(o0,0.05)\n  .modulateKaleid(shape(4,0.1,1))\n  .scrollY(1, 1, 1).rotate(1, 1)\n  .out(o0)'},{file:'students/acw4.js',code:'osc(5,0.2,1)\n  .modulateScale(osc(40,0,1).kaleid(8))\n  .repeat(2,4)\n  .modulate(o0,0.05)\n  .modulateKaleid(shape(4,0.1,1))\n  .scrollX(2, 2, 2).modulateKaleid(osc(), 1)\n  .scrollY(2, 2, 2)\n  .out(o0)'},{file:'students/afkllc1.js',code:'shape(2.98, 0.282, 0.385)\n    .scale(1.51)\n    .rotate(0.78, 0.94)\n    .scrollY(0.3)\n    .scrollX(0.19, -0.01)\n    .pixelate(21.3)\n    .luma(0.21, 0.351)\n    .repeatX(3.95)\n    .repeatY(3.14, 1)\n    .thresh(0.507, 0.035)\n    .kaleid(12)\n    .out()'},{file:'students/afkllc2.js',code:'src(s0)\n    .saturate(2)\n    .modulateKaleid(shape([4,0,2,10]),[1,2,3,4,5])\n    .contrast(1.3)\n    .pixelate([10000,600,21.32, 5, 2000,5000],[10000,600,21.32, 5, 2000,5000])\n    .luma(0.21, 0.351)\n    .repeatX(3.95)\n    .repeatY(3.14, 1)\n    .scrollY(1,0.2)\n    .color([1,2,3],2,3)\n    .out(o0)'},{file:'students/afkllc3.js',code:'osc(3,0.5,[0,0,2].fast())\n  .repeat(3)\n  .mask(shape([4,20],0.5,0.2))\n.rotate( ({time}) => time%360 ,[30,0])\n\n.modulate(0, 4)\n.luma([Math.sin(time),Math.cos(time)].fast(100),[0],100)\n.modulate(noise([2,0].fast()))\n  .out()'},{file:'students/jg1.js',code:'//setFunction(colors2glsl(\'#ee7d00,#009bb4\'))\nsetFunction(colors2glsl(\'#ee7d00,#009bb4,#e0d3e6,#006F81\'))\nvoronoi(5,-0.1,5)\n  .add(osc(1,0,1)).kaleid(0.0000601)\n  .scale(1,1,2).colours(1).out(o0)\n  .out(o1)\nsrc(o1).mult(src(s0).modulateRotate(o1,100), -0.5)\n  .out(o0)'},{file:'students/jg2.js',code:'osc(4, 0.123, 0.8)\n  .color(Math.sin(time), Math.sin(time), Math.sin(time))\n  .rotate(0.30, 0.1)\n  .pixelate(2, 20)\n  .modulate(noise(2.5), () => 1.5 * Math.sin(0.08 * time))\n  .invert()\n  .out(o0);\n'},{file:'students/josh1.js',code:'src(s0)\n  .blend(s1, () => Math.sin(time))\n  .blend(s2, () => Math.sin(time/(3/2)))\n  .scrollX(0.1,0.2)\n  .pixelate(9.942, 21.067)\n  .kaleid(4)\n  .rotate(0.421, 0.127)\n  .kaleid(4)\n  .out();\n'},{file:'students/ltr.js',code:'noise(36.2, 0.931)\n    .rotate(10, 2)\n    .scale(3, 2.42, 0.15, 0.5, 0.5)\n    .repeatX(1.56, 0)\n    .scrollX(-0.09, 0.21)\n    .thresh(0.747, 0.079)\n    .out()'},{file:'students/ltr1.js',code:'s0.initImage(\'https://th.bing.com/th/id/OIP.2stYdpfk62fcRZIl9Lr3HAHaFW?rs=1&pid=ImgDetMain\');\ns1.initImage(\'https://th.bing.com/th/id/R.cad1ba09a5482a609f99e2c06a33d4cf?rik=4OiPf5icmMeWOQ&riu=http%3a%2f%2ffarm7.staticflickr.com%2f6041%2f6265559256_2ddef4556b_z.jpg&ehk=dJOjS8RgLmpneAdhdEaRjKlpIe%2bEGu8xrE9pNq7TV5s%3d&risl=&pid=ImgRaw&r=0\');\n// src(s0).blend(s1, () => Math.sin((time)) )\nsrc(o0)\n    .modulate(noise(2), 10.705)\n    .scale(1.002)\n    .rotate(() => time / 7119.615 % 760)\n    .blend(osc(6, 0.1, 0.584)\n        .layer(src(s0)\n            .blend(s1, () => Math.sin(time))\n            .luma())\n        .scale(0.9)\n        .mask(shape(4, 0.7, 0.001))\n        .modulate(noise(2), 0.001)\n        .scale(1.002)\n        .rotate(() => time / 5000 % 550)\n        .modulate(noise(2))\n        .pixelate(30, 17.147), 7.01)\n    .modulate(noise(2))\n    .out(o0);'},{file:'students/ltr3.js',code:'shape(13, 0, 1)\n    .rotate(10, 2)\n    .scale(2.02, 3, 1.30, 0.316, 0.876)\n    .pixelate(100, 100)\n    .repeatX(5.48, 1)\n    .repeatY(5.14, 0.213)\n    .scrollX(-10, 0)\n    .scrollY(6, 7)\n    .kaleid(9.93)\n    .luma(0.825, 0.334)\n    .thresh(0.349, 0.9939)\n    .out()'},{file:'students/ltr4.js',code:'shape(3, 0.3, 0.63).rotate(20, 8).out()'},{file:'students/ltr5.js',code:'gradient([1, 2, 4])\n    .layer(src(o0)\n        .luma())\n    .modulate(noise(20000000000))\n    .pixelate(2, 40)\n    .layer(src(o0)\n        .luma())\n    .blend(src(s0)\n        .modulate(noise(77777)))\n    .scrollX(0, 0.1)\n    .out(o0);'},{file:'students/taylor2.js',code:'src(s0)\n    .saturate(2)\n    .modulateKaleid(shape([4,0,2,10]),[1,2,3,4,5])\n    .contrast(1.3)\n    .pixelate([10000,600,21.32, 5, 2000,5000],[10000,600,21.32, 5, 2000,5000])\n    .luma(0.21, 0.351)\n    .repeatX(3.95)\n    .repeatY(3.14, 1)\n    .scrollY(1,0.2)\n    .out(o0)'},{file:'students/tj.js',code:'noise(6,.05)\n.mult( osc(9,0, ()=>Math.sin(time/1.5)+2 ) )\n.mult(\n    noise(9,.03).brightness(1.2).contrast(2)\n    .mult( osc(67,0, ()=>Math.sin(time/67)+13 ) )\n)\n.diff(\n    noise(30,.04).brightness(.2).contrast(1.3)\n    .mult( osc(9,0, ()=>Math.sin(time/5)+13 ) )\n    .rotate( ()=>time/66 )\n)\n.scale( ()=>Math.sin(time/6.2)*.67+.15 )\n.modulateScale(\n    osc(3,0,0).mult( osc(3,0,0).rotate(3.14/2) )\n    .rotate( ()=>time/25 ).scale(.39).scale(2,.12,1).invert()\n    , ()=>Math.sin(time/10.6)*2.10+6  )\n.rotate( ()=>time/67 )\n.mult( shape(100,18,.01).scale(67,67,67) )\n.out()'},{file:'students/tj1.js',code:'noise(6,.05)\n.mult( osc(9,0, ()=>Math.sin(time/1.5)+2 ) )\n.mult(\n    noise(9,.03).brightness(1.2).contrast(2)\n    .mult( osc(9,0, ()=>Math.sin(time/3)+13 ) )\n)\n.diff(\n    noise(15,.04).brightness(.2).contrast(1.3)\n    .mult( osc(9,0, ()=>Math.sin(time/5)+13 ) )\n    .rotate( ()=>time/33 )\n)\n.scale( ()=>Math.sin(time/6.2)*.12+.15 )\n.modulateScale(\n    osc(3,0,0).mult( osc(3,0,0).rotate(3.14/2) )\n    .rotate( ()=>time/25 ).scale(.39).scale(1,.6,1).invert()\n    , ()=>Math.sin(time/10.6)*2.10+6  )\n.rotate( ()=>time/44 )\n.mult( shape(200,.18,.02).scale(2,.12,2) )\n.out()'},{file:'students/tr1.js',code:'src(o0)\n  .blend(\n    osc(6, 0.1, 9.5)\n      .layer(\n        src(s0)\n          .blend(s1, () => Math.sin(time))\n          .blend(s2, () => Math.sin(time / (3 / 2)))\n          .luma()\n      )\n    .modulate(noise(2))\n    .pixelate(250, 400),\n  0.01\n)\n.out(o0);\n'}];function loadRandomSnippet(){aImages.sort(function(){return Math.random()-.5}),s1.initImage(aImages.pop()),s2.initImage(aImages.pop());var chosen=STUDENT_SNIPPETS[getRandomInt(STUDENT_SNIPPETS.length)];try{eval(chosen.code)}catch(e){console.error('Error executing script:',chosen.file,e)}}loadRandomSnippet(),window.__hydraSwapInterval&&clearInterval(window.__hydraSwapInterval),window.__hydraSwapInterval=setInterval(loadRandomSnippet,SWAP_INTERVAL_MS);

const baseMidin = (b, c, m, n, i) => b(c(m).range(0, (n**i)-1).round(), n, i)
const cc = await midin('Launch Control')
const kb = await midikeys('Launch Control')
$: kb().s("crow")

samples('github:tidalcycles/dirt-samples/master')
samples('github:creativenucleus/strudel-m8-168-dnb-jungle')
samples('github:neshanjo/strudel-producer-space-samples')

register('acidenv', (x, pat)=> pat.lpf(100).lpenv(x*9).lps(.2).lpd(9.12))

var scaleSelect = cc(28).range(0,1)
var bassScale = chooseWith(scaleSelect, ["g1:minor", "c1:minor", "c1:major"])
var leadScale = chooseWith(scaleSelect, ["g3:minor", "c3:minor", "c3:major"])
var scaleVocal = chooseWith(scaleSelect, ["etv_gm_136_phrase", "etv_cm_136_phrase", "~"])
var drumBank = chooseWith(cc(48), ["linn", "bossdr110", "bossdr220","tr909"])

// /*
/////////////////////////////////////////////
// 1 Bassline
var gabba_main_drum
var main_drum = stack(
  s("bd - - - bd [- -  bd bd] - -").n(1).slow(2),  
  // s("[- sd]*2").n(2)
    // .every(4, rev)
  ).jux(rev)
  
var bl_drums = stack (
  main_drum,
  // s("[- hh]*4").n(1),
  // s("[[- - - oh] -]*2").n(1),
  // s("[- - - rim]*4 ").n(0).gain(0.7)
)
.color("grey")

var bl_vocals =  s(scaleVocal) //keys[key].bl_vocals)
  .n("<0 1 2 3 - 4 5 - - 6 - - >"// - 7 - 8>"// - 3 0 0 3>"
    .timeline(1)
  )
  .speed((4/3))
.color("yellow")

var bl_bassline = n("0 [~ 7] ~ 0 | ~ [0 7] ~ 0 | 2 [~ 9] ~ 2 | ~ [4 11] ~ 4")
// var bl_bassline = n("0 [~ 0] ~ 0 | ~ [0 0] ~ 0 | 0 [~ 0] ~ 0 | ~ [0 0] ~ 0"
// .add(note(baseMidin(base, cc, 21, 5, 16))))
// var bl_bassline = note(baseMidin(base, cc, 21, 5, 16))  
  // .euclid(cc(41).range(1, 16).round(), 16).slow(2)

var wub = bl_bassline
  .scale(bassScale)
  .s("saw")
  .lpf(300).lpenv(2000).lpattack(0.005).lpdecay(0.15).lpq(5)             .crush(3)
  .gain(0.8)
.color("purple")

var wobBass = bl_bassline
    .scale(bassScale)
    .s("sawtooth")
    .gain(0.34)
    .hpf(35)
    .lpf(sine.fast(4).range(180, 2600))
    .lpq(16)
    .distort(0.65)
    .color("orange")

var subBass = bl_bassline
    .scale(bassScale)
    .s("sine")
    .gain("0.28 1")
    .lpf(140)
    .release(0.25)
    .color("blue")

var wobBass2 = bl_bassline
    .scale(bassScale)
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
var bassline_track =stack(
  bl_drums,
  // basslines,
  // bl_vocals,
)
// */
// /*
/////////////////////////////////////
// 2 Gabba
var gabba_main_drum = stack(
  s("bd*4")
    .every(5, x=>x.fast(2))
    .gain(1.2)
  )

var gabba_drum = stack(
  gabba_main_drum,
  s("hh")
    .euclid(
      "<5>"
      // cc(21).range("<5>",16).round()
      ,16)
    .slow(2)
  ).color("blue")

var gabba_gabba = note(
  baseMidin(base, cc, 41, 7, 7)
  // base(cc(41).range("<10000>", "<99999>").round(), 5,7) 
  )
  .scale(bassScale)
  .struct(gabba_drum)
  // .euclidLegato(cc(42).range("<4>",16).round(),16).slow(2)
  // .clip(0.5)
  .s("gabba")
  .color("orange")
  
var pads = s("<pads>")
  .euclidLegato(5, 8)
  .note(
    baseMidin(base, cc, 43, 5, 7)
  )  
  .scale(leadScale)
  .clip(0.5)
  .gain(0.3)
  .color("green")


var gabba_track =  stack(
  gabba_drum, 
  // gabba_gabba,
  // pads
)
// */
setcpm(136/4) // setcpm(172/4)
$: xfade(bassline_track, cc(48), gabba_track).pianoroll()


//////////////////////////////////////////////


/*
// 3 SPACE
const { Observer, Equator, GeoVector, MoonPhase, KM_PER_AU } = await import('https://esm.run/astronomy-engine@2.1.19');
const observer = new Observer(53.38, -1.46, 0); // SHEFFIELD
const date = new Date();
const moon = Equator('Moon', date, observer, true, true);
const moonDist = round(moon.dist * KM_PER_AU)
const moonDistance = (moonDist - 360000) / 45000
const mars = Equator('Mars', date, observer, true, true);
const marsDist = round(mars.dist * KM_PER_AU)
const sun = Equator('Sun', date, observer, true, true);
const sunDist = round(sun.dist * KM_PER_AU)

const moonEuclidPattern = "<4 5@2 7>"
const sunEuclidPattern = "<5*3 6@3 7>" 
var space_track =  stack(
  s("clubkick*4").color("blue"),
  stack( //space drums
    s("oh").n(1)
      .euclid(moonEuclidPattern,8).slow(2)
      .color("red"),
    s("hh").n(1)
      .euclid(moonEuclidPattern.rev(),8).slow(2)
      .color("orange")
  )
  .bank(drumBank)
  .room(0.2),
  
  note(base(sunDist, 8, sunEuclidPattern))
    .scale(bassScale)
    .euclidLegato(base(sunDist, sunEuclidPattern, 8), 8).slow(2)
    // .fast("<2*5 4>")
    // .clip("<1*5 3>")
    .s("<future>"),
  
    note(base(sunDist, "<8 7@2 9>", sunEuclidPattern))
      .scale(leadScale)
      .euclidLegato(base(sunDist, sunEuclidPattern, 8), 8)
      .s("<gm_tubular_bells>")
      .color("purple")
)


// $: xfade(space_track, cc(48), gabba_track).pianoroll()
// */
///////////////////////////////////////////////////////////////////
/*
var knob_twiddler = stack(
    s("bd")
    .gain(2)
    .bank(drumBank)
    .euclid(base(cc(21).range("<1 2>","<5 7>").round()),8)
    .color("blue"),
 
  s("hh")
    .bank(drumBank)
    .euclidRot(base(cc(41).range("<1>","<5 8>").round()),16,2),

  s("sd")// oh")
    .bank(drumBank)
    .euclid(base(cc(22).range("<1@3 4>","<5 6>").round()),16)
  .sometimes(rev),
  
  
  s("oh")
    .bank(drumBank)
    .euclid(base(cc(42).range("<1 3>","<5 7@3>").round()),8),

  note(baseMidin(base, cc, 24, 6, 7).slow(2))
    .scale(bassScale)
    .euclidLegato(cc(23).range("<1@5 3*3>", "<13@3 8>").round(), 8)
  .sometimes(x=>x.slow(2))
  .o(3)
    .sound(chooseWith(cc(43), [
      "gm_synth_bass_1", 
      "gm_synth_bass_2", 
      "gm_slap_bass_1","gm_slap_bass_2"
    ]))
   .acidenv(cc(44))
    .gain(2)//cc(44).range(1,4))
    .color("orange"),
  
    note(baseMidin(base, cc, 26, 9, 7))
    .scale(leadScale)
    .euclidLegato(cc(25).range(1, 16).round(), 16)
    .sound(chooseWith(cc(45), [
      // "sawtooth", "bytebeat",
      "balafon"]))
     .acidenv(cc(46))
    // .gain(cc(46).range(1,4))
    .color("green")
  )

$: xfade(space_track, cc(48), knob_twiddler).pianoroll()

*/


