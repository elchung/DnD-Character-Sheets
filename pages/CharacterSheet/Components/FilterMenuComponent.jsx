import React, {
  useState, memo, useMemo, useCallback,
} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import SortIcon from '@material-ui/icons/Sort';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TriStateCheckbox from './Reusable/TriStateCheckbox';


export const SpellFilterMenu = ({
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
  const [anchor, setAnchor] = useState(null);
  const [displayedFilterBy, setDisplayedFilterBy] = useState(filterBy);
  const [displayedSortBy, setDisplayedSortBy] = useState(sortBy);
  const [displayedDisplayedBy, setDisplayedDisplayedBy] = useState(display);
  const open = Boolean(anchor);
  const [isApplying, setIsApplying] = useState(false);

  const handleOpen = useCallback((event) => {
    setAnchor(event.currentTarget);
    setIsApplying(false);
  }, []);

  const handleClose = useCallback(() => {
    setAnchor(null);
  }, []);

  const handleDisplayChange = useCallback((event) => {
    console.log('', event.target);
  }, []);

  const handleFilterChange = useCallback((name) => {
    if (displayedFilterBy[name] === 'ACCEPT') {
      setDisplayedFilterBy({ ...displayedFilterBy, [name]: 'REJECT' });
    } else if (filterBy[name] === 'REJECT') {
      setDisplayedFilterBy({ ...displayedFilterBy, [name]: '' });
    } else {
      setDisplayedFilterBy({ ...displayedFilterBy, [name]: 'ACCEPT' });
    }
  }, []);

  const handleSortChange = useCallback((event) => {
    setDisplayedSortBy(event.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    setSortBy(displayedSortBy);
    setFilterBy(displayedFilterBy);
    setDisplay(displayedDisplayedBy);
    handleClose();
  }, []);

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

SpellFilterMenu.propTypes = {
  filterByOptions: PropTypes.array.isRequired,
  filterBy: PropTypes.instanceOf(Set).isRequired,
  setFilterBy: PropTypes.func.isRequired,
  sortByOptions: PropTypes.array.isRequired,
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
  displayOptions: PropTypes.array.isRequired,
  display: PropTypes.instanceOf(Set).isRequired,
  setDisplay: PropTypes.func.isRequired,
};

export default memo(SpellFilterMenu);
