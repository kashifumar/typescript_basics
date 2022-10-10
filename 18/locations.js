var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locations = ["Makkah", "New Zealand", "Madina", "Dubai", "Canada"];
console.log("Original Order");
console.log("---------------");
for (var i = 0; i < locations.length; i++) {
    console.log(locations[i]);
}
var tempLocations = __spreadArray([], locations, true);
tempLocations.sort();
console.log("---------------");
console.log("After Sorting");
console.log("---------------");
for (var i = 0; i < tempLocations.length; i++) {
    console.log(tempLocations[i]);
}
console.log("---------------");
console.log("After Sorting Original List");
console.log("---------------");
for (var i = 0; i < locations.length; i++) {
    console.log(locations[i]);
}
tempLocations.reverse();
console.log("---------------");
console.log("After Reverse Sorting");
console.log("---------------");
for (var i = 0; i < tempLocations.length; i++) {
    console.log(tempLocations[i]);
}
console.log("---------------");
console.log("After Reverse Sorting Original List");
console.log("---------------");
for (var i = 0; i < locations.length; i++) {
    console.log(locations[i]);
}
tempLocations.reverse();
console.log("---------------");
console.log("After Reverse");
console.log("---------------");
for (var i = 0; i < tempLocations.length; i++) {
    console.log(tempLocations[i]);
}
tempLocations.reverse();
console.log("---------------");
console.log("After Again Reverse");
console.log("---------------");
for (var i = 0; i < tempLocations.length; i++) {
    console.log(tempLocations[i]);
}
tempLocations.sort();
console.log("---------------");
console.log("After Sort");
console.log("---------------");
for (var i = 0; i < tempLocations.length; i++) {
    console.log(tempLocations[i]);
}
tempLocations.reverse();
console.log("---------------");
console.log("After Sort");
console.log("---------------");
for (var i = 0; i < tempLocations.length; i++) {
    console.log(tempLocations[i]);
}
