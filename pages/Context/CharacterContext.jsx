import React, { createContext, useState } from 'react';

const CharacterStateContext = createContext();
const CharacterDispatchContext = createContext();

export const CharacterContextProvider = (props) => {
  const { children } = props;

  const [level, setLevel] = useState(1);
  const [scoreOnTop, setScoreOnTop] = useState(false);
  const [abilityScores, setAbilityScores] = useState({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  });
  const [proficiencyBonus, setProficiencyBonus] = useState(2);
  const [inspiration, setInspiration] = useState(0);
  const [skillProficiencies, setSkillProficiencies] = useState(new Set());
  const [savingThrowProficiencies, setSavingThrowProficiencies] = useState(new Set());
  const [expertise, setExpertise] = useState(new Set());
  const [armorClass, setArmorClass] = useState(0);
  const [initiative, setInitiative] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [maxHP, setMaxHP] = useState(0);
  const [currentHP, setCurrentHP] = useState(0);
  const [hitDice, setHitDice] = useState([{ numDice: 0, diceType: 0, numUsed: 0 }]);
  const [currentHitDice, setCurrentHitDice] = useState(0);
  const [deathSaves, setDeathSaves] = useState({ successes: 0, failures: 0 });
  const style = {
    elevation: 3,
    abilityScoreComponent: { width: 125, paddingBottom: 20 },
    combatStatsComponent: {
      width: 375, height: 370, paddingBottom: 20, paddingTop: 10,
    },
    deathSaveComponent: {
      width: 100, height: 105, marginTop: -2, marginBottom: -2, paddingTop: 5,
    },
    headerStyle: { marginTop: -2, marginBottom: -2 },
    hitPointComponentInputStyle: {
      fontSize: 15,
      width: 300,
      height: 10,
      textAlign: 'center',
      marginLeft: -5,
      marginRight: 0,
      paddingTop: 4,
    },
    skillComponent: { width: 250, paddingBottom: 20, paddingTop: 10 },
    savingThrowComponent: { width: 250, paddingBottom: 20, paddingTop: 10 },
    skillComponentListItem: {
      marginBottom: -13, marginTop: -10, paddingBottom: 0, paddingTop: 0,
    },
    savingThrowComponentListItem: {
      marginBottom: -13, marginTop: -10, paddingBottom: 0, paddingTop: 0,
    },
    singleItemDisplayComponentStyle: { width: 100, height: 105 },
    singleLineDisplayComponent: { width: 250, height: 68 },
    singleLineDisplayInputProps: {
      style: {
        textAlign: 'center',
        fontSize: 30,
        width: 25,
        height: 15,
      },
    },
    skillModifierInputProps: {
      style: {
        fontSize: 17,
        width: 25,
        height: 3,
        textAlign: 'center',
        marginLeft: -5,
        marginRight: 2,
      },
    },
  };

  const characterState = {
    level,
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
    style,
  };

  const characterDispatch = {
    setLevel,
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
      <CharacterDispatchContext.Provider value={characterDispatch}>
        {children}
      </CharacterDispatchContext.Provider>
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

export const useCharacterState = () => safeUseContext(CharacterStateContext);
export const useSetCharacterState = () => safeUseContext(CharacterDispatchContext);
