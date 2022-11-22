const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
  res.json("You are in the server");
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

module.exports = app

// async function create(dataForQRcode, center_image, width, cwidth) {
//   const canvas = createCanvas(width, width);
//   QRCode.toCanvas(
//     canvas,
//     dataForQRcode,
//     {
//       errorCorrectionLevel: "H",
//       margin: 1,
//       color: {
//         dark: "#000000",
//         light: "#ffffff",
//       },
//     }
//   );

//   const ctx = canvas.getContext("2d");
//   const img = await loadImage(center_image);
//   const center = (width - cwidth) / 2;
//   ctx.drawImage(img, center, center, cwidth, cwidth);
//   return canvas.toDataURL("image/png");
// }

// async function main() {
//   const qrCode = await create(
//     "http://shauryamuttreja.com/qr/",
//   );

//   console.log(qrCode);
// }

// main();

