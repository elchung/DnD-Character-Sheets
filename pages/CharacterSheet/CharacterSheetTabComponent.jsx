
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { CharacterContextProvider } from '../Context/CharacterContext';
import CharacterSheetComponent from './CharacterSheetComponent';
import SpellsComponent from './Components/SpellsComponent';
import { TabPanel } from './TabPanel';

const CharacterSheetTabComponent = () => {
  const [tabVal, setTabVal] = useState(1);
  const handleChange = (event, newValue) => {
    setTabVal(newValue);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <CharacterContextProvider>
        <Tabs
          value={tabVal}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Main" />
          <Tab label="Spells" />
        </Tabs>
        <TabPanel value={tabVal} index={0}>
          <CharacterSheetComponent />
        </TabPanel>
        <TabPanel value={tabVal} index={1}>
          <SpellsComponent />
        </TabPanel>
      </CharacterContextProvider>
    </DndProvider>
  );
};

export default CharacterSheetTabComponent;
