const dwarf = {
  name: 'Dwarf',
  traits: {
    ability_score: { constitution: 2 },
    age: { young: 50, average: 350 },
    alignment: 'Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend towards good as well, with a strong sense of fair play and a belief that everyone deserves to share in teh benefits of a just order',
    size: { text: 'Dwarves stand beetween 4 and 5 feet tall and average about 150 pounds. Your size is Medium.', size: 'medium' },
    speed: { number: 25, text: 'Your speed is not reduced by wearing heavy armor' },
  },
  features: [
    { name: 'Darkvision', text: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray" },
    { name: 'Dwarven Resilience', text: 'You have advantage on saving throws against poison, and you ahve resistance against poison damage' },
    { name: 'Stonecunning', text: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.' },
  ],
  proficiencies: {
    weapons: ['battleaxe', 'handaxe', 'light hammer', 'warhammer'],
    tools: ["smith's tools", "brewer's supplies", "mason's tools"], // one of
  },
  languages: ['Common', 'Dwarvish'],
  subrace: {
    'Hill Dwarf': {
      ability_score: { wisdom: 1 },
      features: [{ name: 'Dwarven Toughness', text: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level' }],
    },
    'Mountain Dwarf': {
      ability_score: { strength: 2 },
      features: [{ name: 'Dwarven Armor Training', text: 'You have proficiency with light and medium armor' }],
    },
  },
};

const elf = {
  name: 'Elf',
  traits: {
    ability_score: { dexterity: 2 },
    age: { young: 100, average: 750 },
    alignment: "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not. The drow are an exception; their exile in the Underdark has made them vicious and dangerous. Drow are more often evil than not.",
    size: { text: 'Elves range from under 5 to over 6 feet tall and ahve slender builds. Your size is Medium.', size: 'medium' },
    speed: { number: 30, text: '' },
  },
  features: [
    { name: 'Darkvision', text: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
    { name: 'Keen Senses', text: 'You have proficiency in the Perception skill.' },
    { name: 'Fey Ancestry', text: " You have advantage on saving throws against being charmed, and magic can't put you to sleep" },
    { name: 'Trance', text: "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is 'trance.') While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep" },
  ],
  proficiencies: {
    weapons: ['', '', '', ''],
    tools: ['', '', ''], // one of
  },
  languages: ['Common', 'Elvish'],
  subrace: {
    'High Elf': {
      ability_score: { intelligence: 1 },
      features: [
        { name: 'Elf Weapon Training', text: 'You have proficiency with the longsword, shortsword, shortbow, and longbow' },
        { name: 'Cantrip', text: 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.' },
        { name: 'Extra Language', text: 'You can speak, read, and write one extra language of your choice.' },
      ],
    },
    'Wood Elf': {
      ability_score: { wisdom: 1 },
      features: [
        { name: 'Elf Weapon Training', text: 'You have proficiency with the longsword, shortsword, shortbow, and longbow' }
        { name: 'Fleet of Foot', text: 'Your base walking speed increases to 35 feet' },
        { name: 'Mask of the Wild', text: 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, or other natural phenomena'}
      ],
    },
    'Dark Elf (Drow)': {
      ability_score: { charisma: 1 },
      features: [
        { name: 'Superior Darkvision', text: 'Your darkvision has a radius of 120 feet' },
        { name: 'Sunlight Sensitivity', text: 'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.' },
        { name: 'Drow Magic', text: "You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells." },
        { name: 'Drow Weapon Training', text: 'You have proficiency with rapiers, shortswords, and hand crossbows' },
      ],
    },
  },
};


//https://thetrove.net/Books/Dungeons%20&%20Dragons/5th%20Edition%20(5e)/Core/Player%27s%20Handbook%20%5B10th%20Print%5D.pdf