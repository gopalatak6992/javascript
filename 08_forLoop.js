


for (let index = 0; index <= 10; index++) { // index = 11
    console.log(index); // 0 1  2 ... 10 
}
console.log("After loop");


// WAP to get table for 5 ==> 5   10   15   20  25  30   ---- 50
for (let index = 5; index <=50; index=index+5) { // index = 11
    console.log(index); // 0 1  2 ... 10 
}
console.log("After loop");


    for (let index=100; index >=80; index--){
}
//17
//34
for (let index=17; index <=170; index=index+17){
    console.log(index);
}

for(let index=8; index<=80; index=index+8){
    console.log(index);
}


// WAP to reverse the string--> javascript-->tpircsavaj
// javascript

var str="javascript";
for (let index = 0; index < str.length; index++) {
   var char = str.charAt(index);
   console.log(char);
   
    
}



// WAP to reverse the string --> JavaScript --> tpircSavaJ
// JavaScript -->
// initialization = 9
// condition index>=0
// update expression index--
var str = "JavaScript";
var reverseString = "";
for (let index = 9; index >= 0; index--) { // index = 9  8 
    var char = str.charAt(index);
    reverseString = reverseString.concat(char); 
}
console.log(reverseString);


function reverseWord(word){
    var reverseString = "";
    var wordLength = word.length - 1;
    for (let index = wordLength; index >= 0; index--) { // index = 9  8 
        var char = word.charAt(index);
        reverseString = reverseString.concat(char);    
    }
console.log(reverseString);
}
reverseWord("JavaScript");
reverseWord("Google Chrome");
reverseWord("Developer");




