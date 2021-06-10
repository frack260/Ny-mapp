let knapp1 = document.querySelector("#knapp1")
let knapp2 = document.querySelector("#knapp2")
let knapp3 = document.querySelector("#knapp3")
let knapp4 = document.querySelector("#knapp4")
let box1 = document.querySelector(".box1")


var arr2 = 0;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
function lol() {

arr = [1, 2, 3, 4, 5, 6];
shuffle(arr);
console.log(arr);

}
function oskar3() {



 if (arr[0] === 1) {
var img = "740";

  var svar4 = '"ratt" onclick = "gameover();"'



    var svar2 = '"ratt" onclick = "gameover();"'
  var svar1 = '"ratt" onclick = "gameover();"'
var svar3 = '"ratt" onclick ="igen();" '
var alternativ1 = " volvo v70";
var alternativ2 = "audi rs6";
var alternativ3 = "volvo 740";
var alternativ4 = "volvo 940";
var fraga = "what car is this"

arr.shift();


}
else if (arr[0] === 2) {
  var img = "v70";



var alternativ1 = "volvo v70";
var alternativ2 = "volvo 940";
var alternativ3 = "skoda octavia";
var alternativ4 = "bmw x6";

  var svar2 = '"ratt" onclick = "gameover();"'


var svar1 = '"ratt" onclick = "igen() ;"  '

  var svar3 = '"ratt" onclick = "gameover();"'

  var svar4 = '"ratt" onclick = "gameover();"'
  var fraga = "what car is this"



arr.shift();



}
else if (arr[0] === 3) {
  var img = "modelx";
  var svar2 = '"ratt" onclick = "igen() ;"  '

    var svar4 = '"ratt" onclick = "gameover();"'

    var svar3 = '"ratt" onclick = "gameover();"'


  var svar1 = ' "ratt" onclick = "gameover();" '
  var alternativ1 = "model y";
  var alternativ2 = "model x";
  var alternativ3 = "cybertruck";
  var alternativ4 = "model s";
  var fraga = "witch tesla car is this"

arr.shift();


}
else if (arr[0] === 4) {
  var img = "tesla";

  var knappratt = svar4
  var svar4 = '"ratt" onclick ="igen();" '
  var svar1 = '"ratt" onclick = "gameover();"'

    var svar2 = '"ratt" onclick = "gameover();"'

    var svar3 = '"ratt" onclick = "gameover();"'

  var alternativ1 = " BMW";
  var alternativ2 = "Volvo";
  var alternativ3 = "Polestar";
  var alternativ4 = "Tesla";
  var fraga = "what car brand is this "

arr.shift();

}
else if (arr[0] === 5) {
  var img = "volkswagen";

  var svar1 = '"ratt" onclick ="igen();" '
  var svar4 = '"ratt" onclick = "gameover();"'

    var svar2 = '"ratt" onclick = "gameover();"'

    var svar3 = '"ratt" onclick = "gameover();"'

  var alternativ1 = "Volkswagen";
  var alternativ2 = "BMW";
  var alternativ3 = "Volvo";
  var alternativ4 = "Porshe";
  var fraga = "What car brand is ";

arr.shift();
}
else if (arr[0] === 6) {
  var img = "rs6";

  var svar2 = '"ratt" onclick = "igen() ;"  '


    var svar1 = '"ratt" onclick = "gameover();"'


  var svar4 = '"ratt" onclick = "gameover();"'

  var svar3 = '"ratt" onclick = "gameover();"'
  var alternativ1 = "audi rs5";
  var alternativ2 = "audi rs6";
  var alternativ3 = "audi rs8";
  var alternativ4 = "audi rs3";
  var fraga = "what audi is this"


arr.shift();

}

else {
gameover();
}
console.log(arr );

const points = 6;
let point = points -(arr.length + 1 )

box1.innerHTML =  ' <p>  '+ point + ' </p> ' + ' <div class = "box3">'  + '<img class = "bild" src= images/'+ img + '.jpg alt="">'+ '<p class = "text"> '+fraga +' ?</p>  '+ ' </div>' +'<div class = "box4">  '+ ' <a class="button2 " ' + 'id= ' + svar1 + '  '+'href="#"> '+ alternativ1+' </a>' + '<a class="button2 " ' + 'id=' + svar2 +' href="#">'+ alternativ2+'</a>' +  '   <a class="button2 " ' + 'id= ' + svar3 + ' href="#">'+alternativ3+' </a>'+ '<a class="button2 " ' + 'id= ' + svar4 +  ' href="#">'+ alternativ4 + '</a>'+'</div>';



}
function oskar2() {



 if (arr[0] === 1) {
var img = "matte";

  var svar1 = '"ratt" onclick = "gameover();"'



    var svar2 = '"ratt" onclick = "gameover();"'
  var svar4 = '"ratt" onclick = "gameover();"'
var svar3 = '"ratt" onclick ="igen();" '
var alternativ1 = "10";
var alternativ2 = "0,9";
var alternativ3 = "1";
var alternativ4 = "6";
var fraga = "what will the equation be equal to"

arr.shift();


}
else if (arr[0] === 2) {
  var img = "matte2";


var svar4 = "knappratt";
var alternativ1 = "19";
var alternativ2 = "13";
var alternativ3 = "20";
var alternativ4 = "21";

  var svar1 = '"ratt" onclick = "gameover();"'


var svar2 = '"ratt" onclick = "igen() ;"  '

  var svar3 = '"ratt" onclick = "gameover();"'

  var svar4 = '"ratt" onclick = "gameover();"'
  var fraga = "what will the equation be equal to"



arr.shift();



}
else if (arr[0] === 3) {
  var img = "matte3";
  var svar3 = '"ratt" onclick = "igen() ;"  '

    var svar4 = '"ratt" onclick = "gameover();"'

    var svar2 = '"ratt" onclick = "gameover();"'


  var svar1 = '"ratt" onclick ="igen();" '
  var alternativ1 = "*";
  var alternativ2 = "-";
  var alternativ3 = "+";
  var alternativ4 = "/";
  var fraga = "what calculation method should you use in the equation"

arr.shift();


}
else if (arr[0] === 4) {
  var img = "matte4";

  var knappratt = svar4
  var svar4 = '"ratt" onclick ="igen();" '
  var svar1 = '"ratt" onclick = "gameover();"'

    var svar2 = '"ratt" onclick = "gameover();"'

    var svar3 = '"ratt" onclick = "gameover();"'

  var alternativ1 = "cone = 3 white icecream = 1 red icecream = 2 ";
  var alternativ2 = "cone = 1 white icecream = 4 red icecream = 1";
  var alternativ3 = "cone = 2 white icecream = 2 red icecream = 2";
  var alternativ4 = "cone = 3 white icecream = 2 red icecream = 1";
  var fraga = "solve the equation system"

arr.shift();

}
else if (arr[0] === 5) {
  var img = "matte5";

  var svar1 = '"ratt" onclick ="igen();" '
  var svar4 = '"ratt" onclick = "gameover();"'

    var svar2 = '"ratt" onclick = "gameover();"'

    var svar3 = '"ratt" onclick = "gameover();"'

  var alternativ1 = "pq formel";
  var alternativ2 = "andragradsekvations formel";
  var alternativ3 = "potens formel";
  var alternativ4 = "toptriangel formel";
  var fraga = "vad kallas denna formel"

arr.shift();


}
else if (arr[0] === 6) {
  var img = "matte6";

  var svar2 = '"ratt" onclick = "igen() ;"  '


    var svar1 = '"ratt" onclick = "gameover();"'


  var svar4 = '"ratt" onclick = "gameover();"'

  var svar3 = '"ratt" onclick = "gameover();"'
  var alternativ1 = "7";
  var alternativ2 = "5";
  var alternativ3 = "3,5";
  var alternativ4 = "25";
  var fraga = "hello"


arr.shift();

}

else {
gameover();
}
console.log(arr );

const points = 6;
let point = points -(arr.length + 1 )

box1.innerHTML =  ' <p>  '+ point + ' </p> ' + ' <div class = "box3">'  + '<img class = "bild" src= images/'+ img + '.jpg alt="">'+ '<p class = "text"> '+fraga +' ?</p>  '+ ' </div>' +'<div class = "box4">  '+ ' <a class="button2 " ' + 'id= ' + svar1 + '  '+'href="#"> '+ alternativ1+' </a>' + '<a class="button2 " ' + 'id=' + svar2 +' href="#">'+ alternativ2+'</a>' +  '   <a class="button2 " ' + 'id= ' + svar3 + ' href="#">'+alternativ3+' </a>'+ '<a class="button2 " ' + 'id= ' + svar4 +  ' href="#">'+ alternativ4 + '</a>'+'</div>';



}
function oskar1() {

 if (arr[0] === 1) {
var img = "matte";
  var svar1 = '"ratt" onclick = "gameover();"'
    var svar2 = '"ratt" onclick = "gameover();"'
  var svar4 = '"ratt" onclick = "gameover();"'
var svar3 = '"ratt" onclick ="igen();" '
var alternativ1 = "10";
var alternativ2 = "0,9";
var alternativ3 = "1";
var alternativ4 = "6";
var fraga = "what will the equation be equal to"
arr.shift();
}
else if (arr[0] === 2) {
  var img = "matte2";
var svar4 = "knappratt";
var alternativ1 = "19";
var alternativ2 = "13";
var alternativ3 = "20";
var alternativ4 = "21";
  var svar1 = '"ratt" onclick = "gameover();"'
var svar2 = '"ratt" onclick = "igen() ;"  '
  var svar3 = '"ratt" onclick = "gameover();"'
  var svar4 = '"ratt" onclick = "gameover();"'
  var fraga = "what will the equation be equal to"
arr.shift();
}
else if (arr[0] === 3) {
  var img = "matte3";
  var svar3 = '"ratt" onclick = "igen() ;"  '
    var svar4 = '"ratt" onclick = "gameover();"'
    var svar2 = '"ratt" onclick = "gameover();"'
  var svar1 = '"ratt" onclick ="igen();" '
  var alternativ1 = "*";
  var alternativ2 = "-";
  var alternativ3 = "+";
  var alternativ4 = "/";
  var fraga = "what calculation method should you use in the equation"
arr.shift();
}
else if (arr[0] === 4) {
  var img = "matte4";
  var knappratt = svar4
  var svar4 = '"ratt" onclick ="igen();" '
  var svar1 = '"ratt" onclick = "gameover();"'
    var svar2 = '"ratt" onclick = "gameover();"'
    var svar3 = '"ratt" onclick = "gameover();"'
  var alternativ1 = "cone = 3 white icecream = 1 red icecream = 2 ";
  var alternativ2 = "cone = 1 white icecream = 4 red icecream = 1";
  var alternativ3 = "cone = 2 white icecream = 2 red icecream = 2";
  var alternativ4 = "cone = 3 white icecream = 2 red icecream = 1";
  var fraga = "solve the equation system"

arr.shift();

}
else if (arr[0] === 5) {
  var img = "matte5";
  var svar1 = '"ratt" onclick ="igen();" '
  var svar4 = '"ratt" onclick = "gameover();"'

    var svar2 = '"ratt" onclick = "gameover();"'

    var svar3 = '"ratt" onclick = "gameover();"'

  var alternativ1 = "pq formel";
  var alternativ2 = "andragradsekvations formel";
  var alternativ3 = "potens formel";
  var alternativ4 = "toptriangel formel";
  var fraga = "vad kallas denna formel"

arr.shift();


}
else if (arr[0] === 6) {
  var img = "matte6";

  var svar2 = '"ratt" onclick = "igen() ;"  '


    var svar1 = '"ratt" onclick = "gameover();"'


  var svar4 = '"ratt" onclick = "gameover();"'

  var svar3 = '"ratt" onclick = "gameover();"'
  var alternativ1 = "7";
  var alternativ2 = "5";
  var alternativ3 = "3,5";
  var alternativ4 = "25";
  var fraga = "hello"


arr.shift();

}

else {
gameover();
}
console.log(arr );

const points = 6;
let point = points -(arr.length + 1 )

box1.innerHTML =  ' <p>  '+ point + ' </p> ' + ' <div class = "box3">'  + '<img class = "bild" src= images/'+ img + '.jpg alt="">'+ '<p class = "text"> '+fraga +' ?</p>  '+ ' </div>' +'<div class = "box4">  '+ ' <a class="button2 " ' + 'id= ' + svar1 + '  '+'href="#"> '+ alternativ1+' </a>' + '<a class="button2 " ' + 'id=' + svar2 +' href="#">'+ alternativ2+'</a>' +  '   <a class="button2 " ' + 'id= ' + svar3 + ' href="#">'+alternativ3+' </a>'+ '<a class="button2 " ' + 'id= ' + svar4 +  ' href="#">'+ alternativ4 + '</a>'+'</div>';



}
function oskar() {



 if (arr[0] === 1) {
var img = "matte";

  var svar1 = '"ratt" onclick = "gameover();"'



    var svar2 = '"ratt" onclick = "gameover();"'
  var svar4 = '"ratt" onclick = "gameover();"'
var svar3 = '"ratt" onclick ="igen();" '
var alternativ1 = "10";
var alternativ2 = "0,9";
var alternativ3 = "1";
var alternativ4 = "6";
var fraga = "what will the equation be equal to"

arr.shift();


}
else if (arr[0] === 2) {
  var img = "matte2";


var svar4 = "knappratt";
var alternativ1 = "19";
var alternativ2 = "13";
var alternativ3 = "20";
var alternativ4 = "21";

  var svar1 = '"ratt" onclick = "gameover();"'


var svar2 = '"ratt" onclick = "igen() ;"  '

  var svar3 = '"ratt" onclick = "gameover();"'

  var svar4 = '"ratt" onclick = "gameover();"'
  var fraga = "what will the equation be equal to"



arr.shift();



}
else if (arr[0] === 3) {
  var img = "matte3";
  var svar3 = '"ratt" onclick = "igen() ;"  '

    var svar4 = '"ratt" onclick = "gameover();"'

    var svar2 = '"ratt" onclick = "gameover();"'


  var svar1 = '"ratt" onclick ="igen();" '
  var alternativ1 = "*";
  var alternativ2 = "-";
  var alternativ3 = "+";
  var alternativ4 = "/";
  var fraga = "what calculation method should you use in the equation"

arr.shift();


}
else if (arr[0] === 4) {
  var img = "matte4";

  var knappratt = svar4
  var svar4 = '"ratt" onclick ="igen();" '
  var svar1 = '"ratt" onclick = "gameover();"'

    var svar2 = '"ratt" onclick = "gameover();"'

    var svar3 = '"ratt" onclick = "gameover();"'

  var alternativ1 = "cone = 3 white icecream = 1 red icecream = 2 ";
  var alternativ2 = "cone = 1 white icecream = 4 red icecream = 1";
  var alternativ3 = "cone = 2 white icecream = 2 red icecream = 2";
  var alternativ4 = "cone = 3 white icecream = 2 red icecream = 1";
  var fraga = "solve the equation system"

arr.shift();

}
else if (arr[0] === 5) {
  var img = "matte5";

  var svar1 = '"ratt" onclick ="igen();" '
  var svar4 = '"ratt" onclick = "gameover();"'

    var svar2 = '"ratt" onclick = "gameover();"'

    var svar3 = '"ratt" onclick = "gameover();"'

  var alternativ1 = "pq formel";
  var alternativ2 = "andragradsekvations formel";
  var alternativ3 = "potens formel";
  var alternativ4 = "toptriangel formel";
  var fraga = "vad kallas denna formel"

arr.shift();


}
else if (arr[0] === 6) {
  var img = "matte6";

  var svar2 = '"ratt" onclick = "igen() ;"  '


    var svar1 = '"ratt" onclick = "gameover();"'


  var svar4 = '"ratt" onclick = "gameover();"'

  var svar3 = '"ratt" onclick = "gameover();"'
  var alternativ1 = "7";
  var alternativ2 = "5";
  var alternativ3 = "3,5";
  var alternativ4 = "25";
  var fraga = "hello"


arr.shift();

}

else {
gameover();
}
console.log(arr );

const points = 6;
let point = points -(arr.length + 1 )

box1.innerHTML =  ' <p>  '+ point + ' </p> ' + ' <div class = "box3">'  + '<img class = "bild" src= images/'+ img + '.jpg alt="">'+ '<p class = "text"> '+fraga +' ?</p>  '+ ' </div>' +'<div class = "box4">  '+ ' <a class="button2 " ' + 'id= ' + svar1 + '  '+'href="#"> '+ alternativ1+' </a>' + '<a class="button2 " ' + 'id=' + svar2 +' href="#">'+ alternativ2+'</a>' +  '   <a class="button2 " ' + 'id= ' + svar3 + ' href="#">'+alternativ3+' </a>'+ '<a class="button2 " ' + 'id= ' + svar4 +  ' href="#">'+ alternativ4 + '</a>'+'</div>';



}
function done() {
box1.innerHTML = '<p> you win </p> '

}
function gameover() {
box1.innerHTML = ' <p> game over </p> ';
}


function prevent(e) {
e.preventDefault();
lol();
hej = 0;

oskar();
console.log("hello");
}
function prevent1(e) {
e.preventDefault();
lol();

hej = 1;
oskar1();
console.log("hello");
}
function prevent2(e) {
e.preventDefault();
lol();
hej = 2;

oskar2();
console.log("hello");
}
function prevent3(e) {
e.preventDefault();
lol();
hej = 3;
oskar3();
console.log("hello");
}

function igen(e) {


if (arr.length === 0 ) {
done();
}
else if (hej === 3) {
oskar3()
}
else if (hej === 2) {
oskar2()
}
else if (hej === 1) {
oskar1()
}
else if (hej === 0) {
oskar()
}
else {
  console.log("sdallo");

  oskar()
}

}


knapp1.onclick = prevent;
knapp2.onclick = prevent1;
knapp3.onclick = prevent2;
knapp4.onclick = prevent3;
