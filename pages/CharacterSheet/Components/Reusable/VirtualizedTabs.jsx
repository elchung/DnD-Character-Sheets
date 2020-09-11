import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { FixedSizeList } from 'react-window';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const renderRow = ({ index, style, data }) => (
  <ListItem
    key={index}
    style={style}
    // renderData.value === index ? ...{
    //   color: '#4ABDAC',
    //   borderRight: '3px solid #4ABDAC',
    // }
    //   : null}
    button
    onClick={() => data.onChange(index)}
    dense={data.secondary}
  >
    <ListItemIcon>
      <Checkbox
        edge="start"
        tabIndex={-1}
        disableRipple
        onChange={(e) => data.handleCheckboxChange(e, index)}
      />
    </ListItemIcon>
    <ListItemText
      id={data.name}
      primary={data.name}
      secondary={data.secondary ? data.getSecondaryText(data.name) : null}
    />
  </ListItem>
);

export const VirtualizedTabs = ({ height, itemData }) => (
  <FixedSizeList
    height={height}
    itemSize={48}
    itemCount={itemData.length}
    itemData={itemData}
    style={{ borderRight: '2px solid lightgray' }}
  >
    {renderRow}
  </FixedSizeList>
);

VirtualizedTabs.propTypes = {
  height: PropTypes.number.isRequired,
  itemData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VirtualizedTabs;
