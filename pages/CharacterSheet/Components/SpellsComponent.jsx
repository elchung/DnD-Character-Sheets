
import Paper from '@material-ui/core/Paper';
import React, { useCallback } from 'react';
import update from 'immutability-helper';
import Typography from '@material-ui/core/Typography';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';

const FeaturesAndTraitsComponent = () => {
  const { featuresAndTraits, style } = useCharacterState();
  const { setFeaturesAndTraits } = useSetCharacterState();



  return (
    <Paper elevation={style.elevation} style={style.FeaturesAndTraitsComponent}>

    </Paper>
  );
};

export default FeaturesAndTraitsComponent;

// see https://react-dnd.github.io/react-dnd/examples/dustbin/single-target
