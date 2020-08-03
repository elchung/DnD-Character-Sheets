import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import BaseAbilityScoreComponent from './BaseAbilityScoreComponent';

export const AbilityScoreComponent = ({
  scoreOnTop,
  setScoreOnTop,
  abilityScores,
  setAbilityScores,
  style,
}) => (
  <Card elevation={style.elevation} style={{ width: 125, paddingBottom: 10 }}>
    <Grid container spacing={1} direction="column" justify="center" alignItems="center" wrap="nowrap">
      <Grid item>
        <FormControlLabel
          control={(
            <Switch
              size="small"
              checked={!scoreOnTop}
              onChange={() => setScoreOnTop((state) => !state)}
            />
            )}
        />
      </Grid>
      {Object.keys(abilityScores).map((ability) => (
        <Grid item>
          <BaseAbilityScoreComponent
            ability={ability}
            abilityScores={abilityScores}
            setAbilityScores={setAbilityScores}
            scoreOnTop={scoreOnTop}
          />
        </Grid>
      ))}
    </Grid>
  </Card>
);

export default AbilityScoreComponent;
