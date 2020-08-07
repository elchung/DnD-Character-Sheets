import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CharacterContextProvider } from './Context/CharacterContext';
import AbilityScoreComponent from './CharacterSheet/AbilityScoresComponent';
import SkillsComponent from './CharacterSheet/SkillsComponent';
import SavingThrowsComponent from './CharacterSheet/SavingThrowsComponent';
import ProficiencyBonusComponent from './CharacterSheet/ProficiencyBonusComponent';
import InspirationComponent from './CharacterSheet/InspirationComponent';
import CombatStatsComponent from './CharacterSheet/CombatStatsComponent';

const style = {
  elevation: 3,
  headerStyle: { marginTop: -2, marginBottom: -2 },
  skillComponent: { width: 250, paddingBottom: 20, paddingTop: 10 },
  abilityScoreComponent: { width: 125, paddingBottom: 20 },
  savingThrowComponent: { width: 250, paddingBottom: 20, paddingTop: 10 },
  combatStateComponent: { width: 400, paddingBottom: 20, paddingTop: 10 },
  proficiencyComponent: { width: 250 },
  inspirationComponent: { width: 250 },
  skillComponentListItem: {
    marginBottom: -13, marginTop: -10, paddingBottom: 0, paddingTop: 0,
  },
  savingThrowComponentListItem: {
    marginBottom: -13, marginTop: -10, paddingBottom: 0, paddingTop: 0,
  },
};

export default function Home() {
  return (
    <CharacterContextProvider>
      <Grid container spacing={2} direction="row">
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <AbilityScoreComponent style={style} />
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <InspirationComponent style={style} />
                </Grid>
                <Grid item>
                  <ProficiencyBonusComponent style={style} />
                </Grid>
                <Grid item>
                  <SavingThrowsComponent style={style} />
                </Grid>
                <Grid item>
                  <SkillsComponent style={style} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <CombatStatsComponent style={style} />
        </Grid>
      </Grid>
    </CharacterContextProvider>
  );
}
// https://react.christmas/2019/7
