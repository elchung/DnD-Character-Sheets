import Paper from '@material-ui/core/Paper';
import React from 'react';
import SpellLevelListComponent from './Reusable/SpellLevelListComponent';
import SpellsHeaderComponent from './SpellsHeaderComponent';
import SpellLevelHeaderComponent from './Reusable/SpellLevelHeaderComponent';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';

const SpellsComponent = () => {
  const { spells, style } = useCharacterState();
  const { } = useSetCharacterState();

  return (
    <Paper elevation={style.elevation} style={{ width: '100%', maxHeight: 740 }}>
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
