import Grid from '@material-ui/core/Grid';
import React from 'react';
import AbilityScoreComponent from '../Components/AbilityScoresComponent';
import { useCharacterState, useSetCharacterState } from '../../Context/CharacterContext';
import SavingThrowsComponent from '../Components/SavingThrowsComponent';
import SkillsComponent from '../Components/SkillsComponent';
import ProficienciesComponent from '../Components/ProficienciesComponent';

const LeftColumnComponent = () => (
  <Grid item>
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <AbilityScoreComponent orientation="column" />
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <SavingThrowsComponent />
              </Grid>
              <Grid item>
                <SkillsComponent />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <ProficienciesComponent />
      </Grid>
    </Grid>
  </Grid>
);

export default LeftColumnComponent;
