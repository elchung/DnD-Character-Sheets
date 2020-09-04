import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { FixedSizeList } from 'react-window';
import { withStyles } from '@material-ui/core/styles';
import FilterMenuComponent from '../FilterMenuComponent';
import * as Sort from '../../../Utils/sortObjArrayUtils';
import VerticalTabCheckbox from '../Reusable/VerticalTabCheckbox';
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
  const [selectedSpells, setSelectedSpells] = React.useState({
    0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {},
  });
  const [displayedSpells, setDisplayedSpells] = React.useState(Sort.sortAlphabeticalAsc(Object.keys(spellList)));
  const [tabVal, setTabVal] = React.useState(0);
  const [selectedSpellName, setSelectedSpellName] = React.useState(displayedSpells[tabVal]);

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
      <FilterMenuComponent displayed={displayedSpells} setDisplayed={setDisplayedSpells} />
      <VirtualizedTabs
        orientation="vertical"
        variant="scrollable"
        value={tabVal}
        onChange={handleTabSelection}
        style={{ paddingTop: 0, paddingBottom: 0 }}
        height={500}
        itemSize={48}
        itemCount={displayedSpells.length}
        renderData={{ handleCheckboxChange, itemList: displayedSpells }}
        renderRow={
          VerticalTabCheckbox
        }
      />
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
