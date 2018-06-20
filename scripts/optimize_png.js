const imagemin = require('imagemin');
const imageminOptipng = require('imagemin-optipng');
const imageminZopfli = require('imagemin-zopfli');

const paths = [
  'src/public/images/',
  'src/public/images/icons/',
  'src/public/images/collectives/',
  'src/public/images/users/',
  'src/public/images/emails/',
  'src/static/images/',
  'src/static/images/buttons/',
  'src/static/images/email/',
  'src/static/images/icons/',
];

const options = {};

options.use = [];

options.use.push(imageminOptipng({
  optimizationLevel: 7,
}));

options.use.push(imageminZopfli({
  more: true,
}));

paths.forEach(path => {
  imagemin([`${path}*.png`], path, options).then((files) => {
    console.log(`${path}*.png was optimized, ${files.length} files`);
  });
});
