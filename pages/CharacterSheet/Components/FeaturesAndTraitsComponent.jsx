
import Paper from '@material-ui/core/Paper';
import React, { useCallback } from 'react';
import update from 'immutability-helper';
import DraggableCard from './Reusable/DraggableCard';
import Chip from '@material-ui/core/Chip';
import AddIcon from '@material-ui/icons/Add';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';

const FeaturesAndTraitsComponent = () => {
  const { featuresAndTraits, style } = useCharacterState();
  const { setFeaturesAndTraits } = useSetCharacterState();

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const dragCard = featuresAndTraits[dragIndex];
    setFeaturesAndTraits(
      update(featuresAndTraits, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      }),
    );
  }, [featuresAndTraits]);

  const updateFeaturesAndTraits = (value, index) => {
    console.log(value);
    console.log(index);
    setFeaturesAndTraits(featuresAndTraits.map((item, i) => i === index ? value : item));
  };

  const removeFeatureAndTrait = (index) => {
    //TODO remove from index and adjust index key for all subsequent items
  };

  const handleAddNew = () => {
    setFeaturesAndTraits([...featuresAndTraits, { id: featuresAndTraits.length, text: { title: '', body: '' } }]);
  };

  return (
    <Paper elevation={style.elevation} style={style.FeaturesAndTraitsComponent}>
      {featuresAndTraits.map((item, index) => (
        <DraggableCard
          id={item.id}
          index={index}
          key={item.id}
          moveCard={moveCard}
          removeFeatureAndTrait={removeFeatureAndTrait}
          text={item.text}
          updateFeaturesAndTraits={updateFeaturesAndTraits}
        />
      ))}
      <Chip
        label={<AddIcon color="action" fontSize="small" style={{ marginLeft: -5 }} />}
        onClick={handleAddNew}
        size="small"
        style={{
          paddingTop: 3, marginTop: -7, width: 27, marginRight: -10
        }}
      />
    </Paper>
  );
};

export default FeaturesAndTraitsComponent;

// see https://react-dnd.github.io/react-dnd/examples/dustbin/single-target
