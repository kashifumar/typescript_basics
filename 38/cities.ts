export { };
describe_city("Lahore");
describe_city("Karachi");
describe_city("Delhi");


function describe_city(city: string, country = "Pakistan"): void {
  console.log("-------------------------------");
  console.log(city + " is in " + country);
}
