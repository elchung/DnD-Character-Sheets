import Paper from '@material-ui/core/Paper';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import SpellLevelListComponent from './SpellLevelListComponent';
import SpellsHeaderComponent from './SpellsHeaderComponent';
import SpellLevelHeaderComponent from './SpellLevelHeaderComponent';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';

const SpellsComponent = () => {
  const { spells, style } = useCharacterState();
  const { } = useSetCharacterState();

  return (
    <Paper elevation={style.elevation} style={{ width: 1180, height: 1146, padding: 16 }}>
      {/* <SpellsHeaderComponent /> */}
      <Grid container direction="row" spacing={2} justify="space-evenly">
        {[[0, 1, 2], [3, 4, 5], [6, 7, 8, 9]].map((columns) => (
          <Grid item>
            <Grid container direction="column">
              {columns.map((level) => (
                <Grid item>
                  <SpellLevelHeaderComponent level={level} />
                  <SpellLevelListComponent
                    spellsAtLevel={spells.level}
                    level={level}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default SpellsComponent;
