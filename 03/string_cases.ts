
let userName: string;
userName = "Musa";
let fullName = "MUHAMMAD MUSA";
console.log("Name : " + userName);
console.log("Lower Case : " + userName.toLowerCase());
console.log("Upper Case : " + userName.toUpperCase());

let nameParts = fullName.split(" ");
let titleFullName = "";
for (let i in nameParts) {
  nameParts[i] = nameParts[i].toLowerCase();
  nameParts[i] =
    nameParts[i].charAt(0).toUpperCase() + nameParts[i].substring(1);
  if (titleFullName !== "") {
    titleFullName += " ";
  }
  titleFullName += nameParts[i];
}
console.log("Before Title Case : " + fullName);
console.log("After Title Case : " + titleFullName);
