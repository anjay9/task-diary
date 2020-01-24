function convertColors(colors) {
  if (!colors) return [];
  const convertedColors = colors.map(color => {
    return {
      id: color._id,
      hex: color.hex
    };
  });
  return convertedColors;
}

module.exports = convertColors;
