"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.charsCollection = void 0;
var charsCollection = /** @class */ (function () {
    function charsCollection(data) {
        this.data = data;
    }
    Object.defineProperty(charsCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    charsCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    };
    charsCollection.prototype.swap = function (leftIndex, rightIndex) {
        var arrOfChar = this.data.split('');
        var temp = arrOfChar[rightIndex];
        arrOfChar[rightIndex] = arrOfChar[leftIndex];
        arrOfChar[leftIndex] = temp;
        this.data = arrOfChar.join('');
    };
    return charsCollection;
}());
exports.charsCollection = charsCollection;
