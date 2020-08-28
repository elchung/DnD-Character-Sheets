import Grid from '@material-ui/core/Grid';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import CombatStatsComponent from './Components/CombatStatsComponent';
import LeftColumnComponent from './LeftColumn/LeftColumnComponent';
import FeaturesAndTraitsComponent from './Components/FeaturesAndTraitsComponent';
import SpellsComponent from './Components/SpellsComponent';

const CharacterSheetComponent = () => (
  <Paper elevation={2} style={{ maxWidth: 1180, maxHeight: 1146, padding: 16 }}>
    <Grid container direction="row" spacing={2} justify="flex-start" alignItems="flex-start">
      <Grid item>
        <LeftColumnComponent />
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <CombatStatsComponent />
              </Grid>
              <Grid item>
                <FeaturesAndTraitsComponent />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
);

export default CharacterSheetComponent;
