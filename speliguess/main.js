let box = document.querySelector('#box')
let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
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

load()






function start() {
console.log(localStorage.score);

if (localStorage.score === undefined ) {
 number = 1

}else {
JSON.parse(myscore)
JSON.parse(b)

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


setTimeout(save, 250)
}
function load() {
 myscore = localStorage.getItem("score")
stock1 = localStorage.getItem("b")


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


k= 0
function upg1() {
if (number >= 2000) {
number = number - 2000
k = k + 5

}


}


function oskar() {
box.innerHTML = '<h2 class="no-highlight"> '+ number +'</h2> '
console.log(number);



setTimeout(oskar, 100)
}


function oskar1() {
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
