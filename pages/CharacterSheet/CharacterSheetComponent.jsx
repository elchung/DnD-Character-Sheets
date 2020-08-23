import Grid from '@material-ui/core/Grid';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CharacterContextProvider } from '../Context/CharacterContext';
import CombatStatsComponent from './Components/CombatStatsComponent';
import LeftColumnComponent from './LeftColumn/LeftColumnComponent';
import ProficienciesComponent from './Components/ProficienciesComponent';
import FeaturesAndTraitsComponent from './Components/FeaturesAndTraitsComponent';
import SpellsComponent from "./Components/SpellsComponent";

const CharacterSheetComponent = () => (
  <DndProvider backend={HTML5Backend}>
    <CharacterContextProvider>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={4}>
          <LeftColumnComponent />
        </Grid>
        <Grid item xs={8}>
          <Grid container direction="column">
            <Grid item>
              <Grid container direction="row">
                <Grid item>
                  <CombatStatsComponent />
                </Grid>
                <Grid item>
                  <FeaturesAndTraitsComponent />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <SpellsComponent />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CharacterContextProvider>
  </DndProvider>
);

export default CharacterSheetComponent;
