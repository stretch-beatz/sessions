// @title 90s
// @by stretch___beatz





const { init, rockstar_pro } = await import('https://esm.sh/rockstar-strudel')
await init()

const score = await createScoreVisualiser({leftPadding: 480})
score.start()

var prog = await rockstar_pro`
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
`

var prog2 = await rockstar_pro`
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


let lines = prog.sourceText.split('\n').filter((x)=> x!='').map((x)=> x.trim())
let line = "<~@4 0@8>".pick([chooseWith(run(lines.length).div(lines.length).slow(lines.length).slow(2), lines)])

line.vis_score_lyrics('Singers')

stack("~",
  base("<~@2 1 2 3@2 4@2 2 5 >".pick(prog.output),8,4)
  .euclid(base("<~@8 1 2 3@2 4@2 2 5 >".pick(prog.output), 5),8)
  .as("n:penv").scale("c4:minor").clip(0.90).patt("0.15")
  .s("square").delay(0.3).dfb(0.3).dt(60/128).gain(0.7),








      
  "<~@4 0@8>".pick([
  base("<1 2 3@2 4@2 >".pick(prog.output),6,1)
  .euclid("<0 1@2 2>".add(base("<~@4 1 2 3@2 4@2 2 5 >".pick(prog.output), 6,1)),8)
  .scale("c4:minor").s("square").gain(0.01)
    ])
        .vis_score_notes('Singers'),

      
  base("<~@16 [0,1] ~@2 [0,2]>".pick(prog.output), 5)
  .euclid(base("<1 2 3@2 4@2 2 4 >".pick(prog.output), 8 ,1),8)
  .scale("c4:minor").note().clip(0.7).s("z_sawtooth").color("red")
      .adsr("0.07:.1:0.6:0.1").gain(0.5),   

  base("<3@2 1 3 4@2 2 5 >".pick(prog.output),8)
  .euclid(base("<1 2 3@2 4@2 2 5 >".pick(prog.output), "<9 12>"),16)
  .scale("c2:minor").note().clip(0.9)
  .layer(x=>x.s("z_sawtooth").delay(0.6).dfb(0.5).dt(60/125*3/4).pan(0.55).gain(0.8)
      ,x=>x.s("z_square").lpf(300).lpe(2).lpa(-1.5).lpd(0.1).lpr(0.05).pan(0.45).gain(1)).color("green"),



      
      
  "<0@4 [0,1]@8 [0,1,2]@4 [0,1,2,3]@4>".pickRestart([
   stack(s("oh*16").pan(0.45).gain("[0.08 0.16]*4").release(0),s("hh*4").pan(0.7).gain(0.20)),
        s("bd*4").lpf(150).gain(1),
        s("cp").euclid(base(prog.output[0],4,4),4).gain(0.5).pan(0.25),
        s("rd").euclid(base(prog.output[1],5,4),8).gain(0.15).release(0).hpf(1500).pan(0.75),
        s("rd").euclid(base(prog.output[2],5,2),8).slow(2).gain(run(32).slow(2).mul(1/31).add(0.1).mul(0.4)),
        s("cr").euclid(base(prog.output[13],3,2),4).gain(0.2),
        s("bd").euclid(base(prog.output[5],3,2),4).gain(0.8)     
 ]).bank("RolandTR909").velocity(0.7).color("gray")
 
).cpm(124.5/4).room(0.3)
.pianoroll()

await initHydra({ feedStrudel:1, detectAudio:true }) //strudel = s0
// hydra code
s1.init({src: score.canvas})
src(s1).add(s0)
  .out(o0)
