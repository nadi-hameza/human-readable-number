module.exports = function toReadable(number) {
    const { ToWords } = require('to-words');
    const toWords = new ToWords();
    let a = toWords.convert(number);
    let str = a.toLowerCase();
    return str;
}
