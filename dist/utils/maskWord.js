"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maskWord = void 0;
const maskWord = (word) => {
    const start = Math.floor(word.length / 2);
    const end = word.length;
    const asterisks = '*'.repeat(word.length / 2);
    return word.replace(word.substring(start, end), asterisks);
};
exports.maskWord = maskWord;
//# sourceMappingURL=maskWord.js.map