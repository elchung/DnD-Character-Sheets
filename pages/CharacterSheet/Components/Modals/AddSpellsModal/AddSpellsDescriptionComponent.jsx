import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


const AddSpellsDescriptionComponent = ({ spell }) => (
  <div
    role="tabpanel"
    id="vertical-tabpanel-display"
  >
    {spell ? (
      <Container>
        <Box p={3}>
          <Typography variant="h6">{spell.name}</Typography>
          <Typography variant="subtitle1">{`${spell.casting_time} - range: ${spell.range}`}</Typography>
          <Typography variant="body1">{spell.description}</Typography>
        </Box>
      </Container>
    )
      : <Typography variant="h6">No Spell Selected</Typography>}
  </div>
);

export default AddSpellsDescriptionComponent;
