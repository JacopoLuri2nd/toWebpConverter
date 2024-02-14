import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

try {
  imagemin(["./images/*.{jpg,png}"], {
    destination: "./imagesWebp/",
    plugins: [imageminWebp({ quality: 100, method: 6, lossless: 9 })],
  }).then(() => {
    console.log("Images Converted Successfully!!!");
  });
} catch (error) {
  console.log(error);
}
