import React from 'react';
import Grid from '@material-ui/core/Grid';
import CombatStatsComponent from './CharacterSheet/CombatStatsComponent';
import LeftColumnComponent from './CharacterSheet/LeftColumn/LeftColumnComponent';
import { CharacterContextProvider } from './Context/CharacterContext';

export default function Home() {
  return (
    <CharacterContextProvider>
      <Grid container spacing={2} direction="row">
        <LeftColumnComponent />
        <Grid item>
          <CombatStatsComponent />
        </Grid>
      </Grid>
    </CharacterContextProvider>
  );
}
