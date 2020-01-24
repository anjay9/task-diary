function convertTypes(passedTypes) {
  if (!passedTypes) return [];
  const convertedTypes = passedTypes.map(type => {
    return {
      id: type._id,
      name: type.name,
      colorId: type.color._id,
      colorHex: type.color.hex
    };
  });
  return convertedTypes;
}

module.exports = convertTypes;
