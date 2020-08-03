import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { scoreToModifier } from '../Utils/abilityScoreUtils';

export const BaseAbilityScoreComponent = ({
  ability, abilityScore, setAbilityScore, scoreOnTop,
}) => {
  const [displayedAbilityScore, setDisplayedAbilityScore] = React.useState(abilityScore);
  const mainText = scoreOnTop ? displayedAbilityScore : scoreToModifier(abilityScore);
  const subText = scoreOnTop ? scoreToModifier(abilityScore) : displayedAbilityScore;

  const handleChange = (event) => {
    const numberInput = event.target.value.replace(/[^0-9]/g, '');

    setDisplayedAbilityScore(numberInput);
  };

  const handleBlur = () => {
    setAbilityScore(displayedAbilityScore);
  };

  return (
    <Card elevation={5} variant="outlined" style={{ width: 100, height: 115 }}>
      <CardContent style={{ paddingTop: 3 }}>
        <Typography align="center" noWrap color="textSecondary" gutterBottom variant="caption">
          {`${ability}`}
        </Typography>
        <div>
          <TextField
            id={`${ability}-ability-maintext`}
            value={mainText}
            onChange={handleChange}
            disabled={!scoreOnTop}
            variant="outlined"
            inputProps={{
              style: {
                fontSize: 30, width: 30, height: 20, textAlign: 'center',
              },
            }}
          />
        </div>
        <Box p={2} position="relative" bottom={30} left={25} zIndex="tooltip">
          <TextField
            id={`${ability}-ability-subtext`}
            value={subText}
            onChange={handleChange}
            disabled={scoreOnTop}
            variant="outlined"
            inputProps={{
              style: {
                fontSize: 15, width: 15, height: 0, textAlign: 'center', marginLeft: -5, marginRight: -5, background: 'white',
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default BaseAbilityScoreComponent;
