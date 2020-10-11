import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { FixedSizeList } from 'react-window';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const renderRow = ({ index, style, data }) => {
  const color = '#3f51b5';
  const listStyle = {
    ...style,
    ...(data[index].selected === index ? {
      color,
      borderRight: `3px solid ${color}`,
    } : null),
  };
  const item = data[index];

  return (
    <>
      <ListItem
        key={index}
        style={listStyle}
        selected={item.selected === index}
        button
        onClick={() => item.onChange(index)}
        dense={!!item.secondaryText}
      >
        <ListItemIcon style={{ marginRight: -25, marginLeft: -5 }}>
          <Checkbox
            edge="start"
            tabIndex={-1}
            color="primary"
            disableRipple
            checked={data[index].checked}
            onChange={(e) => item.handleCheckBoxChange(e, index)}
          />
        </ListItemIcon>
        <ListItemText
          id={item.name}
          primary={item.name}
          secondary={item.secondaryText}
        />
      </ListItem>
    </>
  );
};

export const VirtualizedTabs = ({ height, itemData }) => (
  <FixedSizeList
    height={height}
    itemSize={48}
    itemCount={itemData.length}
    itemData={itemData}
  >
    {renderRow}
  </FixedSizeList>
);

VirtualizedTabs.propTypes = {
  height: PropTypes.number.isRequired,
  itemData: PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
    checked: PropTypes.bool,
    handleCheckBoxChange: PropTypes.func,
    onChange: PropTypes.func,
    secondaryText: PropTypes.string | null,
    selected: PropTypes.number,
    sortBy: PropTypes.string,
  }).isRequired,
};

export default VirtualizedTabs;
// https://github.com/marchaos/react-virtualized-sticky-tree maybe looks at this for sticky header implementation
// <ListSubheader>{data.sortBy === 'name' ? getFirstLetter(item.name) : `Level ${item.level}`}</ListSubheader>
