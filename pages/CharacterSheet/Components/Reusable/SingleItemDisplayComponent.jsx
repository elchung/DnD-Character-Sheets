import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { useCharacterState } from '../../../Context/CharacterContext';

const SingleItemDisplayComponent = ({
  header,
  value,
  updateValue,
}) => {
  const { useStyles } = useCharacterState();
  const classes = useStyles();
  const [displayText, setDisplayText] = useState(value);

  return (
    <Paper className={classes.singleItemDisplayComponentStyle} variant="outlined">
      <Typography align="center" color="textSecondary" style={{ paddingTop: 7 }}>{header}</Typography>
      <InputBase
        inputProps={{
          style: {
            fontSize: 35,
            textAlign: 'center',
            paddingTop: header.length < 15 ? 15 : 5,
          },
          'aria-label': 'naked',
        }}
        onBlur={() => updateValue(displayText)}
        onChange={(event) => setDisplayText(event.target.value)}
        value={displayText}
      />
    </Paper>
  );
};

SingleItemDisplayComponent.propTypes = {
  header: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  updateValue: PropTypes.func.isRequired,
};

export default SingleItemDisplayComponent;
