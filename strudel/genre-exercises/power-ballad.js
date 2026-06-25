const { init, rockstar_pro } = await import('https://esm.sh/rockstar-strudel')

// Pre-warm the WASM engine while other code loads (optional but recommended)
await init()

/*
80s power ballads
    Intro > Verse > Pre-Chorus > Verse > Pre-Chorus > Chorus > Guitar Solo > Bridge > Final Chorus (Key Change) > Outro.
    70-90 bpm (or 130+ halftime)
    Belting vocals
    Synth strings
    Piano
    Halftimey reverby drums that often come in later
    Reverb on everything
    Guitar solo?
    Key changes!
    Constant emotional escalation
    Examples: Beverley Craven - Promise Me (of course!!) https://www.youtube.com/watch?v=EmTBKbyaEjU
    Bryan Adams - (Everything I Do) I Do It For You
    Bonnie Tyler - Total Eclipse of the Heart https://www.youtube.com/watch?v=XMmXCyrV_WQ
    George Michael - Careless Whisper (here the saxophone does the belting…) https://www.youtube.com/watch?v=izGwDsrQ1eQ
*/
setcpm(150/4) // 70-90 bpm (or 130+ halftime)


/*
Power ballads frequently utilize A minor, C major, or G major as their primary keys to balance melancholic verses with soaring, anthemic choruses. The true defining feature of the genre is the dramatic upward key change (modulation) right before the final chorus to maximize emotional intensity.
*/

/*
Common Primary Keys & Chord Changes
Key of A minor (vi): Often uses dark, emotive progressions. 
Verse: Am - F - C - G or Am - G - F - E. Chorus: F - C - G - Am.
*/
const A_minor_vi = ["<Am F C G>", "F C G Am"]  
/*
Key of C major (I): Vulnerable but hopeful. 
Verse: C - G - Am - F. Chorus: C - G - Am - F.
*/
const C_major_I = ["<C G Am F>", "C G Am F"]

/*
Key of G major (I): Common for guitar-heavy ballads. 
Verse: G - D - Em - C. Chorus: C - D - Em - C
*/
const G_major_I = ["<G D Em C>", "C D Em F"]

const chords = A_minor_vi



// Belting vocals // sax lines
// Synth strings
const iStrings = "gm_violin,gm_viola"
// Piano
const iPiano = "gm_piano"
// Halftimey reverby drums that often come in later
// Reverb on everything

const sBD =s("bd").room("0.9:4")
// Guitar solo?
const iGuitar = "gm_overdriven_guitar"
// Key changes!
const start_scale = "a:minor"// "c:major"//, "g:major"
const keyChange = "0*4 2*2".slow(16)


// Constant emotional escalation

$: sBD

// Rockstar for verse 1
const prog = await rockstar_pro`
midnight is fading broken silence
heart is beating heavy pressure
echo is calling distant echoes
shadow is holding shattered pieces

Say shadow
Say echo
Say heart
Say midnight

fire is burning through the darkness
memory is pulling fragile fragments
dream is breaking under tension
time is cutting open channels

Say time
Say dream
Say memory
Say fire

echo is rising higher still
echo is rising through the pain
echo is rising past the damage
echo is rising once again

Say echo
Say echo
Say echo
Say echo

Put midnight into heart
Put heart into fire
Put heart into fire
Put echo with fire into shadow

Say echo
Say heart
Say heart
Say midnight
`

class Song{
  super_pattern = "5 5 6 8"
  sections = {}
  order = []
  tune_pos = 0
  lyric_pos = 0
  
  constructor(prog){
    this.prog = prog

    this.addSection('Intro', Intro)
    this.addSection('Verse1', Verse)
    this.addSection('PreChorus', PreChorus)
    this.addSection('Chorus', Chorus)
    this.addSection('Verse2', Verse)
    this.addSection('Verse3', Verse)
    this.addSection('GuitarSolo', GuitarSolo)
    this.addSection('Bridge', Bridge)
    this.addSection('Chorus2',Chorus)
    this.addSection('Outro', Outro)
    
    this.order = ['Intro', 'Verse1', 'PreChorus', 
      //'Verse2', 'PreChorus', 'Chorus',
      //'Verse3', 'PreChorus', 'Chorus',
      //'GuitarSolo', 'Bridge', 'Chorus2', 'Outro'
      ]
  }

  addSection(name, class_obj){
    var new_section = new class_obj()
    new_section.numbers = this.prog.output.slice(this.tune_pos , this.tune_pos + this.len)
    new_section.lyric
  
  }
}

class Section {
  len = 4
  advance_tune = null
  advance_lyrics = 0
  has_lyrics = false
  numbers = null
  
  constructor(height, width) {
    this.height = height;
    this.width = width;
    //Intro > Verse > PreChorus > Verse > PreChorus > Chorus > GuitarSolo > Bridge > (Key Change) Chorus > Outro

  }
  
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

//Intro > Verse > Pre-Chorus > Verse > Pre-Chorus > Chorus > Guitar Solo > Bridge > Final Chorus (Key Change) > Outro.
class Intro extends Section {
  len = 2
  tune_start = 0
}

class Verse extends Section {
  len = 4
  tune_start = 0
  lyrics_start = 0
}

class PreChorus extends Section {
  len = 2
  tune_start = 0
}

class Chorus extends Section {
  len = 4
  tune_start = 0
  lyrics_start = 0
}


class GuitarSolo extends Section {
  len = 8
  tune_start = 0
}

class Bridge extends Section {
  len = 2
  tune_start = 0
}

class Outro extends Section {
  len = 8
  tune_start = 0
}

const verse_numbers = prog.output.slice(0,4)
const verse_tune = base(verse_numbers, super_pattern.slow(4), 5 )
const verse_rythm = base(verse_numbers, super_pattern.slow(4), 4)
console.log('verse_numbers', verse_numbers)

const chorus_numbers = prog.output.slice(4,8)
const chorus_tune = base(chorus_numbers, super_pattern.slow(4), 6 )
const chorus_rythm = base(chorus_numbers, super_pattern.slow(4), 5 )
console.log('chorus_numbers', chorus_numbers)


// $: n("<0,1,2> <0,1,3>").
var groups = {  
  'strings' : s(iStrings)
  //n().scale(start_scale)
  .chord(chords[0]).slow(2)
  .voicing()
  .transpose(keyChange)
  .gain(0.3)
  .color('lightblue')
  ,
 'piano':
s(iPiano)
 //.n()
  .n(verse_tune)
 .scale(start_scale)
  .euclidLegato(verse_rythm.slow(2),8)
  .chord(chords[0])
  .voicing()
  .transpose(keyChange)

  // .every(8 ,(x)=>x.iterback(4))
  // .clip(verse_rythm.slow(2).mul(0.25))
  .color('lightgreen')
}

$: stack(Object.values(groups)).punchcard()

$_:  s(iPiano)
 //.n()
  .n(chorus_tune)
 .scale(start_scale)
  .euclidLegato(chorus_rythm.slow(2),8)
  .chord(chords[0])
  .voicing()
  .transpose(keyChange)
  ._punchcard()


// $_: n(base(prog.output).slow(2)).scale(my_scale). s("supersaw").gain(1.5)
// samples('shabda/phonemes/en-GB/m:'+prog.speech.join(',')+'?force=0&overrides=papa:P_AA1_P_A')
