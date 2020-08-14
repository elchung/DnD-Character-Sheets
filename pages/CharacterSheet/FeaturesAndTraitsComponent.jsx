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
  const { featuresAndTraits, style } = useCharacterState();
  const { setFeaturesAndTraits } = useSetCharacterState();

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const dragCard = featuresAndTraits[dragIndex];
    setSkillsAndFeatures(
      update(featuresAndTraits, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      }),
    );
  }, [featuresAndTraits]);

  const updateFeaturesAndTraits = (value, index) => {
    setFeaturesAndTraits(featuresAndTraits.map((item, i) => i === index ? value : item));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Paper elevation={style.elevation} style={style.combatStatsComponent}>
        {featuresAndTraits.map((item, index) => (
          <DraggableCard
            id={item.id}
            index={index}
            key={item.id}
            moveCard={moveCard}
            setFeaturesAndTraits={updateFeaturesAndTraits}
            text={item.text}
          />
        ))}
      </Paper>
    </DndProvider>
  )
}

export default FeaturesAndTraitsComponent;

// see https://react-dnd.github.io/react-dnd/examples/dustbin/single-target