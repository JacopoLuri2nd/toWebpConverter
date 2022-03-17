import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

// Setup: lancia npm i da terminale
// 1 Metti le immagini dentro la cartella images
// 2 Lanci node index.js da terminale
// 3 Le immagini in webp sono nella cartella specificata (imagesWebp come default, ma puoi creare la cartella che vuoi)

imagemin(["./images/*.{jpg,png}"], {
  destination: "./imagesWebp/",
  plugins: [
    imageminWebp({}),
  ],
}).then(() => {
  console.log("Images Converted Successfully!!!");
});