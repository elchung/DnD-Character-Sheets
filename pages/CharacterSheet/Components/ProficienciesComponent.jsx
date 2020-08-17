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
  const [temp, setTemp] = React.useState([{ id: 0, text: 'test' }]);
  const [tempRight, setTempRight] = React.useState([{ id: 0, text: 'test' }]);


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
          <Typography align="center" style={{ fontSize: 14, paddingTop: 10 }}>Armor</Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="center">
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
                  label={<Typography color='textSecondary' style={{fontSize:15}}>{proficiency}</Typography>}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Typography align="center" style={{fontSize: 14}}>Weapons</Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="center">
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
                  label={<Typography color='textSecondary' style={{fontSize:15}}>{proficiency}</Typography>}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center" style={{ marginBottom: -5 }}>
            <Grid item>
              <Typography variant="caption" style={{paddingLeft: 45}}>Languages</Typography>
            </Grid>
            <Grid>
              <Typography variant="caption" style={{paddingLeft: 125}}>Tools/Other</Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="space-evenly" alignItems="flex-start" style={{ maxHeight: 100 }}>
            <Grid item>
              <DnDListComponent
                items={temp}
                setItems={setTemp}
                style={{ marginRight: 0 }}
                minDisplay={3}
              />
            </Grid>
            <Grid item>
              <DnDListComponent
                items={tempRight}
                setItems={setTempRight}
                minDisplay={3}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProficienciesComponent;
