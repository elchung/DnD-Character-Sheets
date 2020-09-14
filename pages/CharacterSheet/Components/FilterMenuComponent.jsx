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
import FilterMenuFilterBySubmenuComponent from './Modals/AddSpellsModal/FilterMenuFilterBySubmenuComponent';


export const SpellFilterMenu = ({
  filterBy,
  setFilterBy,
  sortByOptions,
  sortBy,
  setSortBy,
  displayOptions,
  display,
  setDisplay,
}) => {
  const [anchor, setAnchor] = useState(null);
  const [displayedFilterBy, setDisplayedFilterBy] = useState(filterBy);
  const [displayedSortBy, setDisplayedSortBy] = useState(sortBy);
  const [displayedDisplayedBy, setDisplayedDisplayedBy] = useState(display);
  const open = Boolean(anchor);
  const [isApplying, setIsApplying] = useState(false);

  const handleOpen = (event) => {
    setAnchor(event.currentTarget);
    setIsApplying(false);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const handleDisplayChange = (event) => {
    if (event.target.checked) {
      setDisplayedDisplayedBy(new Set([...displayedDisplayedBy, event.target.name]));
    } else {
      // eslint-disable-next-line max-len
      setDisplayedDisplayedBy(new Set([...displayedDisplayedBy].filter((item) => item !== event.target.name)));
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
          <FormControl component="fieldset">
            <FormLabel component="legend">Display By:</FormLabel>
            {displayOptions.map((displayName) => (
              <FormControlLabel
                control={(
                  <Checkbox
                    color="primary"
                    checked={displayedDisplayedBy.has(displayName)}
                    onChange={handleDisplayChange}
                    name={displayName}
                    size="small"
                  />
                )}
                label={displayName}
              />
            ))}
          </FormControl>
          <Divider />
          <FormLabel component="legend" style={{ paddingTop: 10 }}>Filter By:</FormLabel>
          <FormGroup row>
            {Object.keys(filterBy).map((filterKey) => (
              <FilterMenuFilterBySubmenuComponent
                options={Object.keys(displayedFilterBy[filterKey])}
                filterKey={filterKey}
                filters={displayedFilterBy}
                setFilters={setDisplayedFilterBy}
              />
            ))}
          </FormGroup>
          <Divider />
          <FormControl component="fieldset">
            <FormLabel component="legend" style={{ paddingTop: 10 }}>Sort By:</FormLabel>
            <RadioGroup aria-label="sortBy" name="sortBy" column value={displayedSortBy} onChange={handleSortChange}>
              {sortByOptions.map((sortName) => (
                <FormControlLabel value={sortName} control={<Radio size="small" color="primary" />} label={sortName} />
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
  displayOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  display: PropTypes.instanceOf(Set).isRequired,
  setDisplay: PropTypes.func.isRequired,
};

export default SpellFilterMenu;
