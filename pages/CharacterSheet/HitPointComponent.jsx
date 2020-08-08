import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {
  useCharacterState,
  useSetCharacterState,
} from '../Context/CharacterContext';

const HitPointComponent = () => {
  const {
    maxHP,
    currentHP,
    tempHP,
    style,
  } = useCharacterState();
  const setCharacterState = useSetCharacterState();

  const [displayMaxHP, setDisplayMaxHP] = React.useState(maxHP);
  const [displayCurrentHP, setDisplayCurrentHP] = React.useState(currentHP);
  const [displayTempHP, setDisplayTempHP] = React.useState(tempHP);

  const handleClick = (event) => {
    console.log(event);
    console.log('need to add modal to input damage or heal damage');
  };

  return (
    <>
      <Paper variant="outlined" style={{ width: 220, height: 110 }}>
        <Grid container direction="row" justify="space-evenly" alignItems="flex-end">
          <Grid item>
            <Paper>
              <Typography align="left" color="textSecondary">Current Hit Points</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Typography align="left" color="textSecondary">Temp Hit Points</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
      {/* <Box
        p={2}
        position="relative"
        bottom={5}
        left={325}
        zIndex="tooltip"
        style={{ width: 5, height: 5 }}
      >
        <Chip label={<AddIcon />} onClick={handleClick} variant="outlined" size="small" />
      </Box> */}
    </>
  );
};

export default HitPointComponent;
