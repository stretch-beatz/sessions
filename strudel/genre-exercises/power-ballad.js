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

class Section {
  src_len = 4
  play_len = 4
  tune_start = 0
  advance_verse_lyrics = 0
  has_lyrics = false
  #numbers = null
  lyrics = null
  chords = []
  chord_type = 0
  transpose = 0
  tune_limit = "6"
  rhythm_limit = "5"
  instruments = {}
  #stack = null
  scale = null
  
  constructor(base_scale, super_pattern) {
    this.scale = base_scale
    this.super_pattern = super_pattern
  }

  set numbers(numbers){
    this.#numbers = numbers
    this.tune = base(this.numbers, super_pattern.slow(this.play_len), this.tune_limit )
    this.rhythm = base(chorus_numbers, super_pattern.slow(this.play_len), this.rhythm_limit )
    this.rhythm = base(chorus_numbers, this.play_len, this.rhythm_base )
  }

  get numbers(){
    return this.#numbers
  }

  build_stack(){
    this.#stack = {}
    if (this.instruments.hasOwnProperty('strings')){
      this.#stack['strings'] =
      s(this.instruments['strings'])
      //n().scale(start_scale)
     .chord(this.chords[this.chord_type]).slow(2)
     .voicing()
     .transpose(this.transpose)
     .gain(0.3)
     .color('lightblue')
    }
    
  if (this.instruments.hasOwnProperty('piano')){
      this.#stack['piano'] =
      s(this.instruments['piano'])
      .n(tune)
      .scale(start_scale)
      .euclidLegato(verse_rythm.slow(2),8)
      .chord(this.chords[this.chord_type])
      .voicing()
      .transpose(keyChange)
      .color('lightgreen')
    }
  }
 
  get stack(){
    if (this.#stack === null){
      this.build_stack()
    }
    return stack(Object.values(this.#stack))
  }
}

/*

//Intro > Verse > Pre-Chorus > Verse > Pre-Chorus > Chorus > Guitar Solo > Bridge > Final Chorus (Key Change) > Outro.
class Intro extends Section {
  src_len = 2
  instruments = {'strings':"gm_violin"}
}

class Verse extends Section {
  advance_verse_lyrics = 8
  has_lyrics = true
  instruments = {'strings':"gm_violin, gm_viola",   'piano':"gm_piano"}
}

class PreChorus extends Section {
  src_len = 2
  tune_start = 3
  instruments = {'strings':"gm_viola",   'guitar':"gm_overdriven_guitar"}
}

class Chorus extends Section {
  src_len = 4
  tune_start = 4
  has_lyrics = true
  instruments = {'strings':"gm_violin, gm_viola",   'guitar':"gm_overdriven_guitar"}
  chord_type = 1
}

class GuitarSolo extends Section {
  src_len = 3
  play_len = 4
  tune_start = 12
  instruments = {'guitar':"gm_overdriven_guitar"}
  chord_type = 1
}

class Bridge extends Section {
  src_len = 2
  play_len = 2
  tune_start = 6
  instruments = {'strings':"gm_viola", 'piano':"gm_piano"}
  chord_type = 1
}

class Outro extends Section {
  src_len = 2
  play_len = 4
  tune_start = 10
  instruments = {'piano':"gm_piano", 'guitar':"gm_overdriven_guitar"}
  chord_type = 1
  transpose = 1
}

class Song{
  super_pattern = "5 5 6 8"
  sections = {}
  order = []
  tune_pos = 0
  verse_lyrics_pos = 0
  start_scale = "a:minor"
  chord_set = A_minor_vi
  prog = null
  
  constructor(prog, super_pattern){
    console.log('Song{')
    this.prog = prog
    this.super_pattern = super_pattern

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
    console.log('addSection(',name, class_obj)
    console.log('class_obj', class_obj)
    var new_section = new class_obj(this.start_scale, this.super_pattern)
    new_section.numbers = this.prog.output.slice(this.tune_start , this.tune_start + this.src_len)
    if(new_section.has_lyrics){
      new_section.lyrics = this.prog.speech.slice(this.lyrics_pos , this.lyrics_pos + this_src.len)
      this.verse_lyrics_pos += new_section.advance_verse_lyrics
    }
    console.log('new_section', new_section, this.verse_lyrics_pos)
    this.sections[name] = new_section
  }

  get arrangment(){
    var new_arrangement = this.order(section_name =>{
      return [section_name.play_len, this.sections[sections_name].stack]
    })
    console.log("arrangment", new_arrangment)
    
    
  }
}

// Rockstar for song
const rockstar_prog = await rockstar_pro`
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

var song = new Song(rockstar_prog)
$ : arrange(song.arrangement)
*/

// $_: n(base(prog.output).slow(2)).scale(my_scale). s("supersaw").gain(1.5)
// samples('shabda/phonemes/en-GB/m:'+prog.speech.join(',')+'?force=0&overrides=papa:P_AA1_P_A')
