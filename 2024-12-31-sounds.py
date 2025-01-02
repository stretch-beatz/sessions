print(SynthDefs)

d1 >> play("hX-", dur=PDur([3,5],8), sample=0  ) #z are scratches


p2 >> play("C", dur=PDur(3, 8), sus=4, sample=range(1)) # Voice

p2.soloBars(end=True)

p2 >> play("E", sample=range(5)) # nice asg is exe=ociy

b1 >>dirt( PTri(0,3,1), oct=4, dur=PDur(5,16), sus=1) 

b1 >> dub(PBase(23456,4)[-13:].bubble_sort(), dur=PDur([3,3,3,4],8))

b1.stop()

p1 >> keys(PBase(23456,4), dur=PDur(9,16))

p2 >> arpy(PBase(23456,5), dur=PDur(9,24))


p1.room = 1


#gong

b1.stop()

b1.reset()


# a to d have potential

#e e[0,1]  is the mega chad hi bell thinngy


# BAD spark and quinn rip[ple orient karp arpy swell starpads pasha

#varsaw
