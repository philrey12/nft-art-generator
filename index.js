const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(32, 32)
const ctx = canvas.getContext('2d')

const saveLayer = (img) => {
    fs.writeFileSync('./img/new-image.png', img.toBuffer('image/png'))
    console.log('New image created')
}

const drawLayer = async () => {
    const image = await loadImage('./img/sample.png')
    ctx.drawImage(image, 9, 16, 32, 32)
    saveLayer(canvas)
}

drawLayer()
