d1 >> play("- - ")
b1 >> space(PBase(65432,3), dur=PDur(P[3,4,5,4], 8))
d2 >> play("X x")
b2 >> jbass(PBase(65432,7), dur=PDur(5,12))
wait = Group(d2, b2)
wait.amp = 0


d3 >> play("X", sample=2).drop(end=True, stop=[d1,b1], player=wait)
