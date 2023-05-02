const { convertStringToNumber } = require('convert-string-to-number'); 
const sizeOf = require('image-size')



console.log("my first project ran");

let a = "mallik";
let b = "arjuna";

let c = a + "   " + b;

let myEditMarks = (arg1) => {
  console.log(arg1);
};

// function myEditMarks() {}

let myJson = {
  name: "mallik",
  std: 7,
  marks: [1, 2, 3, 4, 5, 6, 7],
  mallik: myEditMarks,
};

console.log(myJson.mallik());

let myArray = [1, 2, 3, 4, 5, 6, 7];

// console.log(myArray[7]);

// function myMapFunction(element,index){
// console.log(element)

// if(index === 2) return element
// return element + 100
// }

//  const resultArr =  myArray.map(myMapFunction)

// console.log(resultArr);

// function myForEachFunction(element){
// }

let myForEachFunction;

myArray.forEach((element) => {
  console.log(element);
});

const oddArr = myArray.filter((element) => {
 return element % 2 === 0;
});

console.log(oddArr);


for(let i = 0 ; i < myArray.length ; i++){
    console.log(myArray[i])
}


const int = convertStringToNumber('3.456456456'); // => 2

console.log(int);

const dimensions = sizeOf('download.jpeg')
console.log(dimensions.width, dimensions.height)