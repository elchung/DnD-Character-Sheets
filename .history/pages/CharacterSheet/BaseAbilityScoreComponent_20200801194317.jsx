import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import scoreToModifier from '../Utils/abilityScoreUtils'

export const BaseAbilityScoreComponent = (ability, abilityScore, setAbilityScore, scoreOnTop) => {
  const [displayedAbilityScore, setDisplayedAbilityScore] = React.useState();
  const mainText = scoreOnTop ? abilityScore : scoreToModifier(abilityScore);
  const subText = scoreOnTop ? scoreToModifier(abilityScore) : abilityScore;

  const handleChange = event => {
    setDisplayedAbilityScore(event.target.value);
  };

  const handleBlur = event => {
    setAbilityScore(displayedAbilityScore);
  };

  return (
    <Paper Elevation={3}>
      <Typography variant="h6" alight="center" nowrap={true}>
        {ability}
      </Typography>
      <FormControl variant="outlined">
        <OutlinedInput id="component-outlined" value={mainText} onChange={handleChange} label="Name" disabled={scoreOnTop} />
      </FormControl>
      <FormControl variant="outlined">
        <OutlinedInput id="component-outlined" value={subText} onChange={handleChange} label="Name" disabled={!scoreOnTop} />
      </FormControl>
    </Paper>
  );
};