import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FilterMenuComponent from '../FilterMenuComponent';
import * as Sort from '../../../Utils/sortObjArrayUtils';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../../Context/CharacterContext';

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

export const AddSpellsComponent = () => {
  const { useStyles, spellList } = useCharacterState();
  const [selectedSpells, setSelectedSpells] = useState({
    0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {},
  });
  const [displayedSpells, setDisplayedSpells] = useState(Sort.sortAlphabeticalAsc(Object.keys(spellList)));
  const [tabVal, setTabVal] = useState(0);
  const [selectedSpellName, setSelectedSpellName] = useState(displayedSpells[tabVal]);
  const [filterBy, setFilterBy] = useState({ level: '', class: '' });
  const [sortBy, setSortBy] = useState('name');
  const [display, setDisplay] = useState(new Set());

  const sortByOptions = ['name', 'level'];
  const displayOptions = [''];

  const handleTabSelection = (event, newValue) => {
    setTabVal(newValue);
    setSelectedSpellName(displayedSpells[newValue]);
  };

  const handleCheckboxChange = (event, val) => {
    console.log('', event);
    console.log('', val);
  };

  return (
    <div style={{ display: 'flex', flexGrow: 1, height: 570 }}>
      <FilterMenuComponent
        displayed={displayedSpells}
        setDisplayed={setDisplayedSpells}
        filterByOptions={Object.keys(filterBy)}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        sortByOptions={sortByOptions}
        sortBy={sortBy}
        setSortBy={setSortBy}
        displayOptions={displayOptions}
        display={display}
        setDisplay={setDisplay}
      />
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tabVal}
        onChange={handleTabSelection}
      >
        {displayedSpells.map((spell) => (
          <VerticalTab
            label={(
              <div>
                <Checkbox
                  onChange={handleCheckboxChange}
                  onClick={(event) => event.stopPropagation()}
                  onFocus={(event) => event.stopPropagation()}
                  color="primary"
                  InputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <Typography variant="caption">{spell}</Typography>
              </div>
            )}
            id={`vertical-tab-${displayedSpells[0]}`}
            key={`vertical-tab-${displayedSpells[0]}`}
            aria-controls={`vertical-tabpanel-${displayedSpells[0]}`}
          />
        ))}
      </Tabs>
      <div
        role="tabpanel"
        id="vertical-tabpanel-display"
        style={{ width: '80%' }}
      >
        <Box p={3}>
          <Typography variant="h6">{selectedSpellName}</Typography>
          <Typography variant="subtitle1">{`${spellList[selectedSpellName].casting_time} - range: ${spellList[selectedSpellName].range}`}</Typography>
          <Typography variant="body1">{spellList[selectedSpellName].description}</Typography>
        </Box>
      </div>
    </div>
  );
};

export default AddSpellsComponent;
