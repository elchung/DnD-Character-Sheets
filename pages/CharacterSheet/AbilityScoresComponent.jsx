import React from 'react';
import Typography from '@material-ui/core/Typography';

export const AbilityScoreComponent = (
  strScore,
  setStrScore,
  dexScore,
  setDexScore,
  conScore,
  setConScore,
  intScore,
  setIntScore,
  wisScore,
  setWisScore,
  chaScore,
  setChaScore
) => {

//look at https://material-ui.com/components/switches/ for switches


  return (
    <BaseAbilityScoreComponent
      ability="Strength"
      abilityScore={strScore}
      setAbilityScore={setStrScore}
      scoreOnTop={}
    />
    <BaseAbilityScoreComponent
      ability="Dexterity"
      abilityScore={dexScore}
      setAbilityScore={setDexScore}
      scoreOnTop={}
    />
    <BaseAbilityScoreComponent
      ability="Constitution"
      abilityScore={conScore}
      setAbilityScore={setConScore}
      scoreOnTop={}
    />
    <BaseAbilityScoreComponent
      ability="Intellegence"
      abilityScore={intScore}
      setAbilityScore={setIntScore}
      scoreOnTop={}
    />
    <BaseAbilityScoreComponent
      ability="Wisdon"
      abilityScore={wisScore}
      setAbilityScore={setWisScore}
      scoreOnTop={}
    />
    <BaseAbilityScoreComponent
      ability="Charisma"
      abilityScore={chaScore}
      setAbilityScore={setChaScore}
      scoreOnTop={}
    />
  );
}