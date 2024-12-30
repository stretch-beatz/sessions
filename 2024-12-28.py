d1 >> play("x X ", dur=0.5)#, dur=PBuildUp())


print(PDur(5,8).doubletime())


d1.dur = 1/2
d1.dur = PQuicken(stepsize=3)

print(PBase(1982345654567,10).bubble_sort())

p1 >> pads([0, 1, 2, 3, 1], dur=PDur(5,8).every(4, "buildup", 5))

d1 >> play("- X ", dur=PDur(4,4).every(4, "buildup", 6))

d1.reset()


# new drop idea 
# apply it to a player or group
# you supply the Clock
# you supply the player/group to play afterwards (otherwise its all)
#  you calculate the  current dur length 
# you calculate the  buildup and its length
## at next _bar reset the clock so everything then works in time 
# you  solo the player / PGroup for the buildup and hold
# restart everything in the afterwards group
# reset the dur if you need to
#  player  def pause(self): &   def play(self):


# New pattern.trunc(value) which shortens a pattern down so its sum is equal to value  
## like     def accum(self, n=None) and    def stretch(self, size): but on value not number of items
#would be nice to choose which end to work from

