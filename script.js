//This gets the current day to show in the jumbotron
var today = document.querySelector("#today");
today.textContent = moment().format('dddd MMMM Do YYYY, h:mm:ss a');

// This lets the user enter text into the text areas and saves it to local storage
$(".btn9").on("click", function() {
    var entertext = $(".text9").val();
    localStorage.setItem("9:00", entertext);
});
// This gets the content from local storage for each text area
$(".text9").val(localStorage.getItem("9:00"));

$(".btn10").on("click", function() {
    var entertext = $(".text10").val();
    localStorage.setItem("10:00", entertext);
});
$(".text10").val(localStorage.getItem("10:00"));

$(".btn11").on("click", function() {
    var entertext = $(".text11").val();
    localStorage.setItem("11:00", entertext);
});
$(".text11").val(localStorage.getItem("11:00"));

$(".btn12").on("click", function() {
    var entertext = $(".text12").val();
    localStorage.setItem("12:00", entertext);
});
$(".text12").val(localStorage.getItem("12:00"));

$(".btn1").on("click", function() {
    var entertext = $(".text1").val();
    localStorage.setItem("1:00", entertext);
});
$(".text1").val(localStorage.getItem("1:00"));

$(".btn2").on("click", function() {
    var entertext = $(".text2").val();
    localStorage.setItem("2:00", entertext);
});
$(".text2").val(localStorage.getItem("2:00"));

$(".btn3").on("click", function() {
    var entertext = $(".text3").val();
    localStorage.setItem("3:00", entertext);
});
$(".text3").val(localStorage.getItem("3:00"));

$(".btn4").on("click", function() {
    var entertext = $(".text4").val();
    localStorage.setItem("4:00", entertext);
});
$(".text4").val(localStorage.getItem("4:00"));

$(".btn5").on("click", function() {
    var entertext = $(".text5").val();
    localStorage.setItem("5:00", entertext);
});
$(".text5").val(localStorage.getItem("5:00"));


// Selecting the hours and converting them into a number

var hr1 = document.querySelector(".hr1").textContent;
hr1 = parseInt(hr1[0]);
console.log(hr1)

var hr2 = document.querySelector(".hr2").textContent;
hr2 = parseInt(hr2[1]) + 10;
console.log(hr2)

var hr3 = document.querySelector(".hr3").textContent;
hr3 = parseInt(hr3[1]) + 10;
console.log(hr3)

var hr4 = document.querySelector(".hr4").textContent;
hr4 = parseInt(hr4[1]) + 10;
console.log(hr4)

var hr5 = document.querySelector(".hr5").textContent;
hr5 = parseInt(hr5[0]) + 12;
console.log(hr5)

var hr6 = document.querySelector(".hr6").textContent;
hr6 = parseInt(hr6[0]) + 12;
console.log(hr6)

var hr7 = document.querySelector(".hr7").textContent;
hr7 = parseInt(hr7[0]) + 12;
console.log(hr7)

var hr8 = document.querySelector(".hr8").textContent;
hr8 = parseInt(hr8[0]) + 12;
console.log(hr8)

var hr9 = document.querySelector(".hr9").textContent;
hr9 = parseInt(hr9[0]) + 12;
console.log(hr9)

// Selecting the text areas to color code by time

var text9 = document.querySelector(".text9");
console.log(text9)
var text10 = document.querySelector(".text10");
var text11 = document.querySelector(".text11");
var text12 = document.querySelector(".text12");
var text1 = document.querySelector(".text1");
var text2 = document.querySelector(".text2");
var text3 = document.querySelector(".text3");
var text4 = document.querySelector(".text4");
var text5 = document.querySelector(".text5");

// Color coding the text areas based off the current time

var currentTime = moment().format('H');
currentTime = parseInt(currentTime);
var hours  = [hr1, hr2, hr3, hr4, hr5, hr6, hr7, hr8, hr9];
var textArea = [text9, text10, text11, text12, text1, text2, text3, text4, text5];

function colorCode() {
    for (i = 0; i < hours.length; i ++) {
        if (hours[i] < currentTime) {
            textArea[i].classList.add("past");
        }
        else if (hours[i] === currentTime) {
            textArea[i].classList.add("present");
        }
        else {
            textArea[i].classList.add("future");
        }
    }
}
colorCode();


