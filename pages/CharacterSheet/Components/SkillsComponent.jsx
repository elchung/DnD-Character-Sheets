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
  },
});

const skills = {
  'Acrobatics (Dex)': 'dexterity',
  'Animal Handling (Wis)': 'wisdom',
  'Arcana (Int)': 'intelligence',
  'Athletics (Str)': 'strength',
  'Deception (Cha)': 'charisma',
  'History (Int)': 'intelligence',
  'Insight (Wis)': 'wisdom',
  'Intimidation (Cha)': 'charisma',
  'Investigation (Int)': 'intelligence',
  'Medicine (Wis)': 'wisdom',
  'Nature (Int)': 'intelligence',
  'Perception (Wis)': 'wisdom',
  'Performance (Cha)': 'charisma',
  'Persuasion (Cha)': 'charisma',
  'Religion (Cha)': 'charisma',
  'Sleight of Hand (Dex)': 'dexterity',
  'Stealth (Dex)': 'dexterity',
  'Survival (Wis)': 'wisdom',
};

const SkillsComponent = () => {
  const {
    abilityScores,
    proficiencyBonus,
    skillProficiencies,
    expertise,
    style,
  } = useCharacterState();
  const {
    setSkillProficiencies,
    setExpertise,
  } = useSetCharacterState();

  const handleProficiencyCheckboxClick = (event) => {
    if (skillProficiencies.has(event.target.name)) {
      const newSkills = new Set([...skillProficiencies]);
      newSkills.delete(event.target.name);
      setSkillProficiencies(newSkills);
    } else {
      setSkillProficiencies(new Set([...skillProficiencies, event.target.name]));
    }
  };

  const handleExpertiseCheckboxClick = (event) => {
    if (expertise.has(event.target.name)) {
      const newExpertise = new Set([...expertise]);
      newExpertise.delete(event.target.name);
      setExpertise(newExpertise);
    } else {
      setExpertise(new Set([...expertise, event.target.name]));
    }
  };

  const getSkillVal = (skill) => (
    scoreToModifier(abilityScores[skills[skill]])
      + (skillProficiencies.has(skill) ? proficiencyBonus : 0)
      + (expertise.has(skill) ? proficiencyBonus : 0)
  );

  return (
    <Card elevation={style.elevation} style={style.skillComponent}>
      <Typography align="center" color="textSecondary" style={style.headerStyle}>Skills</Typography>
      <ThemeProvider theme={theme}>
        <Typography variant="subtitle1">Prof. Exp.</Typography>
      </ThemeProvider>
      <List dense disablePadding>
        {Object.keys(skills).map((skill) => (
          <ListItem key={skill} style={style.skillComponentListItem}>
            <Checkbox
              checkedIcon={<RadioButtonCheckedIcon />}
              color="primary"
              edge="start"
              icon={<RadioButtonUncheckedIcon />}
              onChange={handleProficiencyCheckboxClick}
            />
            <Checkbox
              checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
              color="primary"
              edge="start"
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              onChange={handleExpertiseCheckboxClick}
              style={{ marginLeft: -15 }}
            />
            <TextField
              disabled
              id={`${skill}-textfield`}
              inputProps={style.skillModifierInputProps}
              value={getSkillVal(skill)}
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
