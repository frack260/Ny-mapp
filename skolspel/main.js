let player;
let enemy00 = new Enemy("Troll", 400, 500, 50, 550, 50, 550)



//startar spelet
function startGame(classType) {
switch (classType) {
  case "stefan":
  player = new Player(classType, 300, 150, 150, 150, 100, 100)
  console.log(player);


    break;
    case "jimmie":
    player = new Player(classType, 200, 200, 200, 200, 100, 200)
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

//fixar första eventet
function firstEvent() {
  let number = (Math.floor((Math.random()*2)+1));
  let  enemyChoice = (Math.floor((Math.random()*2)+1));
  enemyEvent(enemyChoice)
  easyEvent(number)
closeModal(modal)

}
function Bana (choice1, choice2, choice3, choice1Text, choice2Text choice3Text, story, image, enemyType, liv, smart, styrka, karisma, atletisk, tur) {
  this.enemyType = enemyType
  this.liv = liv
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
  getHeader.innerHTML ='<img class="img1"src=" images/'+player.classType.toLowerCase()+'.jpg" </img><ul class="goodGuy"> <li id="playerHealth">Health:  '+ player.liv+'</li><li>Intiligens:  '+ player.smart+'</li> <li>Strength: '+ player.styrka+'</li><li>Charisma: '+ player.karisma+'</li><li>Agility: '+ player.atletisk+'</li><li>Luck: '+ player.tur+'</li></ul> <div id="choiceButton">    <button '+ choice1 +' type="button" name="button">'+ choice1 +' </button> <button '+ choice2 +' type="button" name="button">'+ choice2 +'</button> <button '+ choice3 +'  type="button" name="button"> '+ choice3 +' </button> </div>  ';
  getInterface.innerHTML = '<div class="textBubble"> <p>'+ story +'  </p>  </div > <div class="eventBubble">   </div>  ';
  let eventBubble = document.querySelector('.eventBubble')
  eventBubble.style.backgroundImage = "url('images/"+ image+".jpg')";
     eventBubble.innerHTML =  '<div class="enemyBackground"><img class="img2 "src=" images/'+enemy.enemyType.toLowerCase()+'.jpg" </img><ul class="badGuy"> <li id="enemyHealth">Health:  '+ enemy.liv+'</li <li>Intiligens:  '+ enemy.smart+'</li> <li>Strength: '+ enemy.styrka+'</li><li>Charisma: '+ enemy.karisma+'</li><li>Agility: '+ enemy.atletisk+'</li><li>Luck: '+ enemy.tur+'</li></ul></div> '
     let choiceButton = document.getElementById('choiceButton')

}
//för se stats effekt effekten
const openModalButtons = document.querySelectorAll( '[data-modal-target] ')
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById('overlay')
const modal = document.getElementById('modal')
const modalBody = document.getElementById('modal-body')
const closeButton = document.querySelector(".close-button")
//så man kan stänga på x
closeModalButtons.forEach(button  => {
  const modal = button.closest('.modal')

  button.addEventListener("click", closeBut)  })

function closeBut() {
  closeModal(modal)
    }



//så man kan stänga genoma tt trycka på overlay
overlay.addEventListener('click',closeOverLay )
function closeOverLay() {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {

    closeModal(modal)
  })
}


function openModal(classType, liv, smart, styrka, karisma, atletisk, tur) {
  this.classType = classType
  this.liv = liv
  this.smart = smart
  this.styrka = styrka
  this.karisma = karisma
  this.atletisk = atletisk
  this.tur = tur
  var text =   '<ul> <li>Health  '+ player.liv+'</li> <li>Intiligens  '+ player.smart+'</li> <li>Styrka '+ player.styrka+'</li><li>Karisma '+ player.karisma+'</li><li>Atletisk '+ player.atletisk+'</li><li>Tur '+ player.tur+'</li></ul><button onclick="firstEvent()" type="button" name="button">Startgame</button>'
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


      break;

  default:
  modal.classList.add('active')
  overlay.classList.add('active')


}
modal.classList.add('active')
overlay.classList.add('active')

}

function closeModal(modal) {

if (modal == null) return
modal.classList.remove('active')
overlay.classList.remove('active')
}



function openWinOrLoseModal(condition) {
  switch (condition) {
    case "lose":
      modalBody.innerHTML = '<button  onclick="reset()"type="button" name="button">reset</button>  '  ;
     overlay.onclick = reset;
     closeButton.addEventListener("click", reset)
    modal.classList.add('active')
    overlay.classList.add('active')
      break;
    default:

  }

}

function reset() {
location.reload()
}

function openWinModal() {
  console.log(enemy.enemyType);
  closeModalButtons.forEach(button  => {
    const modal = button.closest('.modal')

    button.removeEventListener('click',closeBut)  })

  overlay.removeEventListener('click',closeOverLay )
  modalBody.innerHTML = 'you defeated a'+enemy.enemyType +' <button  onclick="firstEvent( )  "type="button" name="button">continue</button> '
  modal.classList.add('active')
  overlay.classList.add('active')
}
