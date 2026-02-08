const testName = "MaTHiAs";

const newName = testName.substring(0, 2).toLowerCase() + 
                testName.substring(2, 3).toUpperCase() + 
                testName.substring(3).toLowerCase();

console.log(newName);