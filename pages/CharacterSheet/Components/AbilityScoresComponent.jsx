import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Switch from '@material-ui/core/Switch';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';
import BaseAbilityScoreComponent from './BaseAbilityScoreComponent';

const AbilityScoreComponent = () => {
  const characterState = useCharacterState();
  const setCharacterState = useSetCharacterState();
  const { style } = useCharacterState();

  return (
    <Card elevation={style.elevation} style={style.abilityScoreComponent}>
      <Grid alignItems="flex-end" container direction="column" justify="center" wrap="nowrap">
        <Grid item>
          <Switch
            checked={!characterState.scoreOnTop}
            color="primary"
            onChange={() => setCharacterState.setScoreOnTop((state) => !state)}
            size="small"

          />
        </Grid>
        <Grid alignItems="center" container direction="column" justify="center" spacing={3} wrap="nowrap">
          {Object.keys(characterState.abilityScores).map((ability) => (
            <Grid item key={`${ability}-grid-item`}>
              <BaseAbilityScoreComponent
                ability={ability}
                abilityScores={characterState.abilityScores}
                scoreOnTop={characterState.scoreOnTop}
                setAbilityScores={setCharacterState.setAbilityScores}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

export default AbilityScoreComponent;
