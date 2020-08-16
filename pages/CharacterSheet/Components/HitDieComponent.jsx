import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';

const HitDieComponent = () => {
  const { hitDice, style } = useCharacterState();
  // const { } = useSetCharacterState();
  // { numDice: 0, diceType: 0, numUsed: 0 }

  return (
    <Paper style={style.hitDieComponent} variant="outlined">
      <Typography align="center" color="textSecondary" style={style.headerStyle}>Hit Dice</Typography>
      <List dense disablePadding>
        <ListItemText
          primary={(
            <Typography align="center" color="textSecondary" style={{ fontSize: 10 }}>
              Level - Die - Used
            </Typography>
          )}
        />
        {hitDice.map((row) => (
          <ListItem
            key={row}
          >
            <TextField
              inputProps={{
                style: {
                  ...style.HitDieComponentInputPropStyle,
                },
              }}
              disabled
              id={`level-${row.toString}`}
              key={`level-${row.toString}`}
              value={row.numDice}
              variant="outlined"
            />
            <TextField
              inputProps={{
                style: {
                  ...style.HitDieComponentInputPropStyle,
                  marginLeft: 9,
                },
              }}
              disabled
              id={`dicetype-${row.toString}`}
              key={`dicetype-${row.toString}`}
              value={`d${row.diceType}`}
              variant="outlined"
            />
            <TextField
              inputProps={{
                style: {
                  ...style.HitDieComponentInputPropStyle,
                  marginLeft: 13,
                },
              }}
              disabled
              id={`numUsed-${row.toString}`}
              key={`numUsed-${row.toString}`}
              value={row.numUsed}
              variant="outlined"
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default HitDieComponent;
