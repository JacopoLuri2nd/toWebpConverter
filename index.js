import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

imagemin(["./images/*.{jpg,png}"], {
  destination: "./imagesWebp/",
  plugins: [
    imageminWebp({}),
  ],
}).then(() => {
  console.log("Images Converted Successfully!!!");
});