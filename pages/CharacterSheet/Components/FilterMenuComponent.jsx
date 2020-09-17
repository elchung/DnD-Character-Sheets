import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import SortIcon from '@material-ui/icons/Sort';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import FilterMenuFilterBySubmenuComponent from './Modals/AddSpellsModal/FilterMenuFilterBySubmenuComponent';
import Capitalize from '../../Utils/stringUtils';

export const SpellFilterMenu = ({
  filterBy,
  setFilterBy,
  sortByOptions,
  sortBy,
  setSortBy,
  ascending,
  setAscending,
  displayOptions,
  display,
  setDisplay,
  prioritizeFilterOut,
  setPrioritizeFilterOut,
}) => {
  const [anchor, setAnchor] = useState(null);
  const [displayedFilterBy, setDisplayedFilterBy] = useState(filterBy);
  const [displayedSortBy, setDisplayedSortBy] = useState(sortBy);
  const [displayedDisplay, setDisplayedDisplay] = useState(display);
  const open = Boolean(anchor);

  const handleOpen = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = (submit) => {
    if (submit) {
      setSortBy(displayedSortBy);
      setFilterBy(displayedFilterBy);
      setDisplay(displayedDisplay);
    } else {
      setDisplayedSortBy(sortBy);
      setDisplayedFilterBy(filterBy);
      setDisplayedDisplay(display);
    }
    setAnchor(null);
  };

  const handleDisplayChange = (event) => {
    if (event.target.checked) {
      setDisplayedDisplay(new Set([...displayedDisplay, event.target.name]));
    } else {
      // eslint-disable-next-line max-len
      setDisplayedDisplay(new Set([...displayedDisplay].filter((item) => item !== event.target.name)));
    }
  };

  const handleSortDirChange = (event) => {
    setAscending(event.target.checked);
  };

  const handleSortChange = (event) => {
    setDisplayedSortBy(event.target.value);
  };

  const handleSubmit = () => {
    handleClose(true);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleOpen}
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
        <div style={{ paddingLeft: 20, paddingRight: 10, paddingTop: 10 }}>
          <Divider />
          <FormLabel component="legend" style={{ paddingTop: 5, paddingBottom: 5 }}>Display Secondary Text:</FormLabel>
          <Divider />
          <FormControl component="fieldset" style={{ paddingBottom: 5 }}>
            {displayOptions.map((displayName) => (
              <FormControlLabel
                control={(
                  <Checkbox
                    color="primary"
                    checked={displayedDisplay.has(displayName)}
                    onChange={handleDisplayChange}
                    name={Capitalize(displayName)}
                    size="small"
                  />
                )}
                label={displayName}
              />
            ))}
          </FormControl>
          <Divider />
          <FormLabel component="legend" style={{ paddingTop: 5, paddingBottom: 5 }}>Filter By:</FormLabel>
          <Divider />
          <FormGroup row>
            {Object.keys(filterBy).map((filterKey) => (
              <FilterMenuFilterBySubmenuComponent
                options={Object.keys(displayedFilterBy[filterKey])}
                filterKey={filterKey}
                filters={displayedFilterBy}
                setFilters={setDisplayedFilterBy}
                prioritizeFilterOut={prioritizeFilterOut}
                setPrioritizeFilterOut={setPrioritizeFilterOut}
              />
            ))}
          </FormGroup>
          <Divider />
          <FormLabel component="legend" style={{ paddingTop: 5, paddingBottom: 5 }}>Sort By:</FormLabel>
          <Divider />
          <FormControl component="fieldset">
            <FormControlLabel
              control={(
                <Checkbox
                  checked={ascending}
                  icon={<ArrowDropDownIcon color="primary" />}
                  checkedIcon={<ArrowDropUpIcon color="primary" />}
                  name="ascdesc"
                  onChange={handleSortDirChange}
                />
              )}
              label="Direction"
            />
            <RadioGroup aria-label="sortBy" name="sortBy" column value={displayedSortBy} onChange={handleSortChange}>
              {sortByOptions.map((sortName) => (
                <FormControlLabel value={sortName} control={<Radio size="small" color="primary" />} label={Capitalize(sortName)} />
              ))}
            </RadioGroup>
          </FormControl>
          <Button color="primary" onClick={handleSubmit} style={{ alignItems: 'flex-end', justify: 'flex-end', display: 'flex' }}>Apply</Button>
        </div>
      </Menu>
    </div>
  );
};

SpellFilterMenu.propTypes = {
  filterBy: PropTypes.instanceOf(Set).isRequired,
  setFilterBy: PropTypes.func.isRequired,
  sortByOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
  ascending: PropTypes.bool.isRequired,
  setAscending: PropTypes.func.isRequired,
  displayOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  display: PropTypes.instanceOf(Set).isRequired,
  setDisplay: PropTypes.func.isRequired,
  prioritizeFilterOut: PropTypes.bool.isRequired,
  setPrioritizeFilterOut: PropTypes.func.isRequired,
};

export default SpellFilterMenu;
