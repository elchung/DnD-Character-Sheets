import React from 'react';
import Paper from '@material-ui/core/Paper';
import AbilityScoreComponent from './CharacterSheet/AbilityScoresComponent';
import SkillsComponent from './CharacterSheet/SkillsComponent';
import Grid from '@material-ui/core/Grid';

export default function Home() {
  const [scoreOnTop, setScoreOnTop] = React.useState(false);
  const [strScore, setStrScore] = React.useState(0);
  const [dexScore, setDexScore] = React.useState(0);
  const [conScore, setConScore] = React.useState(0);
  const [intScore, setIntScore] = React.useState(0);
  const [wisScore, setWisScore] = React.useState(0);
  const [chaScore, setChaScore] = React.useState(0);
  const [abilityScores, setAbilityScores] = React.useState({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  });
  const style = { elevation: 3 };
  const [proficiencyBonus, setProficiencyBonus] = React.useState(2);
  const [skillProficiencies, setSkillProficiencies] = React.useState(new Set());
  const [expertise, setExpertise] = React.useState(new Set());

  return (
    <Grid container justify="center" spacing={2} direction="row">
      <Grid item>
        <AbilityScoreComponent
          scoreOnTop={scoreOnTop}
          setScoreOnTop={setScoreOnTop}
          abilityScores={abilityScores}
          setAbilityScores={setAbilityScores}
          style={style}
        />
      </Grid>
      <Grid item>
        <SkillsComponent
          abilityScores={abilityScores}
          proficiencyBonus={proficiencyBonus}
          skillProficiencies={skillProficiencies}
          setSkillProficiencies={setSkillProficiencies}
          expertise={expertise}
          setExpertise={setExpertise}
          style={style}
        />
      </Grid>
    </Grid>
  );
}
