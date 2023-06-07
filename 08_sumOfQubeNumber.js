

var sumOfQube= function(num){
    var sum=0;
    for(let index = 1; index<=9; index++){
        sum = sum +index*index*index;

    }
    console.log(`Sum of Qube of number is: ${num}`);

}
sumOfQube(5);