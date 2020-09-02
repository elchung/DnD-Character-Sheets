import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { spells } from '../../../../Data/Spells';
import * as Sort from '../../../Utils/sortObjArrayUtils';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../../Context/CharacterContext';

const TabPanel = (props) => {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export const AddSpellsComponent = () => {
  const [selectedSpells, setSelectedSpells] = React.useState({
    cantrip: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
  }); // keys are 0-9
  const [displayedSpells, setDisplayedSpells] = React.useState(Sort.sortAlphabeticalAsc(spells, 'name'));
  const [tabVal, setTabVal] = React.useState(0);

  const handleTabSelection = (event, newValue) => {
    setTabVal(newValue);
  };

  const handleCheckboxChange = (event, val) => {
    console.log('', event);
    console.log('', val);
  };
  // need to add sorting/filtering to spell list (by name, level, class)
  // need to add checkbox for selected spells
  return (
    <div style={{ display: 'flex', flexGrow: 1, height: 550 }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tabVal}
        onChange={handleTabSelection}
        aria-label="spell list"
        style={{ borderRight: '1px solid ' }}
      >
        {displayedSpells.map((spell) => (
          <Tab
            label={(
              <div display="inline-flex" flex-direction="row">
                <Checkbox
                  checked={selectedSpells[spell.level][spell.name]}
                  onChange={handleCheckboxChange}
                  onClick={(event) => event.stopPropagation()}
                  onFocus={(event) => event.stopPropagation()}
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <Typography variant="caption">{spell.name}</Typography>
              </div>
            )}
            id={`vertical-tab-${spell.name}`}
            key={`vertical-tab-${spell.name}`}
            aria-controls={`vertical-tabpanel-${spell.name}`}
          />
        ))}
      </Tabs>
      {displayedSpells.map((spell, index) => (
        <TabPanel value={tabVal} index={index} style={{ width: '80%' }}>
          <Typography variant="h6">{spell.name}</Typography>
          <Typography variant="subtitle1">{`${spell.casting_time} - range: ${spell.range}`}</Typography>
          <Typography variant="caption">{spell.description}</Typography>
        </TabPanel>
      ))}
    </div>
  );
};

export default AddSpellsComponent;
