
import Paper from '@material-ui/core/Paper';
import React, { useCallback } from 'react';
import update from 'immutability-helper';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import Typography from '@material-ui/core/Typography';
import DraggableCard from './Reusable/DraggableCard';
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
    // setFeaturesAndTraits(featuresAndTraits.map((item, i) => i === index ? { id: index, text: value } : item)
    const temp = [...featuresAndTraits];
    temp[index] = { id: index, text: value };
    setFeaturesAndTraits(temp);
  };

  const removeFeatureAndTrait = (index) => (
    setFeaturesAndTraits(featuresAndTraits
      .filter(({ id }) => index !== id)
      .map((item, i) => ({ text: item.text, id: i })))
  );

  const handleAddNew = () => {
    setFeaturesAndTraits([...featuresAndTraits, { id: featuresAndTraits.length, text: { title: '', body: '' } }]);
  };

  return (
    <Paper elevation={style.elevation} style={style.FeaturesAndTraitsComponent}>
      <Typography align="center" color="textSecondary" style={{ ...style.headerStyle, paddingBottom: 10 }}>Features/Traits</Typography>
      {featuresAndTraits.map((item, index) => (
        <DraggableCard
          id={item.id}
          index={index}
          key={item.id}
          moveCard={moveCard}
          removeItems={removeFeatureAndTrait}
          text={item.text}
          updateItems={updateFeaturesAndTraits}
        />
      ))}
      <Box display="flex" justifyContent="center">
        <IconButton onClick={handleAddNew}>
          <AddCircleRoundedIcon color="action" style={{ marginLeft: -5 }} />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default FeaturesAndTraitsComponent;

// see https://react-dnd.github.io/react-dnd/examples/dustbin/single-target
