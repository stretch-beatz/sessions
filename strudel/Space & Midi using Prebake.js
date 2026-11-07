//@title Space & Midi Prebake 
//@by stretch___beatz

const cc = await midin('Launch Control')
const kb = await midikeys('Launch Control')

$: kb().s('crow')

var scaleSelect = cc(28).range(0,1)??0
var bassScale = chooseWith(scaleSelect,['g1:minor','c1:minor','c1:major'])
var leadScale = chooseWith(scaleSelect,['g3:minor','c3:minor','c3:major'])
var drumBank = chooseWith(cc(47),['linn','bossdr110','bossdr220','tr909'])

samples('github:tidalcycles/dirt-samples/master')
samples('github:creativenucleus/strudel-m8-168-dnb-jungle')
samples('github:neshanjo/strudel-producer-space-samples')

const {
  Observer,
  Equator,
  MoonPhase,
  KM_PER_AU
} = await import('https://esm.run/astronomy-engine@2.1.19')

const observer = new Observer(53.38, -1.46, 0) //Sheffield
const date = new Date() //Now

const moon = Equator('Moon', date, observer, true, true)
const mars = Equator('Mars', date, observer, true, true)
const sun = Equator('Sun', date, observer, true, true)

const moonDist = Math.round(moon.dist * KM_PER_AU)
const marsDist = Math.round(mars.dist * KM_PER_AU)
const sunDist = Math.round(sun.dist * KM_PER_AU)

const moonDistance = (moonDist - 360000) / 45000

const moonEuclidPattern = "<6 5@2 3>"
const sunEuclidPattern = "<5*3 5@3 7>"

var space_track = stack(
  // s('clubkick*4').color('blue'),
  stack(
    s('oh').n(1).euclid(moonEuclidPattern,8).slow(2).color('red'),
    s('hh').n(1).euclid(moonEuclidPattern.rev(),8).slow(2).color('orange')
  ).bank(drumBank).room(0.2),

  note(base(sunDist,8,sunEuclidPattern))
    .scale(bassScale)
    .euclidLegato(base(sunDist,sunEuclidPattern,8),8)
    .slow(2)
    .s('future'),

  note(base(sunDist,'<8 7@2 9>',sunEuclidPattern))
    .scale(leadScale)
    .euclidLegato(base(sunDist,sunEuclidPattern,8),8)
    .s('gm_tubular_bells')
    .color('purple')
)

setcpm(162/4)
$: space_track.pianoroll()

await initHydra({ feedStrudel:1, detectAudio:true }) //strudel = s0

// Load the visualisers
const midiVis = new MidiVisualiser({cc}, {47: drumBank})
const spaceVis = new SpaceVisualiser({observer, Equator, KM_PER_AU})
midiVis.start()
spaceVis.start()

// hydra code
s1.init({src: midiVis.canvas})
s2.init({src: spaceVis.canvas})
smoothMix([s0,s1,s2])
  .modulateRotate(shape(999,0.3,0.5),H(cc(22).mul(Math.PI)))
  .scrollY(
    ()=> a.fft[0]*(cc(42).firstCycleValues?.[0] ?? 0)
  )
  .out(o0)
