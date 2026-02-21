
// ======== problem 1 ========
let name = "Mosharof";
let age = 20;
let city = "Dhaka";

if(age > 18){
   console.log("Tomi adult");
}else{
    console.log("Tomi minor"); 
}



//  ======= Problem 2 ============

const fruits = ["Apple", "Banana", "Mango", "Orange"];

for(let i = 4 ; i < 4; i++){

    console.log(fruits[i]);

}

const  frinde =['Mosharof', 'Fahim', 'Rakib', 'Jihad', 'Robin', 'Arman', 'Labib'];

for(let i = 0 ; i < frinde.length; i++){
    console.log(i,frinde[i]);
}


// ====================== Problem 3 ===================

const number = [3, 7, 2, 9, 4, 6, 1];
let result = [];
// for(let i = 0 ; i < number.length; i++){
//     if(number[i] > 5){
//         result.push(number[i])
//     }
// }

for(let count of number){

    if(count > 5 ){
        result.push(count);
    }

}


console.log("Total Count",result.length);
console.log("Number Grater Than 5",result);


let num = [21, 55, 60, 40, 30, 70, 40, 30];
let big =[];
// for(const i of num){
//     if(i > 30){
//         big.push(i)
//     }
// }
for(let i = 0 ; i < num.length; i++){
    if(num[i] > 30){
        big.push(num[i]);

    }
}
console.log('Total Count', big);
console.log('Number Greater Than 30', big.length);



const numbers = [3, 5, 4, 7, 8, 9, 21,33];
let small =[];
// for(let i = 0 ; i < numbers.length; i++){
//     if(numbers[i] < 8 ){
//         small.push(numbers[i])
//     }
// }
for(let i of numbers){
    if(i < 8){
        small.push(i)
    }
}

console.log('Total Count', small);
console.log('Number Greater Than 8', small.length);