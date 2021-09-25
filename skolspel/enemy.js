let enemy;

function Enemy(enemyType, liv, smart, styrka, karisma, atletisk, tur) {
  this.enemyType = enemyType
  this.liv = liv
  this.smart = smart
  this.styrka = styrka
  this.karisma = karisma
  this.atletisk = atletisk
  this.tur = tur

}


function enemyEvent(enemyChoice) {

  let enemy00 = new Enemy("Troll", 100, 200, 50, 150, 50, 550)
let enemy01 = new Enemy("Wolf", 50, 50, 20, 30, 20, 50)
switch (enemyChoice) {
  case 1:
    enemy = enemy00;
    break;
    case 2:
enemy = enemy01
      break;
  default:

return enemy
}
}
