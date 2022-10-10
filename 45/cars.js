"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function make_car(maker, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: maker,
        model: model
    };
    for (var i = 2; i < arguments.length; i++) {
        // Object.assign(car, arguments[i]);
        car = __assign(__assign({}, car), arguments[i]);
    }
    return car;
}
var car1 = make_car("Toyota", "Corolla");
var car2 = make_car("Honda", "Civic");
var car3 = make_car("Hyundai", "ELANTRA", { color: "Black" }, { engine_size: "1600CC" });
var car4 = make_car("MG", "5", { color: "Yellow" }, { transmission: "Automatic" });
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
