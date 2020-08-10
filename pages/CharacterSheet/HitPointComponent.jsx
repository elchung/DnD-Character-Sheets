import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import {
  useCharacterState,
  useSetCharacterState,
} from '../Context/CharacterContext';

const HitPointComponent = () => {
  const {
    currentHP,
    tempHP,
    style,
  } = useCharacterState();
  const { setCurrentHP } = useSetCharacterState();
  const [displayCurrentHP, setDisplayCurrentHP] = React.useState(currentHP);
  const [displayTempHP, setDisplayTempHP] = React.useState(tempHP);

  const handleHPBlur = (event) => {
    console.log(event);
    console.log('need to add modal to input damage or heal damage');
  };

  const openHPModal = () => {

  };

  return (
    <>
      <Paper variant="outlined" style={{ width: 220, height: 110 }}>
        <Grid container direction="row" justify="space-evenly" alignItems="flex-end">
          <Grid item>
            <Typography align="center" color="textSecondary" style={{ paddingTop: 7 }}>Current Hit Points</Typography>
            <InputBase
              value={currentHP}
              onChange={(event) => setDisplayCurrentHP(event.target.value)}
              onBlur={() => handleHPBlur(displayCurrentHP)}
              inputProps={{
                style: {
                  fontSize: 35,
                  textAlign: 'center',
                },
                'aria-label': 'naked',
              }}
            />
          </Grid>
          <Grid item>
            <Grid container direction="row" justify="flex-start">
              <Grid item>
                <Typography align="left" color="textSecondary" style={{ fontSize: 13 }}>
                  Temp HP:
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  value={displayTempHP}
                  align="center"
                  style={{
                    width: 80, marginTop: -8, paddingLeft: 3, paddingRight: 25,
                  }}
                  inputProps={style.hitPointComponentTemp}
                />
              </Grid>
              <Grid item>
                <Chip
                  label={<LocalPizzaIcon color="action" fontSize="small" />}
                  size="small"
                  style={{
                    paddingTop: 3, marginTop: -7, width: 25,
                  }}
                  onClick={openHPModal}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default HitPointComponent;
