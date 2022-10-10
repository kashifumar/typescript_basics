
/*
 * Name : Kashif Umar
 * class and object used
 */
class City {
  name: string;
  province: string;
  constructor(name: string, province: string) {
    this.name = name; this.province = province;
  }
}
const city1 = new City("Lahore", "Punjab");

const city2 = {
  name: "Kasur",
  province: "Punjab",
};

const city3 = new City("Faisalabad", "Punjab");

const city4 = {
  name: "Islamabad",
  province: "Federal",
};
