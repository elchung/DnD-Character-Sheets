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
import Button from '@material-ui/core/Button';
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
  const [anchor, setAnchor] = React.useState(null);
  const [displayedFilterBy, setDisplayedFilterBy] = React.useState(filterBy);
  const [displayedSortBy, setDisplayedSortBy] = React.useState(sortBy);
  const [displayedDisplayedBy, setDisplayedDisplayedBy] = React.useState(display);
  const open = Boolean(anchor);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const handleDisplayChange = (event) => {
    console.log('', event.target);
  };

  const handleFilterChange = (name) => {
    if (displayedFilterBy[name] === 'ACCEPT') {
      setDisplayedFilterBy({ ...displayedFilterBy, [name]: 'REJECT' });
    } else if (filterBy[name] === 'REJECT') {
      setDisplayedFilterBy({ ...displayedFilterBy, [name]: '' });
    } else {
      setDisplayedFilterBy({ ...displayedFilterBy, [name]: 'ACCEPT' });
    }
  };

  const handleSortChange = (event) => {
    setDisplayedSortBy(event.target.value);
  };

  const handleSubmit = () => {
    setSortBy(displayedSortBy);
    setFilterBy(displayedFilterBy);
    setDisplay(displayedDisplayedBy);
    handleClose();
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
        anchorEl={anchor}
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
              state={displayedFilterBy[filterName]}
              onClick={handleFilterChange}
              size="small"
              name={filterName}
            />
          ))}
        </FormGroup>
        <FormControl component="fieldset">
          <FormLabel component="legend">Sort By:</FormLabel>
          <RadioGroup aria-label="sortBy" name="sortBy" row value={displayedSortBy} onChange={handleSortChange}>
            {sortByOptions.map((sortName) => (
              <FormControlLabel value={sortName} control={<Radio size="small" color="primary" />} label={sortName} />
            ))}
          </RadioGroup>
        </FormControl>
        <Button color="primary" onClick={handleSubmit} style={{ alignItems: 'flex-end', justify: 'flex-end', display: 'flex' }}>Apply</Button>
      </Menu>
    </div>
  );
};

export default SpellFilterMenu;
