function isValidTypeName(name) {
  const regex = /^\b(?!.*?\s{2})[a-zA-Z0-9 ]{3,10}\b$/;
  if (!regex.test(name)) return false;
  return true;
}

module.exports = isValidTypeName;
