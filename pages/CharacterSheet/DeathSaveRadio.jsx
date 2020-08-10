import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';

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
        checked={deathSaves[id] >= 1}
        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
        color="primary"
        icon={<RadioButtonUncheckedIcon fontSize="small" />}
        id={`${id}-1`}
        onChange={handleChange}
      />
      <RemoveIcon fontSize="small" style={{ marginLeft: -16, marginRight: -6, marginBottom: -7 }} />
      <Checkbox
        checked={deathSaves[id] >= 2}
        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
        color="primary"
        icon={<RadioButtonUncheckedIcon fontSize="small" />}
        id={`${id}-2`}
        onChange={handleChange}
        style={{ marginLeft: -10 }}
      />
      <RemoveIcon fontSize="small" style={{ marginLeft: -16, marginRight: -6, marginBottom: -7 }} />
      <Checkbox
        checked={deathSaves[id] === 3}
        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
        color="primary"
        icon={<RadioButtonUncheckedIcon fontSize="small" />}
        id={`${id}-3`}
        onChange={handleChange}
        style={{ marginLeft: -10 }}
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
