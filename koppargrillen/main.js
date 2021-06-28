window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
const selected = document.querySelector(".selected");
const optionContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll('.option2');

selected.addEventListener("click", ()=>{
  optionContainer.classList.toggle("active");
})
optionsList.forEach( o => {
  o.addEventListener("click", () =>{
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionContainer.classList.remove("active")
  })
});
const selected1 = document.getElementById('selected1')
const optionContainer1 = document.getElementById('options-container1')

const optionsList1 = document.querySelectorAll('.option1');

selected1.addEventListener("click", ()=>{
  optionContainer1.classList.toggle("active");
})
optionsList1.forEach( o => {
  o.addEventListener("click", () =>{
    selected1.innerHTML = o.querySelector("label").innerHTML;
    optionContainer1.classList.remove("active")
  })
});

$('.box1 a').on('click', function (e) {
if (this.hash !== "") {
  e.preventDefault();
  const hash = this.hash
  $('html, body').animate(
    {
      scrollTop: $(hash).offset().top
    },
    800
  );
}
});


 function prevent(e) {
e.preventDefault()
 }
var button1 = document.querySelector(".button1")
button1.onclick = prevent
button1.onclick = error

const name = document.getElementById('name')
const email = document.getElementById('email')
const telefonnummer = document.getElementById('telefonnummer')

const errorELement = document.getElementById('error')
const errorELement1 = document.getElementById('error1')
const errorELement2 = document.getElementById('error2')

function error(e) {
e.preventDefault()
console.log('hello');
 let messages2 = []
 let messages1 = []
 let messages = []
   lol2 = 2
    lol3 = 2
    lol1 = 2
  if (name.value === '' || name.value == null ) {
messages.push("Name is required")

  }

  if (name.value.match(/^[0-9]+$/)) {
messages.push("Your name can't contain number")
  }
if (email.value.length == 0 ) {
  messages1.push("Email is required")
}

else if (email.value.includes('@')){
errorELement2.innerText = ('')
}




else {
  messages1.push('Enter a valid email')

}


  if (email.value.length >= 20 ) {
    messages1.push('Password must be less than 20 characters')
console.log('sadlpmkasmpd');
  }
  if (telefonnummer.value.length > 11 ) {
    messages2.push('Your number must be less than 11 characters')
      console.log('78y372');
  }
  if (telefonnummer.value.match(/^[0-9]+$/)) {
console.log('jasndjkandsandoawnidawdkwnad');
}
else if (telefonnummer.value.length > 0 ) {
    messages2.push('Enter only numbers')
}else {
    messages2.push('Phone number is required')
}
if (messages.length > 0) {

e.preventDefault()
 errorELement.innerText = messages.join(', ')

}else {
     lol3 = 1
}

 if (messages2.length > 0) {

 e.preventDefault()
 errorELement1.innerText = messages2.join(', ')

  }
    else {
         lol2 = 1
    }

  if (messages1.length > 0) {

  e.preventDefault()
  errorELement2.innerText = messages1.join(', ')

 }
else {
     lol1 = 1
}

console.log(lol1);
console.log(lol2);
console.log(lol3);
   if (lol1 === 1 && lol2 === 1 && lol1 === 1) {
console.log('oskar suger');

 errorELement1.innerText = ('')
 errorELement.innerText = ('')

const openModalButtons = document.querySelectorAll( '[data-modal-target] ')
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById('overlay')


openModal(modal)




overlay.addEventListener('click', () =>{
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button  => {
  button.addEventListener("click", () => {
const modal = button.closest('.modal')
closeModal(modal)
  })
});
function openModal(modal) {
if (modal == null) return
modal.classList.add('active')
overlay.classList.add('active')

}

function closeModal(modal) {
if (modal == null) return
modal.classList.remove('active')
overlay.classList.remove('active')

}
} };
