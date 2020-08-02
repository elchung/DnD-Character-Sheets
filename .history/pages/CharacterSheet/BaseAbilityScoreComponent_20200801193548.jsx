import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import scoreToModifier from '../Utils/abilityScoreUtils'

export const BaseAbilityScoreComponent = (ability, abilityScore, setAbilityScore, scoreOnTop) => {
  const mainText = scoreOnTop ? abilityScore : scoreToModifier(abilityScore)
  const subtext = scoreOnTop ? scoreToModifier(abilityScore) : abilityScore
  return (
    <Paper Elevation={3}>
      <Typography variant="h6" alight="center" nowrap={true}>
        {ability}
      </Typography>
      <FormControl variant="outlined">
        <OutlinedInput id="component-outlined" value={mainText} onChange={handleMainChange} label="Name" />
      </FormControl>
    </Paper>
  )
};