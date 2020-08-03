import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { scoreToModifier } from '../Utils/abilityScoreUtils';
import { omit } from 'lodash/omit'

export const SkillsComponent = ({
  abilityScores,
  proficiencyBonus,
  skillProficiencies,
  setSkillProficiencies,
  style
}) => {
  const skills = {
    "Acrobatics (Dex)": "dexterity",
    "Animal Handling (Wis)": "wisdom",
    "Arcana (Int)": "intelligence",
    "Athletics (Str)": "strength",
    "Deception (Cha)": "charisma",
    "History (Int)": "intelligence",
    "Insight (Wis)": "wisdom",
    "Intimidation (Cha)": "charisma",
    "Investigation (Int)": "intelligence",
    "Medicine (Wis)": "wisdom",
    "Nature (Int)": "intelligence",
    "Perception (Wis)": "wisdom",
    "Performance (Cha)": "charisma",
    "Persuasion (Cha)": "charisma",
    "Religion (Cha)": "charisma",
    "Sleight of Hand (Dex)": "dexterity",
    "Stealth (Dex)": "dexterity",
    "Survival (Wis)": "wisdom"
  }

  const handleProficiencyCheckboxClick = event => {
    //setSkillProficiencies({...skillProficiencies, + or minus})
    if (skillProficiencies[event.target.name]) {
      setSkillProficiencies(omit(skillProficiencies, event.target.name));
    } else {
      setSkillProficiencies({ event.target.name, ...skillProficiencies, });
    }

  }

  const skill = 'test';
  const expertise = {};
  //ad mapping for all skills
  //add sorting for by ability or alphabetically

  return ( //map thorugh skill keys
    <Card elevation={style.elevation}>
      <CardContent>
        <Checkbox
          id={`${skill}-checkbox`}
          checked={skillProficiencies[skill]}
          label="Prof"
          name={skill}
          onChange={handleProficiencyCheckboxClick}
        />
        <TextField
          id={`${skill}-textfield`}
          value={scoreToModifier(abilityScores[skills[skill]]) + (skillProficiencies[skill] ? proficiencyBonus : 0) + (expertise[skill] ? proficiencyBonus : 0)}
          disabled
          inputProps={{
            style: {
              fontSize: 15,
              width: 15,
              height: 0,
              textAlign: 'center'
            }
          }}
        />
        <Typography>
          {skill}
        </Typography>
      </CardContent>
    </Card>
)
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
