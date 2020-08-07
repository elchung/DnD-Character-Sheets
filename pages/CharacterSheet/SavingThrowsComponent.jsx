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
import { useStore } from '../Context/CharacterContext';

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

const SkillsComponent = ({
  abilityScores,
  proficiencyBonus,
  savingThrowProficiencies,
  setSavingThrowProficiencies,
  style,
}) => {
  const skills = {
    Strength: 'strength',
    Dexterity: 'dexterity',
    Constitution: 'constitution',
    Charisma: 'charisma',
    Intelligence: 'intelligence',
    Wisdom: 'wisdom',
  };

  const handleProficiencyCheckboxClick = (event) => {
    if (savingThrowProficiencies.has(event.target.name)) {
      const newSkills = new Set([...savingThrowProficiencies]);
      newSkills.delete(event.target.name);
      setSavingThrowProficiencies(newSkills);
    } else {
      setSavingThrowProficiencies(new Set([...savingThrowProficiencies, event.target.name]));
    }
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
      <List disablePadding dense>
        {Object.keys(skills).map((skill) => (
          <ListItem key={skill} style={style.savingThrowComponentListItem}>
            <Checkbox
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
              onChange={handleProficiencyCheckboxClick}
              color="primary"
              edge="start"
            />
            <TextField
              id={`${skill}-textfield`}
              value={getSkillVal(skills[skill])}
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
  savingThrowProficiencies: PropTypes.instanceOf(Set).isRequired,
  setSavingThrowProficiencies: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SkillsComponent;
