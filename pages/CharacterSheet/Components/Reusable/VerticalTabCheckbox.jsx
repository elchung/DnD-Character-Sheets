import React from 'react';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const VerticalTab = withStyles(() => ({
  root: {
    borderRight: '2px solid lightgray',
    textAlign: 'left',
    padding: 0,
  },
  selected: {
    color: '#4ABDAC',
    borderRight: '3px solid #4ABDAC',
    textAlign: 'left',
  },
  wrapper: {
    alignItems: 'flex-start',
    padding: 0,
  },
}))(Tab);


export const VerticalTabCheckbox = ({ index, data }) => (
  <VerticalTab
    label={(
      <div>
        <Checkbox
          onChange={data.handleCheckboxChange}
          onClick={(event) => event.stopPropagation()}
          onFocus={(event) => event.stopPropagation()}
          color="primary"
          InputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Typography variant="caption">{data.itemList[index]}</Typography>
      </div>
    )}
    id={`vertical-tab-${data.itemList[index]}`}
    key={`vertical-tab-${data.itemList[index]}`}
    aria-controls={`vertical-tabpanel-${data.itemList[index]}`}
  />
);

VerticalTabCheckbox.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
};

export default VerticalTabCheckbox;
