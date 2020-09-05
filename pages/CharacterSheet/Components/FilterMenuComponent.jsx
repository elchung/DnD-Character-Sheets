import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import SortIcon from '@material-ui/icons/Sort';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import TriStateCheckbox from './Reusable/TriStateCheckbox';

export const SpellFilterMenu = ({
  displayed,
  setDisplayed,
  filterByOptions,
  filterBy,
  setFilterBy,
  sortByOptions,
  sortBy,
  setSortBy,
  displayOptions,
  display,
  setDisplay,
}) => {
  const [menuOpen, setMenuOpen] = React.useState(null);
  const [displaySort, setDisplaySort] = React.useState(sortBy);
  const open = Boolean(menuOpen);

  const handleClick = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const handleClose = () => {
    setMenuOpen(null);
  };

  const handleDisplayChange = (event) => {
    console.log('', event.target);
  };

  const handleFilterChange = (event) => {
    console.log('', event.target);
  };

  const handleSortChange = (event) => {
    setDisplaySort(event.target.value);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <SortIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={menuOpen}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <FormLabel component="legend">Display:</FormLabel>
        <Typography>checkboxes: range, class, level,</Typography>
        <FormLabel component="legend">Filter By:</FormLabel>
        <FormGroup row>
          {filterByOptions.map((filterName) => (
            <TriStateCheckbox
              state={filterBy[filterName]}
              onClick={handleFilterChange}
              size="small"
              name={filterName}
            />
          ))}
        </FormGroup>
        <FormControl component="fieldset">
          <FormLabel component="legend">Sort By:</FormLabel>
          <RadioGroup aria-label="sortBy" name="sortBy" row value={displaySort} onChange={handleSortChange}>
            {sortByOptions.map((sortName) => (
              <FormControlLabel value={sortName} control={<Radio size="small" color="primary" />} label={sortName} />
            ))}
          </RadioGroup>
        </FormControl>
        <Typography>radiogroup(tristate, asc, desc, off: spell level, class,</Typography>
      </Menu>
    </div>
  );
};

export default SpellFilterMenu;
