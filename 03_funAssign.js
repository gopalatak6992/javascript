
console.log("My Personal Details:");
//var firstName;
//var lastName;
//var collegeName;
function personalDetails(firstName, lastName, collegeName){
    console.log(" ");
    console.log("First Name : ",firstName);
    console.log("Last Name : ", lastName);
    console.log("College Name : ",collegeName);
}
personalDetails("Gopal", "Atak","DCPE Amravati");
console.log("-------------------------------------");

var hubby ="Virat";
var wife ="Anushka";
var value1= 1000;
var value2 = 2000;
function swapValuesDude(hubby, wife){
    console.log("Before Swap : ", hubby , wife);
    var temp =hubby;
        hubby = wife;
        wife = temp; 
    console.log("After Swap : ",hubby , wife);
}
swapValuesDude("Virat", "Anushka");
swapValuesDude(1000,2000);
console.log("------------------------------");

function addThreeValues(a,b,c){
    var result = a+b+c;  
    console.log("Result : ", result);
}
addThreeValues(50,650,3.14);
addThreeValues("Hello" , " Good", " Morning");