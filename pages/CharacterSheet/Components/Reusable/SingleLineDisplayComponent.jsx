import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import PropTypes from 'prop-types';
import { useCharacterState } from '../../../Context/CharacterContext';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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
          inputProps={style.singleLineDisplayInputProps}
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
