import React from 'react';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { scoreToModifier } from '../Utils/abilityScoreUtils';

const theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
      color: "gray",
      marginLeft: 12,
    },
  },
});

export const SkillsComponent = ({
  abilityScores,
  proficiencyBonus,
  skillProficiencies,
  setSkillProficiencies,
  expertise,
  setExpertise,
  style,
}) => {
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
      <Typography align="center" color="textSecondary">Skills</Typography>
      <ThemeProvider theme={theme}>
        <Typography variant="subtitle1">Prof.  Exp.</Typography>
      </ThemeProvider>
      <List disablePadding dense>
        {Object.keys(skills).map((skill) => (
          <ListItem key={skill} style={style.skillComponentListItem}>
            <Checkbox
              icon={<RadioButtonUncheckedIcon fontSize="medium" />}
              checkedIcon={<RadioButtonCheckedIcon fontSize="medium" />}
              onChange={handleProficiencyCheckboxClick}
              color="primary"
              edge="start"
            />
            <Checkbox
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
              onChange={handleExpertiseCheckboxClick}
              color="primary"
              edge="start"
            />
            <TextField
              id={`${skill}-textfield`}
              value={getSkillVal(skill)}
              disabled
              inputProps={{
                style: {
                  fontSize: 15,
                  width: 25,
                  height: 3,
                  textAlign: 'center',
                  marginLeft: -5,
                  marginRight: 0,
                },
              }}
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

SkillsComponent.propTypes = {
  abilityScores: PropTypes.objectOf(PropTypes.object).isRequired,
  proficiencyBonus: PropTypes.number.isRequired,
  skillProficiencies: PropTypes.instanceOf(Set).isRequired,
  setSkillProficiencies: PropTypes.func.isRequired,
  expertise: PropTypes.instanceOf(Set).isRequired,
  setExpertise: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SkillsComponent;
