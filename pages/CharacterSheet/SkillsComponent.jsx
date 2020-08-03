import React from 'react';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { omit } from 'lodash/omit';
import { scoreToModifier } from '../Utils/abilityScoreUtils';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

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
      let newSkills = new Set([...skillProficiencies]);
      newSkills.delete(event.target.name);
      setSkillProficiencies(newSkills);
    } else {
      setSkillProficiencies(new Set([...skillProficiencies, event.target.name]));
    }
  };

  const getSkillVal = (skill) => {
    return (
      scoreToModifier(abilityScores[skills[skill]]) +
      (skillProficiencies.has(skill) ? proficiencyBonus : 0) +
      (expertise.has(skill) ? proficiencyBonus : 0)
    )
  }

  return ( // map thorugh skill keys
    <Card elevation={style.elevation} style={{ width: 250, paddingBottom: 10 }}>
      <Typography color="textSecondary" gutterBottom variant="caption">
        Skills
      </Typography>
      <List disablePadding dense>
        {Object.keys(skills).map((skill) => (
          <ListItem key={skill} role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                icon={<RadioButtonUncheckedIcon fontSize="small" />}
                checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                name="checkedH"
                size="small"
                onChange={handleProficiencyCheckboxClick}
              />
            </ListItemIcon>
            <TextField
              id={`${skill}-textfield`}
              value={getSkillVal(skill)}
              disabled
              inputProps={{
                style: {
                  fontSize: 15,
                  width: 25,
                  height: 0,
                  textAlign: 'center',
                  marginLeft: -20,
                },
              }}
            />
            <ListItemText id={`${skill}-text`} primary={skill} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default SkillsComponent;

// props = {
//   "abilities": {
//     strength: #,
//     dexterity: #,
//     constitution: #,
//     intelligence: #,
//     wisdom: #,
//     charisma: #,
//   }
//   "proficiency" = #
// }
