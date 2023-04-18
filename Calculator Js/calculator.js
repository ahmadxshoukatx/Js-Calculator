let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");
let res = document.getElementById("result");



document.getElementById("add").addEventListener("click", function () {
  res.value = parseInt(n1.value) + parseInt(n2.value);
});
document.getElementById("sub").addEventListener("click", function () {
  res.value = parseInt(n1.value) - parseInt(n2.value);
});
document.getElementById("mul").addEventListener("click", function () {
  res.value = parseInt(n1.value) * parseInt(n2.value);
});
document.getElementById("div").addEventListener("click", function () {
  res.value = parseInt(n1.value) / parseInt(n2.value);
});





const addvalue = () => {
  const inputval = document.querySelectorAll("input[type=button]")
  
  inputval.forEach((item) => {
    item.addEventListener('click', (e)=>{
     n1.value = item.value
     
      console.log(item.value);
    })
  })
}
addvalue()

// var a = document.querySelector(".a");
// var b = document.querySelector(".b");

//......................input first............................//


// one.addEventListener("click", function () {
//   num1.value += "1";
// });
// two.addEventListener("click", function () {
//   num1.value += "2";
// });
// three.addEventListener("click", function () {
//   num1.value += "3";
// });
// four.addEventListener("click", function () {
//   num1.value += "4";
// });
// five.addEventListener("click", function () {
//   num1.value += "5";
// });
// six.addEventListener("click", function () {
//   num1.value += "6";
// });
// seven.addEventListener("click", function () {
//   num1.value += "7";
// });
// eight.addEventListener("click", function () {
//   num1.value += "8";
// });
// nine.addEventListener("click", function () {
//   num1.value += "9";
// });
// zero.addEventListener("click", function () {
//   num1.value += "0";
// });


//......................input second............................//




// one.addEventListener("click", function () {
//   num2.value += "1";
// });
// two.addEventListener("click", function () {
//   num2.value += "2";
// });
// three.addEventListener("click", function () {
//   num2.value += "3";
// });
// four.addEventListener("click", function () {
//   num2.value += "4";
// });
// five.addEventListener("click", function () {
//   num2.value += "5";
// });
// six.addEventListener("click", function () {
//   num2.value += "6";
// });
// seven.addEventListener("click", function () {
//   num2.value += "7";
// });
// eight.addEventListener("click", function () {
//   num2.value += "8";
// });
// nine.addEventListener("click", function () {
//   num2.value += "9";
// });
// zero.addEventListener("click", function () {
//   num2.value += "0";
// });
