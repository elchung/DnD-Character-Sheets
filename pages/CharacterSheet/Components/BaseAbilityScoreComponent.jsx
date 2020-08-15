import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputBase from '@material-ui/core/InputBase';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { scoreToModifier } from '../../Utils/abilityScoreUtils';

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
      <Card elevation={3} style={{ height: 105 }} variant="outlined">
        <CardContent style={{ paddingTop: 3 }}>
          <Typography align="center" color="textPrimary" noWrap variant="caption">
            {`${ability.charAt(0).toUpperCase() + ability.slice(1)}`}
          </Typography>
          <InputBase
            id={`${ability}-ability-maintext`}
            inputProps={{
              style: {
                fontSize: 35,
                textAlign: 'center',
                color: scoreOnTop ? 'black' : 'gray',
                paddingTop: 7,
              },
              'aria-label': 'naked',
            }}
            onBlur={handleBlur}
            onChange={handleChange}
            value={mainText}
          />
        </CardContent>
      </Card>
      <Box
        bottom={40}
        left={13}
        p={2}
        position="relative"
        style={{ width: 5, height: 5 }}
        zIndex="speed dial"
      >
        <TextField
          disabled={scoreOnTop}
          id={`${ability}-ability-subtext`}
          inputProps={{
            style: {
              fontSize: 15,
              width: 15,
              height: 5,
              textAlign: 'center',
              background: 'white',
            },
          }}
          onBlur={handleBlur}
          onChange={handleChange}
          value={subText}
          variant="outlined"
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
