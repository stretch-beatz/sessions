from observationvar import ObservationVar
obs = ObservationVar()

obs.debug = True
obs.multiplier=0.1

obs.target="mars"

d1 >> play("<X   >< x ><- >")#, amp=3, room=[1, 0.5], mix=[0.5,.5,1])

d2 >> play(P["<Xx>"].bubble(), amp=2)
d_all.soloBars()


Scale.default = Scale.major

b2 >> jbass(PBase(obs,P[8,5,9])+(0,PBase(17051999,3)), dur=PDur(PBase(17051999,P[8,5,9]),8))

p1 >> pads(dur=PDur(PRange(2,10),P[16,12])).follow(b1) + (P[1,2,1]^P(0,2,1).bubble())

p1.reset()



p1.stop()
