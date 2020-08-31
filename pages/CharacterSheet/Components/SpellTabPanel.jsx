import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const SpellTabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`scrollable-auto-tabpanel-${index}`}
    aria-labelledby={`scrollable-auto-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box p={3}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);

export default SpellTabPanel;
