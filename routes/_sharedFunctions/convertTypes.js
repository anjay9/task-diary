function convertTypes(passedTypes) {
  if (!passedTypes) return [];
  const convertedTypes = passedTypes.map(type => {
    return {
      id: type._id,
      name: type.name,
      color: type.color,
    };
  });
  return convertedTypes;
}

module.exports = convertTypes;
