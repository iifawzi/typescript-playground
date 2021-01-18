"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(collection) {
        this.collection = collection;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.collection.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.collection[leftIndex] > this.collection[rightIndex];
    };
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var temp = this.collection[rightIndex];
        this.collection[rightIndex] = this.collection[leftIndex];
        this.collection[leftIndex] = temp;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
