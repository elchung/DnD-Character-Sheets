import React from 'react';
import AbilityScoreComponent from './CharacterSheet/AbilityScoresComponent';
import SkillsComponent from './CharacterSheet/SkillsComponent';
import Paper from '@material-ui/core/Paper';

export default function Home() {
  const [scoreOnTop, setScoreOnTop] = React.useState(false);
  const [strScore, setStrScore] = React.useState(0);
  const [dexScore, setDexScore] = React.useState(0);
  const [conScore, setConScore] = React.useState(0);
  const [intScore, setIntScore] = React.useState(0);
  const [wisScore, setWisScore] = React.useState(0);
  const [chaScore, setChaScore] = React.useState(0);
  const [abilityScores, setAbilityScores] = React.useState({
    'strength': 0,
    'dexterity': 0,
    'constitution': 0,
    'intelligence': 0,
    'wisdom': 0,
    'charisma': 0
  })
  const style = { elevation: 3 }
  const [proficiencyBonus, setProficiencyBonus] = React.useState(2);
  const [skillProficiencies, setSkillProficiencies] = React.useState({});

  return (
    <Paper>
      <AbilityScoreComponent
        scoreOnTop={scoreOnTop}
        setScoreOnTop={setScoreOnTop}
        strScore={strScore}
        setStrScore={setStrScore}
        dexScore={dexScore}
        setDexScore={setDexScore}
        conScore={conScore}
        setConScore={setConScore}
        intScore={intScore}
        setIntScore={setIntScore}
        wisScore={wisScore}
        setWisScore={setWisScore}
        chaScore={chaScore}
        setChaScore={setChaScore}
        style={style}
      />
      <SkillsComponent
        abilityScores={abilityScores}
        proficiencyBonus={proficiencyBonus}
        skillProficiencies={skillProficiencies}
        setSkillProficiencies={setSkillProficiencies}
        style={style}
      />
    </Paper>
  );
}
