import { createCanvas } from "canvas"

export function drawPNG(ip, geolocation) {
  const width = 1280
  const height = 720
  const lineheight = 84
  const start = 120

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = "#1a1a1a"
  ctx.fillRect(0, 0, width, height)
    
  ctx.font = 'normal normal 50px Helvetica'
  ctx.textAlign = "center"
  ctx.fillStyle = "#e5e5e5"
  ctx.fillText('Your IP address is:', 640, start)
  ctx.fillText(ip, 640, start + lineheight)

  ctx.fillText('This places you near:', 640, 440)
  ctx.font = 'normal normal 40px Helvetica'
  ctx.fillText(`${geolocation.city}, ${geolocation.country_code}`, 640, 440 + lineheight)
  ctx.font = 'normal normal 24px Helvetica'
  ctx.textAlign = "right"
  ctx.fillText(`© Dark2`, 1270, 710)
  return canvas
}
