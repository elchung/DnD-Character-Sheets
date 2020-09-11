import React, { useState } from 'react';
import FilterMenuComponent from '../../FilterMenuComponent';
import * as Sort from '../../../../Utils/sortObjArrayUtils';
import AddSpellsDescriptionComponent from './AddSpellsDescriptionComponent';
import {
  useCharacterState,
} from '../../../../Context/CharacterContext';
import VirtualizedTabs from '../../Reusable/VirtualizedTabs';

export const AddSpellsComponent = () => {
  const { spellList, classList } = useCharacterState();
  const [selectedSpells, setSelectedSpells] = useState(new Set());
  const [displayedSpells, setDisplayedSpells] = useState(Sort.sortABCAsc(Object.keys(spellList)));
  const [tabVal, setTabVal] = useState(0);
  const [selectedSpellName, setSelectedSpellName] = useState(displayedSpells[tabVal]);
  const [sortBy, setSortBy] = useState('name');
  const [display, setDisplay] = useState(new Set());
  const [filterBy, setFilterBy] = useState({
    level: [...Array(10).keys()].reduce((acc, item) => {
      acc[item] = '';
      return acc;
    }, {}),
    class: classList.reduce((acc, item) => {
      acc[item] = '';
      return acc;
    }, {}),
  });

  const sortByOptions = ['name', 'level'];
  const displayOptions = ['Casting time', 'Duration', 'Level', 'Range', 'School', 'Ritual'];
  const displayOptionToKey = {
    'Casting time': 'casting_time',
    Duration: 'duration',
    Level: 'level',
    Range: 'range',
    School: 'school',
    Ritual: 'ritual',
  };

  const getSecondaryText = (spellName) => (
    displayOptions.filter((acc, option) => {
      if (display.has(option)) {
        acc += acc ? ' - ' : '';
        acc += spellList[spellName][displayOptionToKey[option]];
      }
      return acc;
    }, '')
  );

  const handleTabSelection = (event, newValue) => {
    setTabVal(newValue);
    setSelectedSpellName(displayedSpells[newValue]);
  };

  const handleCheckboxChange = (event, index) => {
    if (event.target.name === true) {
      setSelectedSpells(new Set([...selectedSpells, displayedSpells[index]]));
    } else {
      const temp = new Set([...selectedSpells]);
      temp.delete(displayedSpells[index]);
      setSelectedSpells(temp);
    }
  };

  const tabData = displayedSpells.map((spellName, index) => ({
    name: spellName,
    handleCheckBoxChange: handleCheckboxChange,
    onChange: handleTabSelection,
    item: displayedSpells[index],
    secondary: display.size,
    secondaryText: display.size ? getSecondaryText(displayedSpells[index]) : '',
  }));

  return (
    <div style={{ display: 'flex', flexGrow: 1, height: 570 }}>
      <FilterMenuComponent
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        sortByOptions={sortByOptions}
        sortBy={sortBy}
        setSortBy={setSortBy}
        displayOptions={displayOptions}
        display={display}
        setDisplay={setDisplay}
      />
      <VirtualizedTabs
        height={570}
        itemData={tabData}
      />
      <AddSpellsDescriptionComponent
        spell={spellList[selectedSpellName]}
      />
    </div>
  );
};

export default AddSpellsComponent;
