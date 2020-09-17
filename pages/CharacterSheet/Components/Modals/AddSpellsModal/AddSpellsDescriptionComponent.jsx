import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const AddSpellsDescriptionComponent = ({ spell }) => (
  <div
    role="tabpanel"
    id="vertical-tabpanel-display"
  >
    {spell ? (
      <Box p={3}>
        <Typography variant="h6">{spell.name}</Typography>
        <Typography variant="subtitle1">{`${spell.casting_time} - range: ${spell.range}`}</Typography>
        <Typography variant="body1">{spell.description}</Typography>
      </Box>
    )
      : <Typography variant="h6">No Spell Selected</Typography>}
  </div>
);

export default AddSpellsDescriptionComponent;
