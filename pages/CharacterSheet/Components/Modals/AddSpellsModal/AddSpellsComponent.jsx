import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import FilterMenuComponent from '../../FilterMenuComponent';
import * as Sort from '../../../../Utils/sortObjArrayUtils';
import AddSpellsDescriptionComponent from './AddSpellsDescriptionComponent';
import {
  useCharacterState,
} from '../../../../Context/CharacterContext';
// eslint-disable-next-line import/no-named-as-default
import VirtualizedTabs from '../../Reusable/VirtualizedTabs';

export const AddSpellsComponent = () => {
  const { spellList, classList } = useCharacterState();
  const [selectedSpells, setSelectedSpells] = useState(new Set());
  const [displayedSpells, setDisplayedSpells] = useState(Sort.sortABCAsc(Object.keys(spellList)));
  const [tabVal, setTabVal] = useState(0);
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

  const handleTabSelection = (newValue) => {
    setTabVal(newValue);
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

  const [tabData, setTabData] = useState(displayedSpells.map((spellName, index) => ({
    name: spellName,
    handleCheckBoxChange: handleCheckboxChange,
    onChange: handleTabSelection,
    item: displayedSpells[index],
    secondary: display.size,
    secondaryText: display.size ? getSecondaryText(displayedSpells[index]) : '',
  })));

  useEffect(() => {
    setTabData(displayedSpells.map((spellName, index) => ({
      name: spellName,
      handleCheckBoxChange: handleCheckboxChange,
      onChange: handleTabSelection,
      item: displayedSpells[index],
      secondaryText: display.size ? getSecondaryText(displayedSpells[index]) : null,
      selected: tabVal,
    })));
  }, [displayedSpells, display, tabVal]);

  return (
    <Grid container direction="row" style={{ display: 'flex', flexGrow: 1, height: 570 }}>
      <Grid item xs={3}>
        <Grid container direction="column">
          <Grid item>
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
          </Grid>
          <Grid item>
            <VirtualizedTabs
              height={540}
              itemData={tabData}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9} style={{ border: '2px solid lightgray' }}>
        <AddSpellsDescriptionComponent
          spell={spellList[displayedSpells[tabVal]]}
        />
      </Grid>
    </Grid>
  );
};

export default AddSpellsComponent;
