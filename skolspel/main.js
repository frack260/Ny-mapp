let player;
let enemy00 = new Enemy("Troll", 50, 50, 50, 50, 50)




//startar spelet
function startGame(classType) {
switch (classType) {
  case "stefan":
  player = new Player(classType, 100, 100, 100, 100, 100)
  console.log(player);


    break;
    case "jimmie":
    player = new Player(classType, 200, 200, 200, 100, 200)
    console.log(player);

      break;
  default:


  return player;

}
//fixar interfacen
Player(player)
  openModal(player)




}



// genererar nummer till vilket random event som ska hända
let number = (Math.floor((Math.random()*10)+1));
let  enemyChoice = (Math.floor((Math.random()*10)+1));


//fixar första eventet
function firstEvent(number, enemyChoice) {
  enemyEvent(1)
  easyEvent(1)
closeModal(modal)

}
function Bana (choice1, choice2, choice3, story, image, enemyType, smart, styrka, karisma, atletisk, tur) {
  this.enemyType = enemyType
  this.smart = smart
  this.styrka = styrka
  this.karisma = karisma
  this.atletisk = atletisk
  this.tur = tur

  let getInterface = document.getElementById('interface')
  let getHeader = document.getElementById("header");
  getInterface.style.display = 'block'
  getHeader.style.height = '200px'
  console.log(getInterface);
  //sätter upp event backgrund
  getHeader.innerHTML ='<img class="img1"src=" images/'+player.classType+'.jpg" </img><ul class="goodGuy"> <li>Intiligens  '+ player.smart+'</li> <li>Styrka '+ player.styrka+'</li><li>Karisma '+ player.karisma+'</li><li>Atletisk '+ player.atletisk+'</li><li>Tur '+ player.tur+'</li></ul> <div>    <button '+ choice1 +' type="button" name="button">'+ choice1 +' </button> <button '+ choice2 +' type="button" name="button">'+ choice2 +'</button> <button '+ choice3 +'  type="button" name="button"> '+ choice3 +' </button> </div>  ';
  getInterface.innerHTML = '<div class="textBubble"> <p>'+ story +'  </p>  </div > <div class="eventBubble">   </div>  ';
  let eventBubble = document.querySelector('.eventBubble')
  eventBubble.style.backgroundImage = "url('images/"+ image+".jpg')";
     eventBubble.innerHTML =  '<div class="enemyBackground"><img class="img2 "src=" images/'+enemy.enemyType+'.jpg" </img><ul class="badGuy"> <li>Intiligens  '+ enemy.smart+'</li> <li>Styrka '+ enemy.styrka+'</li><li>Karisma '+ enemy.karisma+'</li><li>Atletisk '+ enemy.atletisk+'</li><li>Tur '+ enemy.tur+'</li></ul></div> '
}
//för se stats effekt effekten
const openModalButtons = document.querySelectorAll( '[data-modal-target] ')
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById('overlay')
const modal = document.getElementById('modal')
const modalBody = document.getElementById('modal-body')

//så man kan stänga på x
closeModalButtons.forEach(button  => {
  button.addEventListener("click", () => {
const modal = button.closest('.modal')
closeModal(modal)
  })
});
//så man kan stänga genoma tt trycka på overlay
overlay.addEventListener('click', () =>{
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})


function openModal(classType, smart, styrka, karisma, atletisk, tur) {
  this.classType = classType
  this.smart = smart
  this.styrka = styrka
  this.karisma = karisma
  this.atletisk = atletisk
  this.tur = tur
  var text =   '<ul> <li>Intiligens  '+ player.smart+'</li> <li>Styrka '+ player.styrka+'</li><li>Karisma '+ player.karisma+'</li><li>Atletisk '+ player.atletisk+'</li><li>Tur '+ player.tur+'</li></ul><button onclick="firstEvent()" type="button" name="button">Startgame</button>'
switch (player.classType) {
  case "stefan":
modalBody.innerHTML = '<p> hello'+player.classType+'</p>' + text +'   ';
  modal.classList.add('active')
  overlay.classList.add('active')


    break;
    case "jimmie":
  modalBody.innerHTML = '<p> Alex även känd som'+player.classType+'</p>' + text +'  ';
    modal.classList.add('active')
    overlay.classList.add('active')

  default:

}
modal.classList.add('active')
overlay.classList.add('active')

}

function closeModal(modal) {
if (modal == null) return
modal.classList.remove('active')
overlay.classList.remove('active')

}

function solis() {
  console.log("you made it");
}
