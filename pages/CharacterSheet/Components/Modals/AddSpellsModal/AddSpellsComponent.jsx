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
import { getFilteredSpells } from '../../../../Utils/addSpellUtils';

export const AddSpellsComponent = () => {
  const { spellList, classList } = useCharacterState();
  const [selectedSpells, setSelectedSpells] = useState(new Set());
  const [displayedSpells, setDisplayedSpells] = useState(Sort.sortAlphabetical(Object.keys(spellList), true));
  const [tabVal, setTabVal] = useState(0);
  const [sortBy, setSortBy] = useState('name');
  const [display, setDisplay] = useState(new Set());
  const [prioritizeFilterOut, setPrioritizeFilterOut] = useState(false);
  const [ascending, setAscending] = useState(true);
  const [filterBy, setFilterBy] = useState({
    level: [...Array(10).keys()].reduce((acc, item) => {
      acc[item] = true;
      return acc;
    }, {}),
    class: classList.reduce((acc, item) => {
      acc[item] = true;
      return acc;
    }, {}),
  });

  useEffect(() => {
    // filter, then sort
    const filteredSpells = getFilteredSpells(spellList, filterBy, prioritizeFilterOut);
    const newDisplayed = Sort.sortAlphabetical(Object.keys(filteredSpells), ascending);
    setDisplayedSpells(newDisplayed);
    setTabVal(0);
  }, [sortBy, filterBy]);

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
      level: spellList[spellName].level,
      handleCheckBoxChange: handleCheckboxChange,
      onChange: handleTabSelection,
      secondaryText: display.size ? getSecondaryText(displayedSpells[index]) : null,
      selected: tabVal,
      sortBy,
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
              ascending={ascending}
              setAscending={setAscending}
              displayOptions={displayOptions}
              display={display}
              setDisplay={setDisplay}
              prioritizeFilterOut={prioritizeFilterOut}
              setPrioritizeFilterOut={setPrioritizeFilterOut}
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
