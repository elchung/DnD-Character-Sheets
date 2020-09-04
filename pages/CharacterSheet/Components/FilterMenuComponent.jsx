import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import SortIcon from '@material-ui/icons/Sort';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

export const SpellFilterMenu = ({
  displayed,
  setDisplayed,
  filterByOptions,
  filterBy,
  setFilterBy,
  SortByOptions,
  sortBy,
  setSortBy,
  DisplayOptions,
  display,
  setDisplay,
}) => {
  const [menuOpen, setMenuOpen] = React.useState(null);
  const open = Boolean(menuOpen);
  const handleClick = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const handleClose = () => {
    setMenuOpen(null);
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
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
        <Typography>Filter by:</Typography>
        <Typography>checkbox: spell level, class, ritual or not, school</Typography>
        <Typography>Sort By:</Typography>
        <Typography>radiogroup(tristate, asc, desc, off: spell level, class,</Typography>
        <Typography>Display:</Typography>
        <Typography>checkboxes: range, class, level,</Typography>
      </Menu>
    </div>
  );
};

export default SpellFilterMenu;
