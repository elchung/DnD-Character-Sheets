/* eslint-disable no-nested-ternary */
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import PropTypes from 'prop-types';

const TriStateCheckbox = ({
  state, onClick, size, name,
}) => (
  <IconButton
    color={state === 'ACCEPT' ? 'primary' : state === 'REJECT' ? 'secondary' : 'default'}
    onClick={() => onClick(name)}
  >
    {
      state === 'ACCEPT'
        ? <CheckBoxIcon size={size} aria-label={name} />
        : state === 'REJECT'
          ? <IndeterminateCheckBoxIcon />
          : <CheckBoxOutlineBlankIcon />
    }
  </IconButton>
);

TriStateCheckbox.propTypes = {
  state: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TriStateCheckbox;