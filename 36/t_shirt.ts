export { };

make_shirt("Small", "I Love Python");
make_shirt("Medium", "I Want to Learn Typescript");

function make_shirt(size: string, text: string): void {
  console.log("-------------------------------");
  console.log("The size of the shirt is: " + size + "\nAnd the text to be printed is: " + text);
}

