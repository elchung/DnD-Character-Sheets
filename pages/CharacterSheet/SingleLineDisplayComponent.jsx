import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import { useCharacterState } from '../Context/CharacterContext';

const SingleLineDisplayComponent = ({
  text,
  value,
  setValue,
}) => {
  const [displayedValue, setDisplayedValue] = React.useState(value);
  const { style } = useCharacterState();

  return (
    <Card elevation={style.elevation} style={style.singleLineDisplayComponent}>
      <CardActions>
        <TextField
          id="proficiency-bonus-textfield"
          value={displayedValue}
          onChange={(event) => setDisplayedValue(event.target.value)}
          onBlur={() => setValue(displayedValue)}
          variant="outlined"
          inputProps={style.singleLineDisplayInputProps}
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
