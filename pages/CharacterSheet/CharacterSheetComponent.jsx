import Grid from '@material-ui/core/Grid';
import React from 'react';
import { CharacterContextProvider } from '../Context/CharacterContext';
import CombatStatsComponent from './CombatStatsComponent';
import LeftColumnComponent from './LeftColumn/LeftColumnComponent';
import ProficienciesComponent from './ProficienciesComponent';

export default function Home() {
  return (
    <CharacterContextProvider>
      <Grid container direction="row" spacing={2}>
        <LeftColumnComponent />
        <Grid item>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <CombatStatsComponent />
            </Grid>
            <Grid item>
              <ProficienciesComponent />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CharacterContextProvider>
  );
}
