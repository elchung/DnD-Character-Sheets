import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';

const HitDieComponent = () => {
  const { hitDice, useStyles, style } = useCharacterState();
  const { setHitDice } = useSetCharacterState();
  const classes = useStyles();
  // { numDice: 0, diceType: 0, numUsed: 0 }
  const [numUsed, setNumUsed] = React.useState([0]);

  React.useEffect(() => {
    if (numUsed.length < hitDice.length) {
      setNumUsed([...numUsed, ...Array(hitDice.length - numUsed.length).fill(0)]);
    } else if (numUsed.length > hitDice.length) {
      setNumUsed(numUsed.slice(0, hitDice.length));
    }
  }, hitDice);

  const handleHitDiceChange = (value, index) => {
    setNumUsed(numUsed.map((item, i) => (i === index ? value : item)));
  };

  const handleOnBlur = () => {
    setHitDice(hitDice.map((item, index) => ({ ...hitDice[index], numUsed: numUsed[index] })));
  };

  return (
    <Paper className={classes.hitDieComponent} variant="outlined">
      <Typography align="center" color="textSecondary" className={classes.headerStyle}>Hit Dice</Typography>
      <List dense disablePadding>
        <ListItemText
          primary={(
            <Typography align="center" color="textSecondary" style={{ fontSize: 10, marginBottom: -8 }}>
              Level - Die - Used
            </Typography>
          )}
        />
        {hitDice.map((row, index) => (
          <ListItem key={row}>
            <Grid container direction="row">
              <Grid item>
                <TextField
                  inputProps={{ style: style.HitDieComponentInputPropStyle }}
                  style={{ paddingRight: 4, marginLeft: -8 }}
                  disabled
                  id={`level-${row.toString}`}
                  key={`level-${row.toString}`}
                  value={row.numDice}
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <TextField
                  inputProps={{
                    style: {
                      ...style.HitDieComponentInputPropStyle,
                      width: 17,
                    },
                  }}
                  style={{ paddingRight: 3, paddingLeft: 5 }}
                  disabled
                  id={`dicetype-${row.toString}`}
                  key={`dicetype-${row.toString}`}
                  value={`d${row.diceType}`}
                  variant="outlined"
                />
              </Grid>
              <Grid>
                <TextField
                  inputProps={{ style: style.HitDieComponentInputPropStyle }}
                  style={{ paddingLeft: 5, marginRight: -8 }}
                  id={`numUsed-${row.toString}`}
                  key={`numUsed-${row.toString}`}
                  value={numUsed[index]}
                  onChange={(e) => handleHitDiceChange(e.target.value, index)}
                  onBlur={handleOnBlur}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default HitDieComponent;
