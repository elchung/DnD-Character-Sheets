import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { FixedSizeList } from 'react-window';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SimpleBar from 'simplebar-react';

const renderRow = ({ index, style, data }) => {
  const listStyle = {
    ...style,
    ...(data[index].selected === index ? {
      color: '#4ABDAC',
      borderRight: '3px solid #4ABDAC',
    } : null),
  };

  return (
    <ListItem
      key={index}
      style={listStyle}
      selected={data[index].selected === index}
      button
      onClick={() => data[index].onChange(index)}
      dense={!!data[index].secondaryText}
    >
      <ListItemIcon style={{ marginRight: -25, marginLeft: -5 }}>
        <Checkbox
          edge="start"
          tabIndex={-1}
          color="primary"
          disableRipple
          onChange={(e) => data[index].handleCheckBoxChange(e, index)}
        />
      </ListItemIcon>
      <ListItemText
        id={data[index].name}
        primary={data[index].name}
        secondary={data[index].secondaryText}
      />
    </ListItem>
  );
};

export const VirtualizedTabs = ({ height, itemData }) => (
  <SimpleBar
    data-simplebar-force-visible="x"
    style={{ marginRight: 5 }}
  >
    {({ scrollableNodeRef, contentNodeRef }) => (
      <FixedSizeList
        height={height}
        itemSize={48}
        itemCount={itemData.length}
        itemData={itemData}
        outerRef={scrollableNodeRef}
        innerRef={contentNodeRef}
      >
        {renderRow}
      </FixedSizeList>
    )}
  </SimpleBar>
);

VirtualizedTabs.propTypes = {
  height: PropTypes.number.isRequired,
  itemData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VirtualizedTabs;
