import Grid from '@material-ui/core/Grid';
import React from 'react';
import AbilityScoreComponent from './AbilityScoresComponent';
import SavingThrowsComponent from './SavingThrowsComponent';
import SkillsComponent from './SkillsComponent';
import ProficienciesComponent from './ProficienciesComponent';

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
