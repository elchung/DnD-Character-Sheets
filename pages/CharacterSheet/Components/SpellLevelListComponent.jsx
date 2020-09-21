import React, { useCallback } from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import DraggableCard from './Reusable/DraggableCard';
import { flipSetItem } from '../../Utils/miscUtils';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';

const SpellLevelListComponent = ({ spellsAtLevel, level }) => {
  const { spells, preparedSpells, style } = useCharacterState();
  const { setSpells, setPreparedSpells } = useSetCharacterState();

  const handlePreparedClick = (event) => {
    setPreparedSpells(flipSetItem(preparedSpells, event.target.name));
  };

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const dragCard = spells[level][dragIndex];
    setSpells({
      ...spells,
      [level]: update(spells[level], {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      }),
    });
  }, [spells]);

  const removeSpell = (index) => {
    setSpells({
      ...spells,
      [level]: spells[level]
        .filter(({ id }) => index !== id)
        .map((item, i) => ({ text: item.text, i })),
    });
  };

  const updateSpell = (value, index) => {
    setSpells({
      ...spells,
      [level]: spells[level].map((item, i) => (i === index ? { id: index, text: value } : item)),
    });
  };

  return (
    <Paper elevation={style.elevation} style={style.spellsAccordion}>
      {spellsAtLevel.map((spell, index) => (
        <DraggableCard
          id={spell.name}
          index={index}
          key={spell.name}
          moveCard={moveCard}
          removeItems={removeSpell}
          updateItems={updateSpell}
          text={spell.text}
          includeCheckbox
          checkBoxChecked={preparedSpells.has(spell.name)}
          checkBoxClicked={handlePreparedClick}
        />
      ))}
    </Paper>
  );
};

SpellLevelListComponent.defaultProps = {
  spellsAtLevel: [],
};

SpellLevelListComponent.propTypes = {
  spellsAtLevel: PropTypes.array,
  level: PropTypes.number.isRequired,
};

export default SpellLevelListComponent;
