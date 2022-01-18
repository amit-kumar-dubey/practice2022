"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var DS = /** @class */ (function () {
    function DS(x) {
        this.x = x;
    }
    DS.addDSTest = function (f, b) {
        return f.x + b.x + b.y;
    };
    return DS;
}());
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test(x, y) {
        var _this = _super.call(this, x) || this;
        _this.y = y;
        return _this;
    }
    return Test;
}(DS));
var f = new DS(5);
var b = new Test(5, 5);
console.log(Test.addDSTest(f, b));
