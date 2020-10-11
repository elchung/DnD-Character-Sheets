import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import FilterMenuComponent from '../../FilterMenuComponent';
import * as Sort from '../../../../Utils/sortObjArrayUtils';
import AddSpellsDescriptionComponent from './AddSpellsDescriptionComponent';
import {
  useCharacterState,
} from '../../../../Context/CharacterContext';
// eslint-disable-next-line import/no-named-as-default
import VirtualizedTabs from '../../Reusable/VirtualizedTabs';
import { getFilteredSpells } from '../../../../Utils/addSpellUtils';

export const AddSpellsComponent = ({selectedSpells, setSelectedSpells}) => {
  const { spellList, classList } = useCharacterState();
  const [displayedSpells, setDisplayedSpells] = useState(Sort.sortAlphabetical(Object.keys(spellList), true));
  const [tabVal, setTabVal] = useState(0);
  const [sortBy, setSortBy] = useState('name');
  const [display, setDisplay] = useState(new Set());
  const [prioritizeFilterOut, setPrioritizeFilterOut] = useState(false);
  const [ascending, setAscending] = useState(true);
  const levelOptions = ['cantrip', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const [filterBy, setFilterBy] = useState({
    level: {
      options: levelOptions,
      selected: new Set(levelOptions),
    },
    class: {
      options: classList,
      selected: new Set(classList),
    },
  });

  useEffect(() => {
    // filter, then sort
    const filteredSpells = getFilteredSpells(spellList, filterBy, prioritizeFilterOut);
    console.log(filteredSpells);
    const newDisplayed = Sort.sortAlphabetical(Object.keys(filteredSpells), ascending);
    setDisplayedSpells(newDisplayed);
    console.log(newDisplayed);
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
    const selectedName = displayedSpells[index];
    const selectedLevel = spellList[selectedName].level
    if (event.target.name === true) {
      setSelectedSpells({
        ...selectedSpells,
        [selectedLevel]: new Set([...selectedSpells[selectedLevel], selectedName]),
      })
    } else {
      const tempSelectedSpellsAtLevel = new Set([...selectedSpells[selectedLevel]]);
      tempSelectedSpellsAtLevel.delete(selectedName);
      setSelectedSpells({
        ...selectedSpells,
        [selectedLevel]: tempSelectedSpellsAtLevel,
      });
    }
  };

  const getNewTabData = () => (displayedSpells.map((spellName, index) => ({
    name: spellName,
    level: spellList[spellName].level,
    checked: selectedSpells[spellList[spellName].level].has(spellName),
    handleCheckBoxChange: handleCheckboxChange,
    onChange: handleTabSelection,
    secondaryText: display.size ? getSecondaryText(displayedSpells[index]) : null,
    selected: tabVal,
    sortBy,
  })));

  const [tabData, setTabData] = useState(getNewTabData());

  useEffect(() => {
    setTabData(getNewTabData());
  }, [displayedSpells, display, tabVal]);

  return (
    <Grid container direction="row">
      <Grid xs={4} item>
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
              height={620}
              itemData={tabData}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={8} style={{ border: '2px solid lightgray' }}>
        <AddSpellsDescriptionComponent
          spell={spellList[displayedSpells[tabVal]]}
        />
      </Grid>
    </Grid>
  );
};


AddSpellsComponent.propTypes = {
  selectedSpells: PropTypes.instanceOf(Set).isRequired,
  setSelectedSpells: PropTypes.func.isRequired,
};

export default AddSpellsComponent;
