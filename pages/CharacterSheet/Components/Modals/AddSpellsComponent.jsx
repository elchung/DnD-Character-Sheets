import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import { TabPanel } from '../../TabPanel';
import { spells } from '../../../../Data/Spells';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../../Context/CharacterContext';

export const AddSpellsComponent = () => {
  const [tabVal, setTabVal] = React.useState(1);
  const [selectedSpells, setSelectedSpells] = React.useState({}); // keys are 0-9
  const [displayedSpells, setDisplayedSpells] = React.useState(
    spells.sort((a, b) => (a.name < b.name ? -1 : 1)),
  );
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
    <div>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tabVal}
        onChange={handleTabSelection}
        aria-label="spell list"
      >
        {displayedSpells.map((spellName) => (
          <Tab
            label={(
              <Checkbox
                color="primary"
                checked={selectedSpells.has(spellName)} // TODO check this
                onClick={handleCheckboxChange}
              />
            )}
            id={`vertical-tab-${spellName}`}
            key={`vertical-tab-${spellName}`}
          />
        ))}
      </Tabs>
      {displayedSpells.map((spellName, index) => (
        <TabPanel value={tabVal} index={index}>
          <Typography>{}</Typography>
        </TabPanel>
      ))}
    </div>
  );
};

export default AddSpellsComponent;
