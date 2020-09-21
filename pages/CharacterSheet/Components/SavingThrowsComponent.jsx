import Card from '@material-ui/core/Card';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useCharacterState, useSetCharacterState } from '../../Context/CharacterContext';
import { scoreToModifier } from '../../Utils/abilityScoreUtils';

const theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
      color: 'gray',
      marginLeft: 12,
    },
    header1: {
      color: 'gray',
      marginTop: 10,
      marginBottom: 10,
    },
  },
});

const SkillsComponent = () => {
  const {
    savingThrowProficiencies,
    abilityScores,
    proficiencyBonus,
    style,
  } = useCharacterState();
  const { setSavingThrowProficiencies } = useSetCharacterState();

  const skills = {
    Strength: 'strength',
    Dexterity: 'dexterity',
    Constitution: 'constitution',
    Charisma: 'charisma',
    Intelligence: 'intelligence',
    Wisdom: 'wisdom',
  };

  const handleProficiencyCheckboxClick = (event) => {
    setSavingThrowProficiencies(savingThrowProficiencies, event.target.name);
  };

  const getSkillVal = (skill) => (
    scoreToModifier(abilityScores[skill])
    + (savingThrowProficiencies.has(skill) ? proficiencyBonus : 0)
  );

  return (
    <Card elevation={style.elevation} style={style.savingThrowComponent}>
      <Typography align="center" color="textSecondary" style={style.headerStyle}>Saving Throws</Typography>
      <ThemeProvider theme={theme}>
        <Typography variant="subtitle1">Prof.</Typography>
      </ThemeProvider>
      <List dense disablePadding>
        {Object.keys(skills).map((skill) => (
          <ListItem key={skill} style={style.savingThrowComponentListItem}>
            <Checkbox
              checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
              color="primary"
              edge="start"
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              onChange={handleProficiencyCheckboxClick}
            />
            <TextField
              disabled
              id={`${skill}-textfield`}
              inputProps={style.skillModifierInputProps}
              value={getSkillVal(skills[skill])}
            />
            <ListItemText
              id={`${skill}-text`}
              primary={skill}
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default SkillsComponent;
