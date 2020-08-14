import Grid from '@material-ui/core/Grid';
import React from 'react';
import { CharacterContextProvider } from '../Context/CharacterContext';
import CombatStatsComponent from './CombatStatsComponent';
import LeftColumnComponent from './LeftColumn/LeftColumnComponent';
import ProficienciesComponent from './ProficienciesComponent';
import FeaturesAndTraitsComponent from './FeaturesAndTraitsComponent';

export default function Home() {
  return (
    <CharacterContextProvider>
      <Grid container direction="row" spacing={2}>
        <LeftColumnComponent />
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <CombatStatsComponent />
            </Grid>
            <Grid item>
              <ProficienciesComponent />
            </Grid>
            <Grid item>
              <FeaturesAndTraitsComponent />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CharacterContextProvider>
  );
}
