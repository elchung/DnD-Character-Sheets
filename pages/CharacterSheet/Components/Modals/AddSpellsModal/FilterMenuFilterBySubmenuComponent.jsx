import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

export const FilterMenuFilterBySubmenuComponent = ({
  options, filters, setFilters, filterKey,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  console.log('filters ', filters);
  console.log('filter key', filterKey);
  const totalSelected = Object.keys(filters[filterKey]).reduce((total, item) => (
    filters[filterKey][item] !== '' ? total + 1 : total
  ), 0);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOptionsClick = (option) => {
    // eslint-disable-next-line no-nested-ternary
    const newState = filters[filterKey][option] === 'ACCEPT' ? 'REJECT' : filters[filterKey][option] === 'REJECT' ? '' : 'ACCEPT';
    setFilters({
      ...filters,
      [filterKey]: {
        ...filters[filterKey],
        [option]: newState,
      },
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          onClick={handleClickListItem}
        >
          <ListItemText primary={`${filterKey}:`} secondary={`${totalSelected} Selected`} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <FormControl component="fieldset" size="small">
          <FormLabel component="legend">Filter by:</FormLabel>
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={filters[filterKey][option]}
                    indeterminate={filters[filterKey][option] === 'REJECT'}
                    onChange={() => handleOptionsClick(option)}
                    name={option}
                  />
                )}
                label={option}
              />
            ))}
          </FormGroup>
          <FormHelperText>
            {`${totalSelected} Selected`}
          </FormHelperText>
        </FormControl>
      </Menu>
    </div>
  );
};

export default FilterMenuFilterBySubmenuComponent;
