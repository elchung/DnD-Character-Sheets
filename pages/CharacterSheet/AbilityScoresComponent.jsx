import React from 'react';
import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import BaseAbilityScoreComponent from './BaseAbilityScoreComponent';
import {
  useCharacterState,
  useSetCharacterState,
} from '../Context/CharacterContext';

const AbilityScoreComponent = () => {
  const characterState = useCharacterState();
  const setCharacterState = useSetCharacterState();
  const { style } = useCharacterState();

  return (
    <Card elevation={style.elevation} style={style.abilityScoreComponent}>
      <Grid container direction="column" justify="center" alignItems="flex-end" wrap="nowrap">
        <Grid item>
          <Switch
            size="small"
            checked={!characterState.scoreOnTop}
            onChange={() => setCharacterState.setScoreOnTop((state) => !state)}
            color="primary"

          />
        </Grid>
        <Grid container spacing={3} direction="column" justify="center" alignItems="center" wrap="nowrap">
          {Object.keys(characterState.abilityScores).map((ability) => (
            <Grid item key={`${ability}-grid-item`}>
              <BaseAbilityScoreComponent
                ability={ability}
                abilityScores={characterState.abilityScores}
                setAbilityScores={setCharacterState.setAbilityScores}
                scoreOnTop={characterState.scoreOnTop}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

export default AbilityScoreComponent;
