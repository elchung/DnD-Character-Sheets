import Grid from '@material-ui/core/Grid';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import InputBase from '@material-ui/core/InputBase';
import Textfield from '@material-ui/core/TextField';
import {
  useCharacterState,
  useSetCharacterState,
} from '../Context/CharacterContext';
import React from 'react';

const ProficienciesComponent = ({
}) => {
  const {
    proficiencies, style,
  } = useCharacterState();
  const {
    setProficiencies,
  } = useSetCharacterState();
  const armorProficiencies = ['light', 'medium', 'heavy', 'shields']
  const weaponProficiencies = ['simple', 'martial', 'other:']

  const handleArmorProficiencyCheckboxClick = (event) => {

  };

  const handleWeaponProficiencyCheckboxClick = (event) => {

  };

  return (
    <Paper elevation={style.elevation} style={style.combatStatsComponent}>
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
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      key={`${proficiency}`}
                      checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                      color="primary"
                      icon={<RadioButtonUncheckedIcon fontSize="small" />}
                      onChange={handleArmorProficiencyCheckboxClick}
                      // checked={proficiencies.armor.has(prof)}
                    />
                  }
                  label={proficiency}
                />
              </Grid>
            ))
            }
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
                  control={
                    <Checkbox
                      key={`${proficiency}`}
                      checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                      color="primary"
                      icon={<RadioButtonUncheckedIcon fontSize="small" />}
                      onChange={handleWeaponProficiencyCheckboxClick}
                      checked={proficiencies.weapons.has(proficiency)}
                    />
                  }
                  label={proficiency}
                />
              </Grid>
            ))
            }
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="space-evenly" alignItems="center" style={{paddingBottom: 5}}>
            <Grid item>
              <Typography variant="caption">Languages</Typography>
            </Grid>
            <Grid>
              <Typography variant="caption">Tools/Other</Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="space-evenly" alignItems="center">
            <Grid item>
              <TableContainer style={{maxHeight: 200}}>
                <Table>
                  <TableBody>
                    {[...Array(8).keys()].map(index => (
                      <TableRow>
                        <TableCell style={style.tableCellStyle}>
                          <InputBase
                            defaultValue="testinput"
                            inputProps={style.tableCellInputStyle}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            {/* <Grid item>
              <Divider orientation="vertical" variant="fullWidth"/>
            </Grid> */}
            <Grid item>
              <TableContainer style={{maxHeight: 200}}>
                <Table>
                  <TableBody>
                    {[...Array(8).keys()].map(index => (
                      <TableRow>
                        <TableCell style={style.tableCellStyle}>
                          <Textfield
                            defaultValue="testinput"
                            inputProps={style.tableCellInputStyle}
                            variant="outlined"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProficienciesComponent;

//todo: update proficinecy table to look nicer (better grouped radio buttons),
//add button to add additional proficinecies
//allow weapon checkbox to be clickable
//save all proficincies in correct location
//show divider more clearly
//consider converting table to two lists with outlined textfields????