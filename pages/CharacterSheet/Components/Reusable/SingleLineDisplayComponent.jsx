import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useCharacterState } from '../../../Context/CharacterContext';

const SingleLineDisplayComponent = ({
  text,
  value,
  setValue,
}) => {
  const [displayedValue, setDisplayedValue] = useState(value);
  const { useStyles, globalStyles } = useCharacterState();
  const classes = useStyles();

  return (
    <Card elevation={globalStyles.elevation} className={classes.singleLineDisplayComponent}>
      <CardActions>
        <TextField
          id="proficiency-bonus-textfield"
          inputProps={{
            style: {
              textAlign: 'center',
              fontSize: 30,
              width: 25,
              height: 15,
            },
          }}
          onBlur={() => setValue(displayedValue)}
          onChange={(event) => setDisplayedValue(event.target.value)}
          value={displayedValue}
          variant="outlined"
        />
        <Typography align="center" color="textSecondary">{text}</Typography>
      </CardActions>
    </Card>
  );
};

SingleLineDisplayComponent.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default SingleLineDisplayComponent;
