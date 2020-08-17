import Grid from '@material-ui/core/Grid';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CharacterContextProvider } from '../Context/CharacterContext';
import CombatStatsComponent from './Components/CombatStatsComponent';
import LeftColumnComponent from './LeftColumn/LeftColumnComponent';
import ProficienciesComponent from './Components/ProficienciesComponent';
import FeaturesAndTraitsComponent from './Components/FeaturesAndTraitsComponent';

const CharacterSheetComponent = () => (
  <DndProvider backend={HTML5Backend}>
    <CharacterContextProvider>
      <Grid container direction="row" spacing={2}>
        <LeftColumnComponent />
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <CombatStatsComponent />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <FeaturesAndTraitsComponent />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CharacterContextProvider>
  </DndProvider>
);

export default CharacterSheetComponent;
