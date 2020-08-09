import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RemoveIcon from '@material-ui/icons/Remove';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const DeathSaveComponent = ({
  id,
  deathSaves,
  setDeathSaves,
}) => {
  const handleChange = (event) => { // event.target.id last char to int
    const val = event.target.checked
      ? parseInt(event.target.id.slice(-1), 10)
      : parseInt(event.target.id.slice(-1), 10) - 1;
    setDeathSaves({ ...deathSaves, [id]: val });
  };

  return (
    <Box style={{ paddingLeft: 3 }}>
      <Checkbox
        id={`${id}-1`}
        icon={<RadioButtonUncheckedIcon fontSize="small" />}
        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
        onChange={handleChange}
        checked={deathSaves[id] >= 1}
        color="primary"
      />
      <RemoveIcon fontSize="small" style={{ marginLeft: -16, marginRight: -6, marginBottom: -7 }} />
      <Checkbox
        id={`${id}-2`}
        icon={<RadioButtonUncheckedIcon fontSize="small" />}
        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
        onChange={handleChange}
        style={{ marginLeft: -10 }}
        checked={deathSaves[id] >= 2}
        color="primary"
      />
      <RemoveIcon fontSize="small" style={{ marginLeft: -16, marginRight: -6, marginBottom: -7 }} />
      <Checkbox
        id={`${id}-3`}
        icon={<RadioButtonUncheckedIcon fontSize="small" />}
        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
        onChange={handleChange}
        style={{ marginLeft: -10 }}
        checked={deathSaves[id] === 3}
        color="primary"
      />
    </Box>
  );
};

DeathSaveComponent.propTypes = {
  id: PropTypes.string.isRequired,
  deathSaves: PropTypes.shape({
    successes: PropTypes.number.isRequired,
    failures: PropTypes.number.isRequired,
  }).isRequired,
  setDeathSaves: PropTypes.func.isRequired,
};

export default DeathSaveComponent;
