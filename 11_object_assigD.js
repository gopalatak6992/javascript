

let professor = {
    Name: "James Bond",
    Education:"Phd in Computer Engineering",
    Gender: "Male",
    City: "Mumbai",
    Experience:"10 Years",
    degrees : {
      engineering:"CSC",
      PHD:"Adv Computing",
    },

}
 let arrayOfCertificates = ['Hacker rank Participation' , 'Certificate in IFE Course', 'Certificate in Adv Programming'];
professor.totalExperience = "14 Years";
//certificates = "Oracle";
arrayOfCertificates.push("Oracle");


//let arrayLength = arrayOfCertificates.length;
//const lastElement = arrayOfCertificates[arrayLength-1];
//console.log(`Last element: ${lastElement}`);

console.log(professor);
//console.table(professor);
console.log(professor.degrees);
//console.table(professor.degrees);
console.log( `Adding one Array:" ${arrayOfCertificates}`);

let arrayLength = arrayOfCertificates.length;
const lastElement = arrayOfCertificates[arrayLength-1];
console.log(`Last element: ${lastElement}`);
