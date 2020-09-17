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
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Capitalize from '../../../../Utils/stringUtils';

export const FilterMenuFilterBySubmenuComponent = ({
  options, filters, setFilters, filterKey, prioritizeFilterOut, setPrioritizeFilterOut,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const totalSelected = Object.keys(filters[filterKey]).reduce((total, item) => (
    filters[filterKey][item] !== '' ? total + 1 : total
  ), 0);
  const tooltipMessage = 'If a spell falls under multiple classes spell list, t'
    + 'his will prioritize removing the spell from the displayed list or keeping it in,'
    + ' based on what is classes are being filtered out.';

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterPriorityChange = (event) => {
    setPrioritizeFilterOut(event.target.checked);
  };

  const handleOptionsClick = (option) => {
    // let newState;
    // if (filterKey === 'class') {
    //   // eslint-disable-next-line no-nested-ternary
    // eslint-disable-next-line max-len
    //   newState = filters[filterKey][option] === 'ACCEPT' ? 'REJECT' : filters[filterKey][option] === 'REJECT' ? '' : 'ACCEPT';
    // } else if (filterKey === 'level') {
    //   newState = filters[filterKey][option] === 'ACCEPT' ? 'REJECT' : 'ACCEPT';
    // }
    const newState = !filters[filterKey][option];
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
      <List component="nav" aria-label="Device settings" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <ListItem
          button
          onClick={handleClickListItem}
        >
          <ListItemText primary={`${Capitalize(filterKey)}:`} secondary={`${totalSelected} Selected`} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Typography component="div" style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Priority In</Grid>
            <Grid item>
              <Tooltip title={tooltipMessage}>
                <Switch checked={prioritizeFilterOut} onChange={handleFilterPriorityChange} name="prioritySwitch" />
              </Tooltip>
            </Grid>
            <Grid item>Priority Out</Grid>
          </Grid>
        </Typography>
        <FormControl component="fieldset" size="small" style={{ paddingLeft: 20 }}>
          <FormLabel component="legend">Filter by:</FormLabel>
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                control={(
                  <Checkbox
                    checked
                    indeterminate={!filters[filterKey][option]}
                    onChange={() => handleOptionsClick(option)}
                    color={filters[filterKey][option] ? 'primary' : 'secondary'}
                    name={Capitalize(option)}
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
