import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const SpellTabPanel = ({
  children, value, index, ...other
}) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`scrollable-auto-tabpanel-${index}`}
    aria-labelledby={`scrollable-auto-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Container>
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      </Container>
    )}
  </div>
);

export default SpellTabPanel;
