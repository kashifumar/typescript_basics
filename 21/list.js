/*
 * Name : Kashif Umar
 * class and object used
 */
var City = /** @class */ (function () {
    function City(name, province) {
        this.name = name;
        this.province = province;
    }
    return City;
}());
var city1 = new City("Lahore", "Punjab");
var city2 = {
    name: "Kasur",
    province: "Punjab"
};
var city3 = new City("Faisalabad", "Punjab");
var city4 = {
    name: "Islamabad",
    province: "Federal"
};
