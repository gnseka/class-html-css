function onClick(arg1, arg2) {


  console.log(arg1);
  console.log(arg2);


  let argument1 = arg1 + 100000
  let argument2 = arg2 + " good boy"

  if((argument1  % 2) == 0 ){
    alert(argument1)
  } else  if( arg2.includes("mal") ){
    alert("exist")
  }
  else {
    alert("no thing passing")
  }


  // document.getElementById("mallik").style.backgroundColor = "blue";
  const a = (document.getElementsByClassName(
    "div-container"
  )[0].style.backgroundColor = "blue");

  console.log(a);
  // alert(arg2);
  document.getElementById("mallik").innerText = arg2;

  let tableArray = [
    {
      sno: 1,
      name: "mallik",
      isLoggedIn: false,
      edit: function edit() {},
    },
    {
      sno: 2,
      name: "mallik",
      isLoggedIn: false,
      edit: function edit() {},
    },
    {
      sno: 3,
      name: "mallik",
      isLoggedIn: false,
      edit: function edit() {},
    },
    {
      sno: 4,
      name: "mallik",
      isLoggedIn: false,
      edit: function edit() {},
    },
    {
      sno: 5,
      name: "mallik",
      isLoggedIn: false,
      edit: function edit() {},
    },
    {
      sno: 6,
      name: "mallik",
      isLoggedIn: false,
      edit: function edit() {},
    },
  ];


  const myObj = {
    name : "mallik",
    srd:132
  }




  console.log(Object.values(myObj) , "tableArray");
}


function divHovered() {


     let color =  getRandomNumber()

console.log(color,color);


  let myDiv  = document.getElementsByClassName("div-container")[0]


  myDiv.style.backgroundColor = "#" + color
console.log(myDiv);
}


function getRandomNumber(){

  let maxVal = 0xFFFFFF;
let randomNumber = Math.random() * maxVal; 
randomNumber = Math.floor(randomNumber);
let randColor = randomNumber.toString(16);


  return randColor

}



function myDivClick(event){

console.log(event);

}



let myInputValue = ""

function inpuOnchange(){
   myInputValue =  document.getElementById("myInputForDiv").value
}


function submitClick(){

 // let inputValue =  document.getElementById("myInputForDiv").value
  console.log(myInputValue);

  if(myInputValue.includes("mal")){
    alert(myInputValue)
  }


}
