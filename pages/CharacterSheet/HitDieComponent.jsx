import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  useCharacterState,
  useSetCharacterState,
} from '../Context/CharacterContext';

const HitDieComponent = () => {
  const { hitDice, style } = useCharacterState();
  // const { } = useSetCharacterState();
  // { numDice: 0, diceType: 0, numUsed: 0 }

  return (
    <Paper variant="outlined" style={style.hitDieComponent}>
      <Typography align="center" color="textSecondary" style={style.headerStyle}>Hit Dice</Typography>
      <List disablePadding dense>
        <ListItemText
          primary={(
            <Typography align="center" color="textSecondary" style={{ fontSize: 10 }}>
              Level - Die - Used
            </Typography>
          )}
        />
        {hitDice.map((row) => (
          <ListItem key={row} style={{}}>
            <TextField
              key={`level-${row.toString}`}
              id={`level-${row.toString}`}
              value={row.numDice}
              disabled
              variant="outlined"
              InputProps={{
                disableUnderline: true,
                style: {
                  ...style.HitDieComponentInputPropStyle,
                  marginLeft: -7,
                },
              }}
            />
            <TextField
              key={`dicetype-${row.toString}`}
              id={`dicetype-${row.toString}`}
              value={`d${row.diceType}`}
              disabled
              variant="outlined"
              InputProps={{
                disableUnderline: true,
                style: {
                  ...style.HitDieComponentInputPropStyle,
                  marginLeft: 9,
                },
              }}
            />
            <TextField
              key={`numUsed-${row.toString}`}
              id={`numUsed-${row.toString}`}
              value={row.numUsed}
              disabled
              variant="outlined"
              InputProps={{
                disableUnderline: true,
                style: {
                  ...style.HitDieComponentInputPropStyle,
                  marginLeft: 13,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default HitDieComponent;
