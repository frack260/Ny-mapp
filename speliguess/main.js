let box = document.querySelector('#box')
let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
let box3 = document.querySelector('#box3')

let button1 = document.querySelector('#button1')
let buttonupg1 = document.querySelector('#buttonupg1')

let container = document.querySelector('#container')
box1.onclick = add;
button1.onclick = new1;
buttonupg1.onclick = upg1


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
load()






function start() {
console.log(localStorage.score);

if (localStorage.score === undefined ) {
 number = 1
console.log('bajs');
}else {
JSON.parse(myscore)
JSON.parse(b)
JSON.parse(kkk)
number = myscore
  console.log('lol');
}

console.log(number);
}
parseInt(number)
if (number = parseInt(number)) {
  if (b === 100) {
    box2.innerHTML = '';
    var new1 = document.createElement("div")
    container.appendChild(new1)

    new1.classList.add('box4')
        new1.classList.add('boxlol')
        passive();
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


setTimeout(save, 250)
}
function load() {

 myscore = localStorage.getItem("score")
stock1 = localStorage.getItem("b")
upg1 = localStorage.getItem("kkk")


console.log(myscore);
start()
}



function new1() {
  if (number >= 250) {
    box2.innerHTML = '';
    var new1 = document.createElement("div")
    container.appendChild(new1)

    new1.classList.add('box4')
        new1.classList.add('boxlol')
        passive();
      b = 100
number = number - 250
  }

}
k = 0
oskar2()
function oskar2() {


kk = 1000

if (kkk == 0 ) {
kk = 1000
}else if(kkk == 1){
  kk = kkk*kk*1.25
}else {
  kk  = Math.round( (kkk*0.75)*kk*1.25)
}

k = 5*kkk
box3.innerHTML= '<h2 id="upgrade"> '+ kk +'</h2>'

}



function upg1() {
if (number >= kk) {
  console.log(kk);
kkk++
box3.innerHTML= '<h2> '+ kk +'</h2>'
kk
number = number - kk
k = k + 5
oskar2()
}


}


function oskar() {
box.innerHTML = '<h2 class="no-highlight"> '+ number +'</h2> '


console.log(number);



setTimeout(oskar, 100)
}


function oskar1() {
console.log(kkk);
 number+=1
 setTimeout(oskar1, 750)
}


function add() {

x = 10 + k

number+=x
console.log(x);
}


function passive() {

number+=4

  setTimeout(passive, 750)
}
