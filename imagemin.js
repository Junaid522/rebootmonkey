const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
  const files = await imagemin(['src/assets/*.{jpg,png}'], {
    destination: 'dist/assets/',
    plugins: [
      imageminPngquant({ quality: [0.6, 0.8] }),
      imageminMozjpeg({ quality: 75 }),
    ],
  });

  console.log('Images optimized:', files);
})();
