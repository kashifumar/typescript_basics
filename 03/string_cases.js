var userName;
userName = "Musa";
var fullName = "MUHAMMAD MUSA";
console.log("Name : " + userName);
console.log("Lower Case : " + userName.toLowerCase());
console.log("Upper Case : " + userName.toUpperCase());
var nameParts = fullName.split(" ");
var titleFullName = "";
for (var i in nameParts) {
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
