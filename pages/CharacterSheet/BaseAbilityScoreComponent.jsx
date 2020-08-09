import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import PropTypes from 'prop-types';
import { scoreToModifier } from '../Utils/abilityScoreUtils';

const BaseAbilityScoreComponent = ({
  ability,
  abilityScores,
  setAbilityScores,
  scoreOnTop,
}) => {
  const [displayedAbilityScore, setDisplayedAbilityScore] = React.useState(abilityScores[ability]);
  const mainText = scoreOnTop ? displayedAbilityScore : scoreToModifier(abilityScores[ability]);
  const subText = scoreOnTop ? scoreToModifier(abilityScores[ability]) : displayedAbilityScore;

  const handleChange = (event) => {
    const numberInput = event.target.value.replace(/[^0-9]/g, '');

    setDisplayedAbilityScore(numberInput);
  };

  const handleBlur = () => {
    const newScores = { ...abilityScores };
    newScores[ability] = displayedAbilityScore;
    setAbilityScores(newScores);
  };

  return (
    <Card elevation={0} style={{ width: 100, height: 130 }}>
      <Card elevation={3} variant="outlined" style={{ height: 105 }}>
        <CardContent style={{ paddingTop: 3 }}>
          <Typography align="center" noWrap variant="caption" color="textSecondary">
            {`${ability.charAt(0).toUpperCase() + ability.slice(1)}`}
          </Typography>
          <InputBase
            id={`${ability}-ability-maintext`}
            value={mainText}
            onChange={handleChange}
            onBlur={handleBlur}
            inputProps={{
              style: {
                fontSize: 35,
                textAlign: 'center',
                color: scoreOnTop ? 'black' : 'gray',
                paddingTop: 7,
              },
              'aria-label': 'naked',
            }}
          />
        </CardContent>
      </Card>
      <Box
        p={2}
        position="relative"
        bottom={40}
        left={13}
        zIndex="tooltip"
        style={{ width: 5, height: 5 }}
      >
        <TextField
          id={`${ability}-ability-subtext`}
          value={subText}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={scoreOnTop}
          variant="outlined"
          inputProps={{
            style: {
              fontSize: 15,
              width: 15,
              height: 5,
              textAlign: 'center',
              background: 'white',
            },
          }}
        />
      </Box>
    </Card>
  );
};

BaseAbilityScoreComponent.propTypes = {
  ability: PropTypes.string.isRequired,
  abilityScores: PropTypes.objectOf(PropTypes.number).isRequired,
  setAbilityScores: PropTypes.func.isRequired,
  scoreOnTop: PropTypes.bool.isRequired,
};

export default BaseAbilityScoreComponent;
