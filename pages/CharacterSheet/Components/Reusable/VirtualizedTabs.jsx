import React from 'react';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { FixedSizeList } from 'react-window';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const renderRow = ({ index }) => (
  <ListItem key={index} style={style} role={undefined} button onClick={() => onTabClick(index)}>
    <ListItemIcon>
      <Checkbox
        edge="start"
        checked={checked.indexOf(value) !== -1}
        tabIndex={-1}
        disableRipple
        inputProps={{ 'aria-labelledby': labelId }}
      />
    </ListItemIcon>
    <ListItemText
      id={labelId}
      primary={spellName}
      secondary={secondary ? secondaryText : null}
    />
  </ListItem>
);

export const VirtualizedTabs = ({
  value, onTabClick, style, totalHeight, items, renderData, renderRow,
}) => (
  <FixedSizeList height={totalHeight} itemSize={48} itemCount={itemCount} renderData={renderData}>
    {renderRow}
  </FixedSizeList>
);

VirtualizedTabs.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
};

export default VirtualizedTabs;

// <VirtualizedTabslizedTabs
//   orientation="vertical"
//   variant="scrollable"
//   value={tabVal}
//   onChange={handleTabSelection}
//   style={{ paddingTop: 0, paddingBottom: 0 }}
//   height={500}
//   itemSize={48}
//   itemCount={displayedSpells.length}
//   renderData={{ handleCheckboxChange, itemList: displayedSpells }}
//   renderRow={
//     VerticalTabCheckbox
//   }
// />

