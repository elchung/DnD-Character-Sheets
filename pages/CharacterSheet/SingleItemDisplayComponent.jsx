import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import { useCharacterState } from '../Context/CharacterContext';

const SingleItemDisplayComponent = ({
  header,
  value,
  updateValue,
}) => {
  const { style } = useCharacterState();
  const [displayText, setDisplayText] = React.useState(value);

  return (
    <Paper variant="outlined" style={style.singleItemDisplayComponentStyle}>
      <Typography align="center" color="textSecondary" style={{ paddingTop: 7 }}>{header}</Typography>
      <InputBase
        value={displayText}
        onChange={(event) => setDisplayText(event.target.value)}
        onBlur={() => updateValue(displayText)}
        inputProps={{
          style: {
            fontSize: 35,
            textAlign: 'center',
            paddingTop: 15,
          },
          'aria-label': 'naked',
        }}
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
