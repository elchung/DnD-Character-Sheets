import React, { createContext, useState } from 'react';

const CharacterStateContext = createContext();
const CharacterDispatchContext = createContext();

export const CharacterContextProvider = (props) => {
  const { children } = props;

  const [scoreOnTop, setScoreOnTop] = React.useState(false);
  const [abilityScores, setAbilityScores] = React.useState({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  });
  const [proficiencyBonus, setProficiencyBonus] = React.useState(2);
  const [inspiration, setInspiration] = React.useState(0);
  const [skillProficiencies, setSkillProficiencies] = React.useState(new Set());
  const [savingThrowProficiencies, setSavingThrowProficiencies] = React.useState(new Set());
  const [expertise, setExpertise] = React.useState(new Set());
  const [armorClass, setArmorClass] = React.useState(0);
  const [initiative, setInitiative] = React.useState(0);
  const [speed, setSpeed] = React.useState(0);
  const [maxHP, setMaxHP] = React.useState(0);
  const [currentHP, setCurrentHP] = React.useState(0);
  const [hitDice, setHitDice] = React.useState({ numDice: 0, diceType: 0 });
  const [currentHitDice, setCurrentHitDice] = React.useState(0);
  const [deathSaves, setDeathSaves] = React.useState({ successes: 0, failures: 0 });

  const characterState = {
    scoreOnTop,
    abilityScores,
    proficiencyBonus,
    inspiration,
    skillProficiencies,
    savingThrowProficiencies,
    expertise,
    armorClass,
    initiative,
    speed,
    maxHP,
    currentHP,
    hitDice,
    currentHitDice,
    deathSaves,
  };

  const characterDispatch = {
    setScoreOnTop,
    setAbilityScores,
    setProficiencyBonus,
    setInspiration,
    setSkillProficiencies,
    setSavingThrowProficiencies,
    setExpertise,
    setArmorClass,
    setInitiative,
    setSpeed,
    setMaxHP,
    setCurrentHP,
    setHitDice,
    setCurrentHitDice,
    setDeathSaves,
  };

  return (
    <CharacterStateContext.Provider value={characterState}>
      <CharacterDispatchContext value={characterDispatch}>
        {children}
      </CharacterDispatchContext>
    </CharacterStateContext.Provider>
  );
};

const safeUseContext = (context) => {
  const result = React.useContext(context);
  if (result === undefined) {
    throw new Error('The hook you are attempting to use must be used within a CharacterContextProvider');
  }

  return result;
};

export const useCharacterState = () => safeUseContext(CharacterStateContext).character;
export const useSetCharacterState = () => safeUseContext(CharacterDispatchContext).setCharacter;
