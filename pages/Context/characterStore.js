import { bool } from 'prop-types';

const defaultCharacterState = {
  level: number,
  proficiencyBonus: number,
  abilityScores: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  },
  inspiration: number,
  proficiencies: { armor: new Set(), weapons: new Set(), other: new Set() },
  skillProficiencies: new Set(),
  savingThrowProficiencies: new Set(),
  expertise: new Set(),
  armorClass: number,
  initiative: number,
  speed: number,
  maxHP: number,
  tempHP: number,
  currentHP: number,
  hitDice: [{ numDice: number, diceType: number, numUsed: number }],
  currentHitDice: [number],
  deathSaves: { successes: 0, failures: 0 },
  featuresAndTraits: [{ id: number, text: { title: string, body: string } }],
  scoreOnTop: bool,
  hitPointHistory: [number],
};

export default defaultCharacterState;
