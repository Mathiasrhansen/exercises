// const fullName = "Magnus Emil Svendsen";
const fullName = "Svend Jacob Lorandsen";

const firstName = fullName.substring(0, fullName.indexOf(" "));
const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);


console.log(firstName);
console.log(middleName);
console.log(lastName);