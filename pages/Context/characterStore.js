const defaultCharacterState = {
  proficiencyBonus: 2,
  inspiration: 0,
  skillProficiencies: new Set(),
  savingThrowProficiencies: new Set(),
  expertise: new Set(),
  armorClass: 0,
  initiative: 0,
  speed: 0,
  maxHP: 0,
  currentHP: 0,
  hitDice: { numDice: 0, diceType: 0 },
  currentHitDice: 0,
  deathSaves: { successes: 0, failures: 0 },
};

export default defaultCharacterState;
