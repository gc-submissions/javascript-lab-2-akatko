"use strict";

const randomDamage = () => {
    return Math.floor(Math.random() * 10 + 1);
}

console.log(randomDamage());


const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return randNum === 0 ? opt1 : opt2;
}

const attackPlayer  = function(health) {
    return health = health - randomDamage();
}

const logHealth = (player, health) => {
    console.log (`${player} health: ${health}`);
}

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}

const isDead = (health) => {
    if (health <= 0) {
        return true;
    } else {
        return false; 
    }
}

function fight (player1, player2, player1Health, player2Health) {
 while (true) { 
      if (attacker === player1) {
        let attacker = chooseOption(player1, player2);
        player2Health = attackPlayer(player2Health);
         return logHealth(player2, player2Health); 
    } if (isDead(player2Health)) {
        logDeath(player1, player2);
         break;
    } else player1Health = attackPlayer(player1Health) 
       logHealth(player1, player1Health);

}
    }



// TODO - write your code here.