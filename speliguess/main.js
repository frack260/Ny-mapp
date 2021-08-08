let box = document.querySelector('#box')

let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
let box3 = document.querySelector('#box3')
let box5 = document.querySelector('#box5')
let box6 = document.querySelector('#box6')
new2 = 0
ff = 200
let button1 = document.querySelector('#button1')
let buttonupg1 = document.querySelector('#buttonupg1')

let container = document.querySelector('#container')
box1.onclick = add;
button1.onclick = new1;
buttonupg1.onclick = upg1
inc = 1

if (localStorage.b === undefined) {
b = 1
}else if ( localStorage.b == 1) {
b = 1
}
else {
  b = 100
}

if (localStorage.kkk === undefined) {
kkk = 0
}else {
kkk = localStorage.kkk
console.log('kkk');
}
if (localStorage.fff === undefined) {
fff = 0
}else {
fff = localStorage.fff
console.log('fff');
}
load()






function start() {
console.log(localStorage.score);

if (localStorage.score === undefined ) {
 number = 1
 score = 1
console.log('bajs');
}else {
  JSON.parse(myscore);

JSON.parse(b)
JSON.parse(kkk)
JSON.parse(fff)

number = myscore
  console.log('lol');
}

console.log(number);
}
parseInt(number)
if (number = parseInt(number)) {
  if (b == 100) {
    box2.innerHTML = '';
    var new1 = document.createElement("div")
    container.appendChild(new1)
new2 = document.createElement('button')
var new3 = document.createTextNode("uppgrade")
new2.setAttribute('id', 'upg2')
new2.appendChild(new3)

container.appendChild(new2)
    new1.classList.add('box4')
        new1.classList.add('boxlol')
        inc = inc + 4
  }
  save()
  oskar()
  oskar1()
}else {
  console.log("error");
}


function save () {
score = number

localStorage.setItem("score", score)
localStorage.setItem("b", b)
localStorage.setItem("kkk", kkk)
localStorage.setItem("fff", fff)
console.log(number);
setTimeout(save, 250)

}
function load() {

 myscore = localStorage.getItem("score")
stock1 = localStorage.getItem("b")
upg1 = localStorage.getItem("kkk")



start()
}
console.log(number);


function new1() {
  if (number >= ff) {
    box2.innerHTML = '';
    var new1 = document.createElement("div")
    container.appendChild(new1)

    new1.classList.add('box4')
        new1.classList.add('boxlol')
    inc += 4
      b = 100
number = number - 250
 new2 = document.createElement('button')
var new3 = document.createTextNode("uppgrade")
new2.setAttribute('id', 'upg2')
new2.appendChild(new3)
console.log(number);

container.appendChild(new2)
  }

}





ff = 200
f = 0
oskar4()
function oskar4() {
console.log(number);

  ff = 200

if (fff == 0 ) {
ff =200
console.log(number);
}else if(fff == 1){
  ff = fff*ff*1.15
}else {
  ff  = Math.round( (fff*0.75)*ff*1.1)
}

f = 1*fff

}console.log(number);


k = 0
oskar2()
function oskar2() {


kk = 100

if (kkk == 0 ) {
kk = 100
}else if(kkk == 1){
  kk = Math.round(  kkk*kk*1.15)
}else {
  kk  = Math.round( (kkk*0.5)*kk*1.1)
}

k = 3*kkk
box3.innerHTML= '<h2 id="upgrade" class=" no-highlight"> '+ kk +'</h2>'

}
lol12()
function lol12() {
  inc = inc+ f
}
function lol123() {
  inc = inc + 1
}

function upg2() {
if (number >= ff) {
  console.log(kk);
fff++

number = number - ff
f = f + 1
lol123()
oskar4()
}


}


function upg1() {
if (number >= kk) {
  console.log(kk);
kkk++
box3.innerHTML= '<h2> '+ kk +'</h2>'
kk
number = number - kk
k = k + 3
oskar2()
}


}


function oskar() {
box.innerHTML = '<h2 class="no-highlight scoreboard"> '+ number + "$"+'</h2> '


console.log(number);


console.log(ff);
setTimeout(oskar, 100)
}



function oskar1() {
console.log(kkk);
if (inc > 1) {
  c = inc/inc



    number += c

}
cc = 1000/inc

setTimeout(oskar1, cc)



}

console.log(number);
x = 0
function add() {

x = 1 + k

number+=x
xx = x + "$+"
console.log(x);
addanimation()

}






function addanimation() {
var tt = document.createElement('p')
  var t = document.createTextNode(xx)
  tt.appendChild(t)
  tt.classList.add('fadeOut')
box6.appendChild(tt)
$( ".fadeOut").fadeOut(700);

  console.log(t);



}



oskar3()

function oskar3() {
inc1 = inc-1
  box5.innerHTML = '<h2 class="no-highlight scoreboard"> '+ inc1 +"$: per second "+'</h2> '

console.log('hellosvavrmos');
console.log(f)

  setTimeout(oskar3, 500)



}
new2.onclick = upg2

var x = 0;
