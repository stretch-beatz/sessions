# The FoxDot of the Spheres
# Turning the movement of the heavens into music 
#  with SkyField API and functions from my students Algorave Club 

from observationvar import ObservationVar
sun = ObservationVar()


moon = ObservationVar(target="moon", observation="alt")

Scale.default =Scale.major

sun.debug = True

Clock.bpm = 172

d1 >> play("<x   >< X >")

d2 >> play("X", dur=PBase(moon,8)/4, sample=PBase(moon,4))

d_all.soloBars()

p1 >> star(PBase(sun, P[7]).reverse().every(3, "palindrome"), dur=PDur(PBase(sun.now(),10)[-6]+moon.now(), 16))

p1 >> quin(PBase(moon, P[8,7,6]), dur=PDur(P[6,5,6,5], P[24,16]))


sun.multiplier = 0.1

b2 >> space(p1.follow(), oct=2, dur=PDur(P[4,3,5,3],32))erse()














print(SynthDefs)
