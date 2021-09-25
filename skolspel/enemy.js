let enemy;

function Enemy(enemyType, liv, smart, styrka, karisma, atletisk, tur, scoreGive) {
  this.enemyType = enemyType
  this.liv = liv
  this.smart = smart
  this.styrka = styrka
  this.karisma = karisma
  this.atletisk = atletisk
  this.tur = tur
  this.scoreGive = scoreGive

}


function enemyEvent(enemyChoice) {

  let enemy00 = new Enemy("Troll", 100, 200, 50, 150, 50, 550, 100)
  let enemy02 = new Enemy("Gaycouple", 200, 40, 40, 10, 10, 10, 200);

let enemy01 = new Enemy("Wolf", 50, 50, 20, 30, 20, 50, 50)
switch (enemyChoice) {
  case 1:
    enemy = enemy00;
    break;
    case 2:
enemy = enemy01
      break;
      case 3:
  enemy = enemy02
        break;
  default:

return enemy
}
}
