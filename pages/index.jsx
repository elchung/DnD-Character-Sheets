import React from 'react';
import Grid from '@material-ui/core/Grid';
import AbilityScoreComponent from './CharacterSheet/AbilityScoresComponent';
import SkillsComponent from './CharacterSheet/SkillsComponent';
import SavingThrowsComponent from './CharacterSheet/SavingThrowsComponent';
import ProficiencyBonusComponent from "./CharacterSheet/ProficiencyBonusComponent";

const style = {
  elevation: 3,
  skillComponent: { width: 250, paddingBottom: 10, paddingTop: 10 },
  savingThrowComponent: { width: 250, paddingBottom: 10, paddingTop: 10 },
  proficiencyComponent: { width: 250 },
  skillComponentListItem: {
    marginBottom: -13, marginTop: -10, paddingBottom: 0, paddingTop: 0,
  },
  savingThrowComponentListItem: {
    marginBottom: -13, marginTop: -10, paddingBottom: 0, paddingTop: 0,
  },
};

export default function Home() {
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
  const [skillProficiencies, setSkillProficiencies] = React.useState(new Set());
  const [savingThrowProficiencies, setSavingThrowProficiencies] = React.useState(new Set());
  const [expertise, setExpertise] = React.useState(new Set());

  return (
    <Grid container spacing={2} direction="row" style={{backgroundColor: 'red', width: "33%"}}>
      <Grid item>
        <AbilityScoreComponent
          scoreOnTop={scoreOnTop}
          setScoreOnTop={setScoreOnTop}
          abilityScores={abilityScores}
          setAbilityScores={setAbilityScores}
          style={style}
        />
      </Grid>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <ProficiencyBonusComponent
            proficiencyBonus={proficiencyBonus}
            setProficiencyBonus={setProficiencyBonus}
            style={style}
          />
        </Grid>
        <Grid item>
          <SavingThrowsComponent
            abilityScores={abilityScores}
            proficiencyBonus={proficiencyBonus}
            savingThrowProficiencies={savingThrowProficiencies}
            setSavingThrowProficiencies={setSavingThrowProficiencies}
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
    </Grid>
  );
}
