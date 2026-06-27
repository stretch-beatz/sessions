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


// Constant emotional escalation

class Section {
  constructor(base_scale, super_pattern, scale, chords) {
    this.src_len = 4
    this.play_len = 4
    this.tune_start = 0
    this.advance_verse_lyrics = 0
    this.has_lyrics = false
    this._numbers = null
    this.lyrics = null
    this.chords = chords
    this.chord_type = 0
    this.transpose = 0
    this.tune_limit = "6"
    this.rhythm_limit = "5"
    this.instruments = {}
    this._stack = null
    this.scale = scale

    this.scale = base_scale
    this.super_pattern = super_pattern
  }

  set numbers(numbers){
    this._numbers = numbers
    this.tune = base(this.numbers, this.super_pattern.slow(this.play_len), this.tune_limit)
    this.rhythm = base(this.numbers, this.super_pattern.slow(this.play_len), this.rhythm_limit)
  }

  get numbers(){
    return this._numbers
  }

  build_stack(){
    this._stack = {}
    if (this.instruments.hasOwnProperty('strings')){
      this._stack['strings'] =
      s(this.instruments['strings'])
      //n().scale(start_scale)
     .chord(this.chords[this.chord_type]).slow(2)
     .voicing()
     .transpose(this.transpose)
     .gain(0.3)
     .color('lightblue')
    }
    
  if (this.instruments.hasOwnProperty('piano')){
      this._stack['piano'] =
      s(this.instruments['piano'])
      .n(this.tune)
      .scale(start_scale)
      .euclidLegato(this.rhythm.slow(2),8)
      .chord(this.chords[this.chord_type])
      .voicing()
      .transpose(this.transpose)
      .color('green')
    }

    if (this.instruments.hasOwnProperty('guitar')){
      this._stack['guitar'] =
      s(this.instruments['guitar'])
      .n(this.tune)
      .scale(start_scale)
      .euclidLegato(this.rhythm.slow(2),8)
      .chord(this.chords[this.chord_type])
      .voicing()
      .transpose(this.transpose)
      .color('orange')
    }
    if (this.instruments.hasOwnProperty('drums')){
      this._stack['drums'] = stack(
        s("bd")
        .euclid(this.rhythm.slow(2),8)
        .mask("1 0 1 0")
        .color('red'),

        s("sn")
        .euclid(this.rhythm.slow(2),8)
        .mask("1*3 0")
        .color('pink'),

        s(this.instruments['hh'])
        .euclid(this.rhythm.slow(2),8)
        .mask("0 1*3")
        .color('purple')
        )
        
    }
  }
 
  get stack(){
    if (this._stack === null){
      this.build_stack()
    }
    console.log('Keys', Object.keys(this._stack))
    return stack(...Object.values(this._stack))
  }
}


//Intro > Verse > Pre-Chorus > Verse > Pre-Chorus > Chorus > Guitar Solo > Bridge > Final Chorus (Key Change) > Outro.
class Intro extends Section {
  constructor(base_scale, super_pattern, scale, chords) {
    super(base_scale, super_pattern, scale, chords)
    this.src_len = 2
    this.instruments = { 'strings': "gm_violin" }
  }
}

class Verse extends Section {
  constructor(base_scale, super_pattern, scale, chords) {
    super(base_scale, super_pattern, scale, chords)
    this.advance_verse_lyrics = 8
    this.has_lyrics = true
    this.instruments = { 'strings': "gm_violin, gm_viola", 'piano': "gm_piano" , "drums": 2}
  }
}

class PreChorus extends Section {
  constructor(base_scale, super_pattern, scale, chords) {
    super(base_scale, super_pattern, scale, chords)
    this.src_len = 2
    this.tune_start = 3
    this.instruments = { 'strings': "gm_viola", 'guitar': "gm_overdriven_guitar", "drums": 1 }
  }
}

class Chorus extends Section {
  constructor(base_scale, super_pattern, scale, chords) {
    super(base_scale, super_pattern, scale, chords)
    this.src_len = 4
    this.tune_start = 4
    this.has_lyrics = true
    this.instruments = { 'strings': "gm_violin, gm_viola", 'guitar': "gm_overdriven_guitar", "drums": 1 }
    this.chord_type = 1
  }
}

class GuitarSolo extends Section {
  constructor(base_scale, super_pattern, scale, chords) {
    super(base_scale, super_pattern, scale, chords)
    this.src_len = 3
    this.play_len = 4
    this.tune_start = 12
    this.instruments = { 'guitar': "gm_overdriven_guitar", "drums": 1 }
    this.chord_type = 1
  }
}

class Bridge extends Section {
  constructor(base_scale, super_pattern, scale, chords) {
    super(base_scale, super_pattern, scale, chords)
    this.src_len = 2
    this.play_len = 2
    this.tune_start = 6
    this.instruments = { 'strings': "gm_viola", 'piano': "gm_piano" , "drums": 2}
    this.chord_type = 1
  }
}

class Outro extends Section {
  constructor(base_scale, super_pattern, scale, chords) {
    super(base_scale, super_pattern)
    this.src_len = 2
    this.play_len = 4
    this.tune_start = 10
    this.instruments = { 'piano': "gm_piano", 'guitar': "gm_overdriven_guitar" }
    this.chord_type = 1
    this.transpose = 1
  }
}



class Song{
  constructor(prog, super_pattern, start_scale, chord_set){
    
    this.super_pattern = super_pattern || "5 5 6 8"
    this.sections = {}
    this.order = []
    this.tune_pos = 0
    this.verse_lyrics_pos = 0
    this.start_scale = start_scale || "a:minor"
    this.chord_set = chord_set || ["<Am F C G>", "F C G Am"] 
    this.prog = null

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
      'Verse2', 'PreChorus', 'Chorus',
      'Verse3', 'PreChorus', 'Chorus',
      'GuitarSolo', 'Bridge', 'Chorus2'
                  //, 'Outro'
      ]
  }

  addSection(name, class_obj){
    var new_section = new class_obj(this.start_scale, this.super_pattern, this.scale, this.chord_set)
    new_section.numbers = this.prog.output.slice(new_section.tune_start, new_section.tune_start + new_section.src_len)
    if(new_section.has_lyrics){
      new_section.lyrics = this.prog.speech.slice(this.verse_lyrics_pos, this.verse_lyrics_pos + new_section.advance_verse_lyrics)
      this.verse_lyrics_pos += new_section.advance_verse_lyrics
    }
    //console.log('new_section', new_section, this.verse_lyrics_pos)
    this.sections[name] = new_section
  }

  get arrangement(){
    var new_arrangement = this.order.map(section_name => {
      var section = this.sections[section_name]
      return [section.play_len, section.stack]
    })
    console.log("arrangement", new_arrangement)
    return new_arrangement
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

const A_minor_vi = ["<Am F C G>", "F C G Am"]  
const C_major_I = ["<C G Am F>", "C G Am F"]
const G_major_I = ["<G D Em C>", "C D Em F"]
const start_scale = "g:major" //"a:minor"// "c:major"//, "g:major"

var song = new Song(rockstar_prog, "5 6 6 7", start_scale, G_major_I)
$ : arrange(...song.arrangement).punchcard()


// $_: n(base(prog.output).slow(2)).scale(my_scale). s("supersaw").gain(1.5)
// samples('shabda/phonemes/en-GB/m:'+prog.speech.join(',')+'?force=0&overrides=papa:P_AA1_P_A')
