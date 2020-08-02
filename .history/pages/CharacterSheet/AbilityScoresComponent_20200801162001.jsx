import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export const BaseAbilityScoreComponent = (ability, abilityScore, setAbilityScore, scoreOnTop) => {
  return (
    <Paper Elevation={3}>
      <Typography variant="h6" alight="center" nowrap={true}>
        `${ability}`
      </Typography>
       <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
      </FormControl>
    </Paper>
  )
};