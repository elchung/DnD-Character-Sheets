import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import UpdateHitPointsModal from './Modals/UpdateHitPointsModal';

const HitPointComponent = () => {
  const {
    currentHP,
    tempHP,
    hitPointHistory,
    style,
  } = useCharacterState();
  const { setCurrentHP, setTempHP, setHitPointHistory } = useSetCharacterState();
  const [displayCurrentHP, setDisplayCurrentHP] = React.useState(currentHP);
  const [displayTempHP, setDisplayTempHP] = React.useState(tempHP);

  const handleHPBlur = (isTemp) => {
    if (isTemp) {
      setTempHP(displayTempHP);
      setHitPointHistory([...hitPointHistory, displayTempHP]);
    } else {
      setCurrentHP(displayCurrentHP);
      setHitPointHistory([...hitPointHistory, displayCurrentHP]);
    }
  };

  return (
    <>
      <Paper style={{ width: 220, height: 110 }} variant="outlined">
        <Grid alignItems="flex-end" container direction="row" justify="space-evenly">
          <Grid item>
            <Typography align="center" color="textSecondary" style={{ paddingTop: 7 }}>Current Hit Points</Typography>
            <InputBase
              inputProps={{
                style: {
                  fontSize: 35,
                  textAlign: 'center',
                },
                'aria-label': 'naked',
              }}
              onBlur={() => handleHPBlur(false)}
              onChange={(event) => setDisplayCurrentHP(event.target.value)}
              value={currentHP}
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
                  align="center"
                  inputProps={style.hitPointComponentTemp}
                  onBlur={() => handleHPBlur(true)}
                  onChange={(event) => setDisplayTempHP(event.target.value)}
                  style={{
                    width: 80, marginTop: -8, paddingLeft: 3, paddingRight: 25,
                  }}
                  value={displayTempHP}
                />
              </Grid>
              <Grid item>
                <UpdateHitPointsModal />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default HitPointComponent;
