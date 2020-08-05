import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const SingleItemDisplayComponent = ({
  header,
  value,
  updateValue,
  style,
}) => {
  const [displayText, setDisplayText] = React.useState(value);
  return (
    <Paper variant="outlined" style={{ width: 100, height: 130 }}>
      <Typography align="center" color="textSecondary" style={style.headerStyle}>{header}</Typography>
      <TextField
        value={displayText}
        onChange={(event) => setDisplayText(event.target.value)}
        onBlur={() => updateValue(displayText)}
        inputProps={{
          style: {
            fontSize: 35,
            textAlign: 'center',
          },
        }}
      />
    </Paper>
  );
};

SingleItemDisplayComponent.propTypes = {
  header: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  updateValue: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SingleItemDisplayComponent;
