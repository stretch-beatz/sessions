const cc = await midin('Launch Control')
window.kb  = await midikeys('Launch Control')

$: stack(
  "bd".s()
    // .n(cc(43).range(0,16).round()) // chose sample on cc(43) (lower knob 3)
    .n(base(cc(43).range(10,99).round(), 8), 16) //  chose 2 samples .on cc(43) (lower knob 3)
    // .euclid(cc(23).range(0,16).round(),16) // chose sample on cc(43) (lower knob 3)
    .euclid(base(cc(23).range(16,160).round(), 16), 16)// 2 part beat from upper knob
    ,
  "hh".s()
  .n(cc(44).range(0,16).round()) // chose sample on cc(43) (lower knob 3)
    // .n(base(cc(44).range(10,99).round(), 8), 16) //  chose 2 samples .on cc(43) (lower knob 3)
    .euclid(cc(24).range(0,16).round(),16) // chose sample on cc(43) (lower knob 3)
    // .euclid(base(cc(23).range(16,160).round(), 16), 16)// 2 part beat from upper knob  
    ,

  "oh".s()
  .n(cc(45).range(0,16).round()) // chose sample on cc(43) (lower knob 3)
    // .n(base(cc(45).range(10,99).round(), 8), 16) //  chose 2 samples .on cc(43) (lower knob 3)
    // .euclid(cc(25).range(0,16).round(),16) // chose sample on cc(43) (lower knob 3)
    .euclid(base(cc(25).range(16,160).round(), 16), 16)// 2 part beat from upper knob

  )._punchcard({labels:1,cycles:2})
