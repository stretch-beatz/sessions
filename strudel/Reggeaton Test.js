// @title Reggeaton Test
// @by stretch___beatz

samples('github:sonidosingapura/blu-mar-ten/main/Bass')

setcpm(105/4) // Typical BPM	85-105

const kick = s("bd ~ ~ ~ ~ bd ~ ~")

$: stack(
  kick,
  s("~ ~ ~ sd ~ ~ sd ~"),
  s("~ ~ ~ cp ~ ~ cp ~"),//.swing(),
  s("hh*8").gain(0.25),
  s("perc(3,8)").gain(0.4)
).bank("tr808").every(4, x=>x.fast("2"))

$: "<i VI III VII>"
  // .romanChord("d#:major").voicing().sound("piano")
.romanChord("d#:major").layer(
  pat => n(base(65432,"<5@3 6>")).set(pat).anchor("d5").voicing()
    .sound("marimba"),
  pat => pat.dict("triads").anchor("d3").voicing()
    .sound("gm_string_ensemble_1").gain(0.5),
  pat => pat.dict("triads").anchor("d2").voicing()
    .sound("<bmt_town_808_bass>").struct(kick).gain(0.8),
).punchcard()//{ labels: true, height: 300 })
