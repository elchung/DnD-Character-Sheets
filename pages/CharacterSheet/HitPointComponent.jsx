import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const HitPointComponent = ({
  maxHP,
  setMaxHP,
  currentHP,
  setCurrentHP,
  tempHP,
  setTempHP,
  style,
}) => {
  const [displayMaxHP, setDisplayMaxHP] = React.useState(maxHP);
  const [displayCurrentHP, setDisplayCurrentHP] = React.useState(currentHP);
  const [displayTempHP, setDisplayTempHP] = React.useState(tempHP);

  const handleClick = (event) => {
    console.log('need to add modal to input damage or heal damage');
  };

  return (
    <>
      <Paper variant="outlined">
        <Grid container direction="row" justify="flex-start" alignItems="flex-start">
          <Grid item>
            <Typography variant="subtitle1">Max HP</Typography>
          </Grid>
          <Grid item>
            <TextField
              value={displayMaxHP}
              size="small"
              fullWidth
              inputProps={{
                style: {
                  fontSize: 15,
                  width: 300,
                  height: 10,
                  textAlign: 'center',
                  marginLeft: -5,
                  marginRight: 0,
                  paddingTop: 4,
                },
              }}
            />
          </Grid>
        </Grid>
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
      <Box
        p={2}
        position="relative"
        bottom={5}
        left={325}
        zIndex="tooltip"
        style={{ width: 5, height: 5 }}
      >
        <Chip label={<AddIcon />} onClick={handleClick} variant="outlined" size="small" />
      </Box>
    </>
  );
};

HitPointComponent.propTypes = {
  maxHP: PropTypes.number.isRequired,
  setMaxHP: PropTypes.func.isRequired,
  currentHP: PropTypes.number.isRequired,
  setCurrentHP: PropTypes.func.isRequired,
  tempHP: PropTypes.number.isRequired,
  setTempHP: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default HitPointComponent;
