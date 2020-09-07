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


const options = [
  'Show some love to Material-UI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];

export const FilterMenuFilterBySubmenuComponent = ({
  options, setSelected,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedItems, setSelectedItems] = React.useState(options.filter((acc, option) => {
    acc[option] = '';
    return acc;
  }, {}));

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClickListItem}
        >
          <ListItemText primary="Filter By" secondary={`${selectedItems.size} Selected`} />
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
                control={<Checkbox checked={selectedItems[option]} onChange={handleChange} name={option} />}
                label={option}
              />
            ))}
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
      </Menu>
    </div>
  );
};

export default FilterMenuFilterBySubmenuComponent;
