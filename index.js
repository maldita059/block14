//FizzBuzz

for(let i=1;i<=100;i++){
if(i%3===0&&i%5===0){
console.log("FizzBuzz");
}else if(i%3===0){
console.log("Fizz");
}else if(i%5===0){
console.log("Buzz");
}else{
console.log(i);
}
}

//Reverse Array

const originalArray=[1,2,3,4,5];
const reversedArray=[];

for(let i=originalArray.length-1;i>=0;i--){
reversedArray.push(originalArray[i]);
}

console.log(originalArray);
console.log(reversedArray);

//Consonants and Vowels

const words=['hello','ukulele','awesome',
'onomonopia','textbook'];
const counts=[];

for(let i=0;i<words.length;i++){
let vowels=0;
let consonants=0;
const word=words[i].toLowerCase();
for(let j = 0; j < word.length;j++){
const letter = word[i];
if(letter==='a'||letter==='e'||letter===
'i'||letter==='o'||letter==='u'){
vowels++;
}else if(letter>='a'&& letter <='z'){
consonants++;
}
}
counts.push({word:word,vowels:vowels,
consonants:consonants});
}

for(let i=0;i<counts.length;i++){
console.log(counts[i].word+':'+
counts[i].vowels+'vowels,'+
counts[i].consonants+'consonants');
}

//Filter Odd Numbers

function filterOddNumbers(arr){
return arr.filter(num => num % 2 !== 0);
}

const numbers = [1,2,3,4,5,6,7,8,9];
const oddNumbers = 
filterOddNumbers(numbers);
console.log(numbers);
console.log(oddNumbers);
