import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import scoreToModifier from '../Utils/abilityScoreUtils';

export const BaseAbilityScoreComponent = ({ ability, abilityScore, setAbilityScore, scoreOnTop }) => {
  const [displayedAbilityScore, setDisplayedAbilityScore] = React.useState();
  const mainText = scoreOnTop ? displayedAbilityScore : scoreToModifier(abilityScore);
  const subText = scoreOnTop ? scoreToModifier(abilityScore) : displayedAbilityScore;

  console.log(ability)

  const handleChange = (event) => {
    const numberInput = event.target.value.replace(/[^0-9]/g, '');

    setDisplayedAbilityScore(numberInput);
  };

  const handleBlur = () => {
    setAbilityScore(displayedAbilityScore);
  };

  return (
    <Paper Elevation={5}>
      <Typography alight="center" nowrap>
        {`${ability}`}
      </Typography>
      <FormControl variant="outlined">
        <OutlinedInput
          id={`${ability}-ability-maintext`}
          value={mainText}
          onChange={handleChange}
          disabled={!scoreOnTop}
          color={scoreOnTop ? 'Primary' : 'Secondary'}
        />
      </FormControl>
      <FormControl variant="outlined">
        <OutlinedInput
          id={`${ability}-ability-subtext`}
          value={subText}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={scoreOnTop}
          color={scoreOnTop ? 'Secondary' : 'Primary'}
        />
      </FormControl>
    </Paper>
  );
};

export default BaseAbilityScoreComponent;
