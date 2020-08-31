import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import SpellLevelListComponent from './SpellLevelListComponent';
import SpellsHeaderComponent from './SpellsHeaderComponent';
import SpellLevelHeaderComponent from './SpellLevelHeaderComponent';
import { useCharacterState } from '../../Context/CharacterContext';

const SpellsComponent = () => {
  const { spells, style } = useCharacterState();

  return (
    <Paper elevation={style.elevation} style={{ width: 1180, height: 1146, padding: 16, maxHeight: 1146, overflow: 'auto' }}>
      <Grid container direction="column" justify="space-evenly" spacing={2}>
        <Grid item>
          <SpellsHeaderComponent />
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="flex-start" spacing={1}>
            {[[0, 1, 2], [3, 4, 5], [6, 7, 8, 9]].map((columns) => (
              <>
                <Grid item style={{ width: '32%' }}>
                  <Grid container direction="column" spacing={2} alignItems="stretch">
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
                {columns[0] < 6
                && (
                  <Grid item alignContent="center" style={{ width: '1%' }}>
                    <Divider orientation="vertical" />
                  </Grid>
                )}
              </>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SpellsComponent;
