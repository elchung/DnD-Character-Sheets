import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import { useStore } from '../Context/CharacterContext';

const SingleItemDisplayComponent = ({
  header,
  value,
  updateValue,
}) => {
  const [displayText, setDisplayText] = React.useState(value);

  return (
    <Paper variant="outlined" style={{ width: 100, height: 110 }}>
      <Typography align="center" color="textSecondary" style={{ paddingTop: 7 }}>{header}</Typography>
      <InputBase
        value={displayText}
        onChange={(event) => setDisplayText(event.target.value)}
        onBlur={() => updateValue(displayText)}
        inputProps={{
          style: {
            fontSize: 35,
            textAlign: 'center',
            color: 'gray',
            paddingTop: 15,
          },
          'aria-label': 'naked',
        }}
      />
    </Paper>
  );
};

SingleItemDisplayComponent.propTypes = {
  header: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  updateValue: PropTypes.func.isRequired,
};

export default SingleItemDisplayComponent;
