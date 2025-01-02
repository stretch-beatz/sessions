#from foxdot_extras.pbase import *
#from foxdot_extras.solobar import *
from foxdot_extras.observationvar import *
sun = ObservationVar()
moon = ObservationVar(target="moon", observation="dist")

moon.multiplier = 100

moon.observation="azi"

moonNow = moon.now()
sunNow = sun.now()
rint(moonNow, sunNow)

Clock.bpm = 172

d1 >> play("x", dur=PDur(PBase(sunNow,5,P[8,8,4]), P[8,16,8]), sample=3)

d1.every(32, "soloBars", 1)

p1 >> karp(PBase(sun,6), dur=PDur(PBase(sunNow,6,7)[-7:], P[8,4,4]), sample=2, oct=[3,4])

p1.stop()

p2 >> ripple(PBase(sun,5), dur=PDur(PBase(sunNow,5),8), room=(PBase(sun)-0.5)*2)

b2 >>bug(p2.follow(), dur=PDur(PBase(moonNow,5),8), oct=4)

d2 >> play("X", dur=PDur(PBase(sunNow,8),16)/16, sample=PBase(sun))


d2 >> play("X", dur=PDur(5,8), sample=PBase(sun,3))
d2.stop()

d2.soloBars(4, end=True)
#

print(SynthDefs)
