import React from 'react';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FixedSizeList } from 'react-window';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import VerticalTabCheckbox from './VerticalTabCheckbox';

export const VirtualizedTabs = ({
  orientation, variant, value, onChange, style, height, itemSize, itemCount, renderData, renderRow,
}) => (
  <FixedSizeList height={height} itemSize={itemSize} itemCount={itemCount} renderData={renderData}>
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

