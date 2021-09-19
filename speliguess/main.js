let box = document.querySelector('#box')
let list = document.querySelector('#list')
let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
let box3 = document.querySelector('#box3')
let box5 = document.querySelector('#box5')
let box6 = document.querySelector('#box6')
new2 = 0
ff = 200
l = 50

let button1 = document.querySelector('#button1')
let buttonupg1 = document.querySelector('#buttonupg1')
box1.onclick = add
buttonupg1.onclick = upg1
let container = document.querySelector('#container')
inc = 0

if (localStorage.b === undefined) {
b = 0.
}else if ( localStorage.b == 0) {
b = 0
}
else {
  b = 1
}

if (localStorage.kkk === undefined) {
kkk = 0
}else {
kkk = localStorage.kkk
console.log('kkk');
}
if (localStorage.iceCreamTimes === undefined) {
iceCreamTimes = 0
}else {
iceCreamTimes = localStorage.iceCreamTimes
console.log('iceCreamTimes');
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
JSON.parse(iceCreamTimes)

number = myscore
  console.log('lol');
}

console.log(number);
}





upgrades()



function upgrades() {

for (var i = 0; i < 10; i++) {
  var n = document.createElement('button')

 var oo = document.createElement('div')
 var pp = document.createElement('div')
var img  = document.createElement('img')
img.src =  'ice.jpg0'
img.classList.add('image')
oo.appendChild(img)
n.setAttribute('id','but'+i)
pp.classList.add('boxl')
pp.setAttribute('id','boxl'+i)

oo.setAttribute('id','boxx'+i)
oo.classList.add('box4')
oo.classList.add('boxlol')
oo.classList.add('opacity')
oo.setAttribute('id','img'+i)
nn = document.createTextNode('buy')
n.classList.add('button12')

n.appendChild(nn)
pp.appendChild(n)
list.appendChild(pp)
pp.appendChild(oo)


}
}
buyfun()
//köp passiva systemet börjar här
function buyfun() {
  buyfun1 = document.getElementById('but0')
  buyfun2 = document.querySelector('#but1')
  buyfun3 = document.querySelector('#but2')
  buyfun4 = document.querySelector('#but3')
  buyfun5 = document.querySelector('#but4')
  buyfun6 = document.querySelector('#but5')
  buyfun7 = document.querySelector('#but6')
  buyfun8 = document.querySelector('#but7')
  buyfun9 = document.querySelector('#but8')
  buyfun10 = document.querySelector('#but9')
  img1 = document.getElementById('img0')
  img2 = document.querySelector('#img1')
   img3 = document.querySelector('#img2')
   img4 = document.querySelector('#img3')
   img5 = document.querySelector('#img4')
   img6 = document.querySelector('#img5')
   img7 = document.querySelector('#img6')
   img8 = document.querySelector('#img7')
   img9 = document.querySelector('#img8')
   img10 = document.querySelector('#img9')
  buyfun1.addEventListener('click', buyice)





}




function buyice() {
if (number > l) {
number = number - l
b = 1
inc += 1

buyfun1.innerHTML = 'invest'+ iceCreamCost
img1.classList.remove('opacity')
console.log(inc);
buyfun1.removeEventListener('click', buyice)
buyfun1.addEventListener('click', upgice1)

}
}



iceCreamCost = 75
iceCream = 0
upgcheck1()
function upgcheck1() {
  buyfun1.innerHTML = 'invest '+ iceCreamCost +' ' + iceCreamTimes

  iceCreamCost = 75

if (iceCreamTimes == 0 ) {
iceCreamCost = 75
console.log(number);
}else if(iceCreamTimes == 1){
  iceCreamCost = Math.round(iceCreamTimes*iceCreamCost*1.15)
}else {
 iceCreamCost  = Math.round( (iceCreamTimes*0.75)*iceCreamCost*1.1)
}

iceCream = 1*iceCreamTimes

}
function lol123() {
  inc = inc + 1
}

function upgice1() {
if (number >= iceCreamCost) {
  buyfun1.innerHTML = 'invest '+ iceCreamCost +' ' + iceCreamTimes

iceCreamTimes++

number = number - iceCreamCost
iceCream = iceCream + 1
lol123()
upgcheck1()
}
 }

 lol12()
 function lol12() {
   inc = inc+ iceCream
    }
//och här slutar köp passiv systemet



parseInt(number)
if (number = parseInt(number)) {
  if (b == 1) {
  inc += 1
  b = 1
  img1.classList.remove('opacity')

  buyfun1.innerHTML = 'invest '+ iceCreamCost +' ' + iceCreamTimes
  buyfun1.removeEventListener('click', buyice)
buyfun1.addEventListener('click', upgice1)

  }
  save()
  oskar()
  oskar1()
  }


function save () {
score = number

localStorage.setItem("score", score)
localStorage.setItem("b", b)
localStorage.setItem("kkk", kkk)
localStorage.setItem("iceCreamTimes", iceCreamTimes)
setTimeout(save, 250)

}
function load() {

 myscore = localStorage.getItem("score")
stock1 = localStorage.getItem("b")
upg1 = localStorage.getItem("kkk")



start()
}










k = 0
oskar2()
function oskar2() {


kk = 10

if (kkk == 0 ) {
kk = 10
}else if(kkk == 1){
  kk = Math.round(  kkk*kk*1.15)
}else {
  kk  = Math.round( (kkk*0.75)*kk*1.1)
}

k = 3*kkk
box3.innerHTML= '<h2 id="upgrade" class=" no-highlight"> '+ kk +'</h2>'



}
function lol123() {
  inc = inc + 1
}

function upg2() {
if (number >= ff) {
fff++

number = number - ff
f = f + 1
lol123()
oskar4()
}


}


function upg1() {
if (number >= kk) {

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
if (inc >= 1) {
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
inc1 = inc
  box5.innerHTML = '<h2 class="no-highlight scoreboard"> '+ inc1 +"$: per second "+'</h2> '

console.log('hellosvavrmos');


  setTimeout(oskar3, 500)



}





new2.onclick = upg2

var x = 0;
