import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';
import UpdateHitPointsModal from './Modals/UpdateHitPointsModal';

const HitPointComponent = () => {
  const {
    currentHP,
    tempHP,
    maxHP,
    hitPointHistory,
    style,
  } = useCharacterState();
  const { setCurrentHP, setTempHP, setHitPointHistory } = useSetCharacterState();
  const [displayCurrentHP, setDisplayCurrentHP] = React.useState(currentHP);
  const [displayTempHP, setDisplayTempHP] = React.useState(tempHP);
  const [displayMaxHP, setDisplayMaxHP] = React.useState(tempHP);

  const handleCurrentHPBlur = (isTemp) => {
    if (isTemp) {
      setTempHP(displayTempHP);
      setHitPointHistory([...hitPointHistory, displayTempHP]);
    } else {
      setCurrentHP(displayCurrentHP);
      setHitPointHistory([...hitPointHistory, displayCurrentHP]);
    }
  };

  const handleMaxHPBlur = () => {
    console.log();
  };

  return (
    <>
      <Paper style={{ width: 220, height: 105 }} variant="outlined">
        <Grid alignItems="flex-end" container direction="row" justify="space-evenly">
          <Grid item>
            <Typography align="center" color="textSecondary" style={{ paddingTop: 7 }}>Hit Points</Typography>
            <Grid container direction="row" justify="center" alignItems="flex-start">
              <Grid item>
                <InputBase
                  inputProps={{
                    style: {
                      fontSize: 35,
                      textAlign: 'center',
                    },
                    'aria-label': 'naked',
                  }}
                  style={{ width: 40, paddingRight: 10 }}
                  onBlur={() => handleCurrentHPBlur(false)}
                  onChange={(event) => setDisplayCurrentHP(event.target.value)}
                  value={currentHP}
                />
              </Grid>
              <Grid>
                <Typography align="center" color="textSecondary" variant="h3">/</Typography>
              </Grid>
              <Grid item>
                <InputBase
                  inputProps={{
                    style: {
                      fontSize: 35,
                      textAlign: 'center',
                      color: 'black',
                    },
                    'aria-label': 'naked',
                  }}
                  style={{ width: 40, paddingLeft: 10 }}
                  disabled
                  // onBlur={() => handleMaxHPBlur(false)}
                  // onChange={(event) => setDisplayMaxHP(event.target.value)}
                  value={maxHP}
                />
              </Grid>
            </Grid>
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
                  onBlur={() => handleMaxHPBlur(true)}
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
