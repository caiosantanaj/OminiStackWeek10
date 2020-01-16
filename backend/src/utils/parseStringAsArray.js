module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(",").map(elements => elements.trim());
}