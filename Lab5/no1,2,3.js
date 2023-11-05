const number =[10, 30, 20, 11,48,50,14];
const result = number.filter((elem,index,arr) => elem > 20).reduce((accum,elem,index,arr)=> elem+accum,0);
console.log ("Total of greater than 20: ", result);

const city = ['Iowa','Des Montis','FairFeild','New York','California'];
const result1 = city.filter((elem,index, arr) => 
    elem.length >5 && elem.includes('a'));
console.log("The city name length greater than 5 and include a :", result1);

const arr1 =['hi'];
const arr2 = [1,2,3];
const arr3 = ['Hello','world'];

const result3 = arr1.concat(arr2,arr3);

console.log("Concat array result: " , result3);


