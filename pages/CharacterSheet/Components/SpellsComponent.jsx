import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { AddSpellsModalComponent } from './Modals/AddSpellsModal/AddSpellsModalComponent';
import SpellLevelListComponent from './SpellLevelListComponent';
import SpellsHeaderComponent from './SpellsHeaderComponent';
import SpellLevelHeaderComponent from './SpellLevelHeaderComponent';
import { useCharacterState } from '../../Context/CharacterContext';

export const SpellsComponent = () => {
  const { knownSpells, globalStyle, style } = useCharacterState();

  return (
    <Paper
      elevation={globalStyle.elevation}
      style={style.spellsComponentPaper}
    >
      <Grid container direction="column" justify="space-evenly" spacing={2}>
        <Grid item>
          <SpellsHeaderComponent />
        </Grid>
        <Grid item>
          <Grid container direction="row" w justify="flex-start" spacing={1}>
            {[[0, 1, 2], [3, 4, 5], [6, 7, 8, 9]].map((columns) => (
              <React.Fragment key={`spell-component-column-${columns}`}>
                <Grid item style={{ width: '32%', height: '100%' }} key={`spell-component-column-${columns}`}>
                  <Grid container direction="column" style={{ height: '100%' }} spacing={1}>
                    {columns.map((level) => (
                      <Grid item style={{ height: '31%' }} key={`spell-level-${level}-item`}>
                        <SpellLevelHeaderComponent level={level} />
                        <SpellLevelListComponent
                          spellsAtLevel={knownSpells.level}
                          level={level}
                          height="80%"
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                {columns[0] < 6
                && (
                  <Grid item style={{ width: '1%' }}>
                    <Divider orientation="vertical" />
                  </Grid>
                )}
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <AddSpellsModalComponent
        positioning={{
          fab: {
            position: 'fixed',
            bottom: 16,
            right: 16,
          },
        }}
      />
    </Paper>
  );
};

export default SpellsComponent;
