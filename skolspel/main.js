let player;

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
//fixar första eventet
function firstEvent() {
closeModal(modal)
let getInterface = document.getElementById('interface')
let getHeader = document.getElementById("header");
getInterface.style.alignItems = 'flex-start'
console.log(getInterface);
easyEvent(1)
getHeader.innerHTML = easyEventHeader
getInterface.innerHTML = easyEventInterface

}
function event (easyEvent) {

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
