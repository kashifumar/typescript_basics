export { };
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Jakarta", "Indonesia"));
console.log(city_country("Istanbul", "Turkia"));

function city_country(city: string, country: string): string {
  return city + ", " + country;
}
