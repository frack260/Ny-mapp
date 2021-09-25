// tar in spelarens stats
function Player(classType, liv, smart, styrka, karisma, atletisk, tur) {
  this.classType = classType
  this.liv = liv
  this.smart = smart
  this.styrka = styrka
  this.karisma = karisma
  this.atletisk = atletisk
  this.tur = tur



}

function battle() {
choiceButton.innerHTML = '<button onclick="attackCalc()" class="" id="" type="button" name="button">Attack</button>'
console.log("hello");







}
function attackCalc() {
  let offsetDamage =  Math.floor(Math.random() * Math.floor(10));
  let getPlayerAtletisk = player.atletisk;
  let getEnemyAtletisk = enemy.atletisk;

  let playerAttack = function(){

    let baseDamage = player.styrka /10;
    let calcAttack = baseDamage+offsetDamage;
    let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.atletisk / 10) / 2 ) + 1;
    let attackValues = [calcAttack, numberOfHits];
    return attackValues;



  }
  let enemyAttack = function (){
let baseDamage = enemy.styrka/10;
let calcAttack = baseDamage+offsetDamage;
let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.atletisk / 10) / 2 ) + 1;
let attackValues = [calcAttack, numberOfHits];
return attackValues;




  }
  let getPlayerAttackValues = playerAttack();
  let getEnemyAttackValues = enemyAttack();
  let getEnemyHealth = document.getElementById("enemyHealth");
  let getPlayerHealth = document.getElementById("playerHealth")


  if (getPlayerAtletisk >= getEnemyAtletisk) {
      let totalDamage = getPlayerAttackValues[0] * getPlayerAttackValues[1];
enemy.liv = enemy.liv - totalDamage;
getEnemyHealth.innerHTML = 'Health '+enemy.liv
alert("you hit for "+getPlayerAttackValues[0]+ " times " +getPlayerAttackValues[1]  )

if (enemy.liv > 0 ) {
  let totalDamage = getEnemyAttackValues[0] * getEnemyAttackValues[1];
  alert("Enemy hit for "+getEnemyAttackValues[0]+ " times " +getEnemyAttackValues[1]  )

player.liv = player.liv - totalDamage;
getPlayerHealth.innerHTML = 'Health '+player.liv
if (player.liv < 0) {
console.log("you lose");
openWinOrLoseModal("lose")

}
}else {
  openWinModal(enemy)
   console.log(score);
  console.log("you won");
}
console.log(enemy.liv);



}else {
  let totalDamage = getEnemyAttackValues[0] * getEnemyAttackValues[1];
player.liv = player.liv - totalDamage;
getPlayerHealth.innerHTML = 'Health '+player.liv
if (player.liv > 0 ) {
let totalDamage = getPlayerAttackValues[0] * getPlayerAttackValues[1];
enemy.liv = enemy.liv - totalDamage;
getEnemyHealth.innerHTML = 'Health '+enemy.liv
if (enemy.liv < 0) {
openWinModal()
console.log(score);
console.log("you win");
}
}else {
  console.log("lmaos");
  openWinOrLoseModal("lose")

console.log("you  lose");
}
}

}
