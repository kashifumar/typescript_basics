export { };
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1) {
      console.log(numbers[i] + "st");
    } else if (numbers[i] == 2) {
      console.log(numbers[i] + "nd");
    } else if (numbers[i] == 3) {
      console.log(numbers[i] + "rd");
    } else {
      console.log(numbers[i] + "th");
    }
  }
} else {
  console.log("List is empty");
}
