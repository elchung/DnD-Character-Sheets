/* eslint-disable no-nested-ternary */
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';

const TriStateCheckbox = ({
  state, onClick, size, name,
}) => {
  const getIcon = () => {
    if (state === 'ACCEPT') {
      return <CheckBoxIcon size={size} aria-label={name} />;
    } if (state === 'REJECT') {
      return <IndeterminateCheckBoxIcon size={size} aria-label={name} />;
    }
    return <CheckBoxOutlineBlankIcon size={size} aria-label={name} />;
  };
  return (
    <>
      <IconButton
        color={state === 'ACCEPT' ? 'primary' : state === 'REJECT' ? 'secondary' : 'default'}
        onClick={() => onClick(name)}
      >
        {getIcon()}
      </IconButton>
      <FormLabel>{name}</FormLabel>
    </>
  );
};

TriStateCheckbox.propTypes = {
  state: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TriStateCheckbox;
