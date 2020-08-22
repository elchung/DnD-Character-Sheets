import Paper from '@material-ui/core/Paper';
import React from 'react';
import SpellLevelListComponent from './Reusable/SpellLevelListComponent';
import SpellsHeaderComponent from './SpellsHeaderComponent';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';

const SpellsComponent = () => {
  const { spells, style } = useCharacterState();
  const { } = useSetCharacterState();

  return (
    <Paper elevation={style.elevation} style={style.spellsAccordion}>
      <SpellsHeaderComponent />
      {Array(9).fill().map((_, level) => (
        <>
          <SpellLevelHeaderComponent level={level} />
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
