import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Paper from '@material-ui/core/Paper';
import React, { useCallback } from 'react';
import update from 'immutability-helper';
import DraggableCard from './DraggableCard';
import {
  useCharacterState,
  useSetCharacterState,
} from '../Context/CharacterContext';

const FeaturesAndTraitsComponent = () => {
  const { skillsAndFeatures, style } = useCharacterState();
  const { setSkillsAndFeatures } = useSetCharacterState();

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const dragCard = skillsAndFeatures[dragIndex];
    setSkillsAndFeatures(
      update(skillsAndFeatures, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      }),
    );
  }, [skillsAndFeatures]);

  const renderCard = (item, index) => (
    <DraggableCard
      id={item.id}
      index={index}
      key={item.id}
      moveCard={moveCard}
      setText={setSkillsAndFeatures}
      text={item.text}
    />
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <Paper elevation={style.elevation} style={style.combatStatsComponent}>
        {skillsAndFeatures.map((item, i) => renderCard(item, i))}
      </Paper>
    </DndProvider>
  )
}

export default FeaturesAndTraitsComponent;
