import React from 'react';
import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import BaseAbilityScoreComponent from './BaseAbilityScoreComponent';

export const AbilityScoreComponent = ({
  scoreOnTop,
  setScoreOnTop,
  abilityScores,
  setAbilityScores,
  style,
}) => (
  <Card elevation={style.elevation} style={{ width: 125, paddingBottom: 20 }}>
    <Grid container direction="column" justify="center" alignItems="flex-end" wrap="nowrap">
      <Grid item>
        <Switch
          size="small"
          checked={!scoreOnTop}
          onChange={() => setScoreOnTop((state) => !state)}
          color="primary"

        />
      </Grid>
      <Grid container spacing={3} direction="column" justify="center" alignItems="center" wrap="nowrap">
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
    </Grid>
  </Card>
);

AbilityScoreComponent.propTypes = {
  scoreOnTop: PropTypes.bool.isRequired,
  setScoreOnTop: PropTypes.func.isRequired,
  abilityScores: PropTypes.objectOf(PropTypes.object).isRequired,
  setAbilityScores: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AbilityScoreComponent;
