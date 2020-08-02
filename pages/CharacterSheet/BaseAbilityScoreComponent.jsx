import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import scoreToModifier from '../Utils/abilityScoreUtils';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 300,
    margin: 100,
  },
  resize: {
    fontSize: 50
  },
};

export const BaseAbilityScoreComponent = ({ ability, abilityScore, setAbilityScore, scoreOnTop }) => {
  const [displayedAbilityScore, setDisplayedAbilityScore] = React.useState(abilityScore);
  const mainText = scoreOnTop ? displayedAbilityScore : scoreToModifier(abilityScore);
  const subText = scoreOnTop ? scoreToModifier(abilityScore) : displayedAbilityScore;

  const handleChange = (event) => {
    const numberInput = event.target.value.replace(/[^0-9]/g, '');

    setDisplayedAbilityScore(numberInput);
  };

  const handleBlur = () => {
    setAbilityScore(displayedAbilityScore);
  };

  return (
    <Card elevation={5} variant="outlined">
      <CardContent>
        <Typography alight="center" nowrap color="textSecondary" gutterBottom variant="caption">
          {`${ability}`}
        </Typography>
        <div>
          <TextField
            id={`${ability}-ability-maintext`}
            value={mainText}
            onChange={handleChange}
            disabled={!scoreOnTop}
            color={scoreOnTop ? 'Primary' : 'Secondary'}
            variant='outlined'
            inputProps={{
              style: {fontSize: 30, width: 30, height: 20}
            }}
          />
        </div>
        <div>  
          <TextField
            id={`${ability}-ability-subtext`}
            value={subText}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={scoreOnTop}
            color={scoreOnTop ? 'Secondary' : 'Primary'}
            variant='outlined'
            inputProps={{
              style: {fontSize: 15, width: 15, height: 5}
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default BaseAbilityScoreComponent;
