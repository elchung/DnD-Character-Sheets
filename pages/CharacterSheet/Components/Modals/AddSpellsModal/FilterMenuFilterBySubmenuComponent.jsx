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
import PropTypes from 'prop-types';
import { Capitalize } from '../../../../Utils/stringUtils';

export const FilterMenuFilterBySubmenuComponent = ({
  key, options, selected, priority, setPriority, handleOptionsClick, indeterminateOn,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const totalSelected = selected.size || selected.length;
  const tooltipMessage = 'If a spell falls under multiple classes spell list, t'
    + 'his will prioritize removing the spell from the displayed list or keeping it in,'
    + ' based on what is classes are being filtered out.';

  console.log('key', key);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterPriorityChange = (event) => {
    setPriority(event.target.checked);
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
          <ListItemText primary={`${Capitalize(key)}:`} secondary={`${totalSelected} Selected`} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {setPriority ? (
          <Typography component="div" style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Priority In</Grid>
              <Grid item>
                <Tooltip title={tooltipMessage}>
                  <Switch checked={priority} onChange={handleFilterPriorityChange} name="prioritySwitch" />
                </Tooltip>
              </Grid>
              <Grid item>Priority Out</Grid>
            </Grid>
          </Typography>
        ) : null}
        <FormControl component="fieldset" size="small" style={{ padding: 20 }}>
          <FormLabel component="legend">Filter by:</FormLabel>
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                control={(
                  <Checkbox
                    checked
                    indeterminate={indeterminateOn ? !selected[option] : false}
                    onChange={() => handleOptionsClick(option)}
                    color={selected[option] ? 'primary' : 'secondary'}
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

FilterMenuFilterBySubmenuComponent.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.instanceOf(Set).isRequired,
  priority: PropTypes.bool,
  setPriority: PropTypes.func,
  handleOptionsClick: PropTypes.func.isRequired,
  indeterminateOn: PropTypes.bool,
  key: PropTypes.string.isRequired,
};

FilterMenuFilterBySubmenuComponent.defaultProps = {
  priority: undefined,
  setPriority: undefined,
  indeterminateOn: false,
};

export default FilterMenuFilterBySubmenuComponent;
