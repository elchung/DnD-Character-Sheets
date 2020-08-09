import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
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
  // TODO: update num rows based on variety of classes taken
  // { numDice: 0, diceType: 0, numUsed }

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
            something
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default HitDieComponent;

/*      <Table size="small" style={{ width: 'auto' }}>
         <TableHead>
          <TableCell>Level</TableCell>
          <TableCell>Die</TableCell>
          <TableCell>Used</TableCell>
        </TableHead>
        <TableBody>
          {hitDice.map((row) => (
            <TableRow>
              <TableCell>{row.numDice}</TableCell>
              <TableCell>{`d${row.diceType}`}</TableCell>
              <TableCell>{row.numUsed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */
