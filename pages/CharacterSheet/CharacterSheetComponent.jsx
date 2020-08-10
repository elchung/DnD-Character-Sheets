import Grid from '@material-ui/core/Grid';
import React from 'react';
import { CharacterContextProvider } from '../Context/CharacterContext';
import CombatStatsComponent from './CombatStatsComponent';
import LeftColumnComponent from './LeftColumn/LeftColumnComponent';

export default function Home() {
  return (
    <CharacterContextProvider>
      <Grid container direction="row" spacing={2}>
        <LeftColumnComponent />
        <Grid item>
          <CombatStatsComponent />
        </Grid>
      </Grid>
    </CharacterContextProvider>
  );
}
