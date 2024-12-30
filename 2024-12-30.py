from foxdot_extras.pbase import *
from foxdot_extras.solobar import *
from foxdot_extras.observationvar import *

d1 >> play("- - ")
b1 >> space(PBase(65432,3), dur=PDur(P[3,4,5,4], 8))
d2 >> play("X x")
b2 >> jbass(PBase(65432,7), dur=PDur(5,12))
wait = Group(d2, b2)
wait.amp = 0


d3 >> play("X", sample=2).drop(end=True, stop=[d1,b1], player=wait)

sun = ObservationVar()
print(PBase(sun, 7))

moon = ObservationVar(target="moon", observation="dist")

moon.multiplier = 100

moonNow = moon.now()
sunNow = sun.now()
print(moonNow, sunNow)

d1 >> play("xd", dur=PDur(PBase(moonNow,5,5)[-2:], P[8]))
d2 >> play("-", dur=PDur(PBase(moonNow,8,6)[:3], P[8,4,4]), sample=[0,1,2])
d3 >> play("-", dur=PDur(PBase(moonNow,6,5)[-5:], P[8,8,8,4,4]), sample=2)
d1.every(32, "soloBars", 1)

p1 >> prophet(PBase(moonNow,7), dur=PDur(PBase(moonNow,6,5)[-5:], P[8,8,8,4,4]), sample=2, oct=2)
b1 >> sitar(p1.follow(), dur=PDur(PBase(sunNow,8,6)[:6], P[8,8,8,4,4]), sample=2)
