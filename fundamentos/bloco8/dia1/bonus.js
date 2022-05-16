const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Parte I
// Exercício 1
const dragonDamage = () => {
  const damage = parseInt(Math.random() * (dragon.strength + 1));
  if (damage >= 15) {
    return damage;
  }
  return 15;
}
// console.log(dragonDamage());

// Exercício 2
const warriorDamage = () => {
  const damage = parseInt(Math.random() * (warrior.strength * warrior.weaponDmg + 1));
  if (damage >= warrior.strength) {
    return damage;
  }
  return warrior.strength;
}
// console.log(warriorDamage());

// Exercício 3
const mageDamage = () => {
  const damage = parseInt(Math.random() * (mage.intelligence * 2 + 1));
  if (damage >= mage.intelligence) {
    if (mage.mana >= 15) {
      mage.mana -= 15;
      return { damage, manaGasta: 15 };
    }
    console.log('Mana insuficiente');
    return {damage: 0, manaGasta: 0};
  }
  return { damage: mage.intelligence, manaGasta: 15 };
}
// console.log(mageDamage());

// Parte II
const gameActions = {
  // Crie as HOFs neste objeto.
  warriorsTurn(callback) {
    const damage = callback()
    dragon.healthPoints -= damage;
    warrior.damage = damage;
  },
  magesTurn(callback) {
    const damage = callback().damage;
    dragon.healthPoints -= damage;
    mage.damage = damage;
    mage.mana -= callback().manaGasta;
  },
  dragonsTurn(callback) {
    const damage = callback();
    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
    dragon.damage = damage;
  },
  displayTurnResults() {
    return console.log(battleMembers);
  }
};

gameActions.warriorsTurn(warriorDamage);
gameActions.magesTurn(mageDamage);
gameActions.dragonsTurn(dragonDamage);
gameActions.displayTurnResults();