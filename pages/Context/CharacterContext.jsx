import React, { createContext, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { spells } from '../../Data/Spells';

const CharacterStateContext = createContext();
const CharacterDispatchContext = createContext();

export const CharacterContextProvider = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  const [level, setLevel] = useState(1);
  const [scoreOnTop, setScoreOnTop] = useState(true);
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
  const [tempHP, setTempHP] = useState(0);
  const [hitPointHistory, setHitPointHistory] = useState([]);
  const [currentHP, setCurrentHP] = useState(0);
  const [hitDice, setHitDice] = useState([{ numDice: 0, diceType: 0, numUsed: 0 }]);
  const [currentHitDice, setCurrentHitDice] = useState(0);
  const [deathSaves, setDeathSaves] = useState({ successes: 0, failures: 0 });
  const [proficiencies, setProficiencies] = useState({ armor: new Set(), weapons: new Set(), other: new Set() });
  // spells will be formatted when adding to spell list as: {id: 0, text: {title: `${spell.name}${spell.ritual ? '(R)' : ''} - ${spell.casting_time} - ${spell.range}`, body: `Duration: ${spell.duration} - ${spell.components.raw} - ${spell.description}`}}
  const [knownSpells, setKnownSpells] = useState({0: new Set(), 1: new Set(), 2: new Set(), 3: new Set(), 4: new Set(), 5: new Set(), 6: new Set(), 7: new Set(), 8: new Set(), 9: new Set()});
  const [spellList, setSpellList] = useState(spells.reduce((acc, spell) => {
    acc[spell.name] = spell;
    return acc;
  }, {}));
  const [preparedSpells, setPreparedSpells] = useState(new Set());
  const testCards = [
    { id: 0, text: { title: 'test title', body: 'this is the body' } },
    { id: 1, text: { title: 'test title1', body: 'this is the body1' } },
  ];
  const [featuresAndTraits, setFeaturesAndTraits] = useState(testCards);
  const [spellSlots, setSpellSlots] = useState({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0,
  });
  const [usedSpellSlots, setUsedSpellSlots] = useState({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0,
  });

  const classList = [
    'Artificer', 'Barbarian', 'Bard',
    'Cleric', 'Druid', 'Fighter',
    'Monk', 'Paladin', 'Ranger',
    'Rogue', 'Sorcerer', 'Warlock',
    'Wizard',
  ];

  const globalStyle = {
    elevation: 3,
    characterSheet: {
      width: 1180,
      height: 1146,
    },
  };

  const useStyles = makeStyles({
    elevation: 3,
    abilityScoreComponent: { width: 125, paddingBottom: 20, height: 787 },
    combatStatsComponent: {
      width: 375, height: 355, paddingBottom: 20, paddingTop: 10,
    },
    deathSaveSuccessText: { fontSize: 13, paddingTop: 2, marginBottom: -10 },
    deathSaveFailText: {
      fontSize: 13, paddingTop: 2, marginBottom: -10, marginTop: -10,
    },
    proficienciesComponent: {
      width: '100%', height: 290, paddingBottom: 20, paddingTop: 10, overflow: 'auto', maxWidth: 390,
    },
    deathSaveComponent: {
      width: 100, height: 105, marginTop: -2, marginBottom: -2, paddingTop: 5,
    },
    FeaturesAndTraitsComponent: {
      maxHeight: 355, overflow: 'auto', width: 375, height: 355, paddingBottom: 20, paddingTop: 10,
    },
    headerStyle: { marginTop: -2, marginBottom: -2 },
    hitDieComponent: {
      width: 100, height: 105, marginTop: -2, marginBottom: -2, paddingTop: 5,
    },
    HitDieComponentInputPropStyle: {
      fontSize: 15,
      width: 10,
      height: 25,
      margin: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 5,
      paddingRight: 5,
      textAlign: 'center',
    },
    hitPointComponentInputStyle: {
      fontSize: 15,
      width: 300,
      height: 10,
      textAlign: 'center',
      marginLeft: -5,
      marginRight: 0,
      paddingTop: 4,
    },
    hitPointComponentTemp: {
      style: {
        textAlign: 'center',
        marginBottom: -6,
      },
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
    spellsAccordion: {
      maxHeight: 355, overflow: 'auto', width: '100%', height: '90%', paddingBottom: 20, paddingTop: 10,
    },
    tableCellStyle: { paddingTop: 0, paddingBottom: 0, width: 100 },
    tableCellInputStyle: {
      'aria-label': 'naked',
      style: {
        fontSize: 17,
        height: 10,
        textAlign: 'center',
      },
    },
  });
  const style = {
    elevation: 3,
    abilityScoreComponent: { width: 125, paddingBottom: 20, height: 787 },
    combatStatsComponent: {
      width: 375, height: 355, paddingBottom: 20, paddingTop: 10,
    },
    deathSaveSuccessText: { fontSize: 13, paddingTop: 2, marginBottom: -10 },
    deathSaveFailText: {
      fontSize: 13, paddingTop: 2, marginBottom: -10, marginTop: -10,
    },
    proficienciesComponent: {
      width: '100%', height: 290, paddingBottom: 20, paddingTop: 10, overflow: 'auto', maxWidth: 390,
    },
    deathSaveComponent: {
      width: 100, height: 105, marginTop: -2, marginBottom: -2, paddingTop: 5,
    },
    FeaturesAndTraitsComponent: {
      maxHeight: 355, overflow: 'auto', width: 375, height: 355, paddingBottom: 20, paddingTop: 10,
    },
    headerStyle: { marginTop: -2, marginBottom: -2 },
    hitDieComponent: {
      width: 100, height: 105, marginTop: -2, marginBottom: -2, paddingTop: 5,
    },
    HitDieComponentInputPropStyle: {
      fontSize: 15,
      width: 10,
      height: 25,
      margin: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 5,
      paddingRight: 5,
      textAlign: 'center',
    },
    hitPointComponentInputStyle: {
      fontSize: 15,
      width: 300,
      height: 10,
      textAlign: 'center',
      marginLeft: -5,
      marginRight: 0,
      paddingTop: 4,
    },
    hitPointComponentTemp: {
      style: {
        textAlign: 'center',
        marginBottom: -6,
      },
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
    spellLevelheader: { width: '100%', height: '10%' },
    spellsAccordion: {
      maxHeight: 355, overflow: 'auto', width: '100%', height: '90%', paddingBottom: 20, paddingTop: 10,
    },
    spellsComponentPaper: {
      width: '100%',
      height: globalStyle.characterSheet.height,
      padding: 16,
      maxHeight: 1146,
      overflow: 'auto',
    },
    tableCellStyle: { paddingTop: 0, paddingBottom: 0, width: 100 },
    tableCellInputStyle: {
      'aria-label': 'naked',
      style: {
        fontSize: 17,
        height: 10,
        textAlign: 'center',
      },
    },
  };

  const damageTypes = [
    'acid', 'bludgeoning', 'cold', 'fire', 'force', 'lightning',
    'necrotic', 'piercing', 'poison', 'psychic', 'radiant', 'slashing', 'thunder',
  ];

  const characterState = {
    classList,
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
    tempHP,
    hitPointHistory,
    hitDice,
    currentHitDice,
    deathSaves,
    damageTypes,
    proficiencies,
    globalStyle,
    featuresAndTraits,
    knownSpells,
    preparedSpells,
    spellList,
    spellSlots,
    usedSpellSlots,
    useStyles,
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
    setTempHP,
    setHitPointHistory,
    setHitDice,
    setCurrentHitDice,
    setDeathSaves,
    setProficiencies,
    setFeaturesAndTraits,
    setKnownSpells,
    setPreparedSpells,
    setSpellList,
    setSpellSlots,
    setUsedSpellSlots,
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
  const result = useContext(context);
  if (result === undefined) {
    throw new Error('The hook you are attempting to use must be used within a CharacterContextProvider');
  }

  return result;
};

export const useCharacterState = () => safeUseContext(CharacterStateContext);
export const useSetCharacterState = () => safeUseContext(CharacterDispatchContext);
