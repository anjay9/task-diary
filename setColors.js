const Color = require('./models/Color');

function setColors() {
  Color.find({})
  .exec((err, colors) => {
    if (err) console.log(err);
    if (colors && colors.length === 0) {
      const hexes = [
        // orange
        '#da7400', '#8a5707',
        // red
        '#e50505', '#ae0000',
        // pink/purple
        '#e5058a', '#8200ac', '#68058b',
        // blue
        '#0927ed', '#092f95',
        // teal
        '#008c79',
        // green
        '#2c9b09', '#0a6d27',
      ];

      (function createColor(index = 0) {
        Color.create({ hex: hexes[index] }, (err) => {
          if (err) console.log(err);
          const nextIndex = index + 1;
          if (nextIndex < hexes.length ) createColor(nextIndex);
        });
      })();
    }
  });
}

module.exports = setColors;
