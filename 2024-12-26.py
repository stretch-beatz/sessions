from observationvar import ObservationVar
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



print(SynthDefs)
