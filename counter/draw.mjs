import { createCanvas, loadImage } from "canvas"
import axios from "axios"

export async function drawPNG() {
  const start = 430
  const img = await loadImage('joeyy.png');
  const hits = (await axios.get(`https://api.countapi.xyz/hit/${proces.env.COUNTAPI_NAMESPACE}/${process.env.COUNTAPI_KEY}`)).data.value
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, img.width, img.height);
  
  ctx.font = 'normal normal 30px Helvetica'
  ctx.textAlign = "center"
  ctx.fillStyle = "#000000"
  ctx.fillText(hits, 180, start)

  return canvas
}
