import Paper from '@material-ui/core/Paper';
import React from 'react';
import SpellLevelListComponent from './Reusable/SpellLevelListComponent'

const SpellsComponent = () => {
  return (
    <Paper elevation={style.elevation} style={style.spellsAccordion}>
      <SpellsHeader />  // spell save dc, to hit bonus, num spells can be prepared
      {Array(9).fill().map((_, level) => (
        <>
          <SpellLevelHeader />
          <SpellLevelListComponent
            spellsAtLevel={spells.level}
            level={level}
          />
        </>
      ))}
    </Paper>
  );
};

export default SpellsComponent;
