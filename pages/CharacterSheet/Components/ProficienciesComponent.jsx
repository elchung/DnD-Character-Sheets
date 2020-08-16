import Grid from '@material-ui/core/Grid';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react';
import DnDListComponent from './Reusable/DnDListComponent';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';

const ProficienciesComponent = () => {
  const {
    proficiencies, style,
  } = useCharacterState();
  const {
    setProficiencies,
  } = useSetCharacterState();
  const armorProficiencies = ['light', 'medium', 'heavy', 'shields'];
  const weaponProficiencies = ['simple', 'martial', 'other:'];
  const temp = [1, 2, 3];
  const [tempRight, setTempRight] = React.useState([{ id: 0, text: '' }]);


  const handleArmorProficiencyCheckboxClick = (event) => {

  };

  const handleWeaponProficiencyCheckboxClick = (event) => {

  };

  return (
    <Paper elevation={style.elevation} style={style.proficienciesComponent}>
      <Grid container direction="column" justify="center">
        <Grid item>
          <Typography align="center" color="textSecondary" style={style.headerStyle}>Proficiencies</Typography>
        </Grid>
        <Grid item>
          <Typography align="center" variant="caption">Armor</Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="space-evenly">
            {armorProficiencies.map((proficiency) => (
              <Grid item key={`${proficiency}-grid`}>
                <FormControlLabel
                  control={(
                    <Checkbox
                      key={`${proficiency}-checkbox`}
                      checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                      color="primary"
                      icon={<RadioButtonUncheckedIcon fontSize="small" />}
                      onChange={handleArmorProficiencyCheckboxClick}
                      // checked={proficiencies.armor.has(prof)}
                    />
                  )}
                  label={proficiency}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Typography align="center" variant="caption">Weapons</Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="space-evenly">
            {weaponProficiencies.map((proficiency) => (
              <Grid item>
                <FormControlLabel
                  control={(
                    <Checkbox
                      key={`${proficiency}`}
                      checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                      color="primary"
                      icon={<RadioButtonUncheckedIcon fontSize="small" />}
                      onChange={handleWeaponProficiencyCheckboxClick}
                      checked={proficiencies.weapons.has(proficiency)}
                    />
                  )}
                  label={proficiency}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="space-evenly" alignItems="center" style={{ paddingBottom: 5 }}>
            <Grid item>
              <Typography variant="caption">Languages</Typography>
            </Grid>
            <Grid>
              <Typography variant="caption">Tools/Other</Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="space-evenly" alignItems="center">
            <Grid item>
              <DnDListComponent
                items={temp}
                setItems={setTempRight}
              />
            </Grid>
            {/* <Grid item>
              <DnDListComponent
                items={temp}
                setItems={setTemp}
              />
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProficienciesComponent;

// todo: update proficinecy table to look nicer (better grouped radio buttons),
// add button to add additional proficinecies
// allow weapon checkbox to be clickable
// save all proficincies in correct location
// show divider more clearly
// consider converting table to two lists with outlined textfields????
