//@title Hydra visualisation test
//@by stretch___beatz

const cc = await midin('Launch Control')
const kb = await midikeys('Launch Control')

// SETUP Hydra * midicontrol visulisation
await initHydra({feedStrudel:1, detectAudio:true})

const canvas = document.createElement('canvas')
canvas.width = 700   
canvas.height = 600  

const ctx = canvas.getContext('2d')

s1.init({ src: canvas })

// Defined explicitly in two rows matching the hardware cc layout
const topRow = [21, 22, 23, 24, 25, 26, 27, 28]
const bottomRow = [41, 42, 43, 44, 45, 46, 47, 48]

let lastDrawTime = 0
const frameInterval = 250 //ms

// Draw each meter could be redone as dials 
function drawMeter(n, colIndex, rowIndex, barColor) {
  const v = cc(n).firstCycleValues?.[0] ?? 0
  
  // Calculate grid positioning based on row and column index
  const x = 40 + colIndex * 80
  const yOffset = rowIndex * 270 // Creates vertical separation between rows
  const h = v * 200

  // 1. Draw knob track background slot
  ctx.fillStyle = '#222'
  ctx.fillRect(x, 60 + yOffset, 50, 200)

  // 2. Draw active filled level bar with its row-specific color
  ctx.fillStyle = barColor
  ctx.fillRect(x, 260 + yOffset - h, 50, h)

  // 3. Draw text labels
  ctx.fillStyle = 'white'
  ctx.font = '16px monospace'
  ctx.fillText(n, x + 12, 285 + yOffset)
  ctx.fillText(v.toFixed(2), x - 2, 50 + yOffset)
}

// make it onlt redraw the background on a timer rather than every frame
function draw(timestamp) {
  requestAnimationFrame(draw)

  if (timestamp - lastDrawTime < frameInterval) return
  lastDrawTime = timestamp

  // Clear canvas background
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  
  // Render Top Row (Orange)
  topRow.forEach((n, i) => {
    drawMeter(n, i, 0, '#ff9900')
  })

  // Render Bottom Row (Lime Green)
  bottomRow.forEach((n, i) => {
    drawMeter(n, i, 1, '#00ff66')
  })
}

requestAnimationFrame((timestamp) => {
  lastDrawTime = timestamp
  draw(timestamp)
})
/////////////////////////////////////////////////////

// Strudel
$: stack(
  s("bd")
    .euclid(cc(21).range(0,16).round(),16)
    .color("blue"),  
  s("sd").n(2)
    .euclidRot(cc(41).range(0,8).round(),16, 2)
    .every(4, rev)
    .color("purple")
  
).jux(rev).pianoroll()

// Hydra
src(s0)
  .blend(src(s1), () => Math.sin(time) * 0.5 + 0.5)
  .modulateRotate(shape(999,0.3,0.5),H(cc(22).mul(Math.PI)))
  .scrollY(
    ()=> a.fft[0]*(cc(42).firstCycleValues?.[0] ?? 0)
  )
  .out(o0)
  
