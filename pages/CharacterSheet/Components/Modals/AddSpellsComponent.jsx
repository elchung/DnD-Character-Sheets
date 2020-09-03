import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { spells } from '../../../../Data/Spells';
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
  const { useStyles } = useCharacterState();
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
  const [selectedSpell, setSelectedSpell] = React.useState(displayedSpells[tabVal]);

  const handleTabSelection = (event, newValue) => {
    setTabVal(newValue);
    setSelectedSpell(displayedSpells[newValue]);
  };

  const handleCheckboxChange = (event, val) => {
    console.log('', event);
    console.log('', val);
  };
  // need to add sorting/filtering to spell list (by name, level, class)
  // need to add checkbox for selected spells
  return (
    <div style={{ display: 'flex', flexGrow: 1, height: 570 }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tabVal}
        onChange={handleTabSelection}
        style={{ paddingTop: 0, paddingBottom: 0 }}
      >
        {displayedSpells.map((spell) => (
          <VerticalTab
            label={(
              <div>
                <Checkbox
                  checked={selectedSpells[spell.level][spell.name]}
                  onChange={handleCheckboxChange}
                  onClick={(event) => event.stopPropagation()}
                  onFocus={(event) => event.stopPropagation()}
                  color="primary"
                  InputProps={{ 'aria-label': 'secondary checkbox' }}
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
      <div
        role="tabpanel"
        id="vertical-tabpanel-display"
        style={{ width: '80%' }}
      >
        <Box p={3}>
          <Typography variant="h6">{selectedSpell.name}</Typography>
          <Typography variant="subtitle1">{`${selectedSpell.casting_time} - range: ${selectedSpell.range}`}</Typography>
          <Typography variant="body1">{selectedSpell.description}</Typography>
        </Box>
      </div>
    </div>
  );
};

export default AddSpellsComponent;
