import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FilterMenuFilterBySubmenuComponent from './FilterMenuFilterBySubmenuComponent';
import Capitalize from '../../../../Utils/stringUtils';
import {
  useCharacterState,
} from '../../../../Context/CharacterContext';

export const AddCustomSpellComponent = () => {
  const { spellList, classList } = useCharacterState();
  const [selectedClasses, setSelectedClasses] = useState(new Set());
  const [isRitual, setIsRitual] = useState(false);
  const [school, setSchool] = useState('');
  const [level, setLevel] = useState('');
  const [components, setComponents] = useState(new Set());
  const [material, setMaterial] = useState('');

  const levels = ['cantrip', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const schools = spellList.reduce((acc, spell) => {
    acc.add(spell.school);
    return acc;
  }, new Set());

  const handleClassChange = (event) => {
    if (event.target.checked) {
      setSelectedClasses(new Set([...selectedClasses, event.target.name]));
    } else {
      const newClasses = new Set([...selectedClasses]);
      newClasses.delete(event.target.name);
      setSelectedClasses(newClasses);
    }
  };

  const handleSchoolChange = (event) => {
    setSchool(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleComponentChange = (event) => {
    if (event.target.checked) {
      setComponents(new Set([...components, event.target.name]));
    } else {
      const newComponents = new Set([...components]);
      newComponents.delete(event.target.name);
      setComponents(newComponents);
    }
  };

  return (
    <Grid container direction="row">
      <Grid item>
        <TextField label="Name" variant="outlined" />
      </Grid>
      <Grid item>
        <TextField label="Casting Time" variant="outlined" />
      </Grid>
      <Grid item>
        <TextField label="Range" variant="outlined" />
      </Grid>
      <Grid item>
        <TextField label="Duration" variant="outlined" />
      </Grid>
      <FilterMenuFilterBySubmenuComponent // for selecting class
        options={classList}
        selected={selectedClasses}
        handleOptionsClick={handleClassChange}
        key="class"
      />
      <Grid item>
        <TextField // need to make wider?
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={5}
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <FormControlLabel
          control={(
            <Checkbox
              checked={isRitual}
              onChange={(e) => setIsRitual(e.target.checked)}
              name="Ritual"
              color="primary"
            />
          )}
          label="Ritual"
        />
      </Grid>
      <Grid item>
        <FormControl>
          <InputLabel id="input-label-school">School</InputLabel>
          <Select
            labelId="school-select-label"
            id="School-select"
            value={school}
            onChange={handleSchoolChange}
          >
            {schools.map((schoolName) => (
              <MenuItem value={schoolName}>{Capitalize(schoolName)}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl>
          <InputLabel id="input-label-school">Spell Level</InputLabel>
          <Select
            labelId="level-select-label"
            id="Level-select"
            value={level}
            onChange={handleLevelChange}
          >
            {schools.map((levelNum) => (
              <MenuItem value={levelNum}>{levelNum}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl component="fieldset">
          <FormLabel component="legend">Assign responsibility</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={components.has('somatic')} onChange={handleComponentChange} name="somatic" />}
              label="Somatic"
            />
            <FormControlLabel
              control={<Checkbox checked={components.has('verbal')} onChange={handleComponentChange} name="verbal" />}
              label="Verbal"
            />
            <FormControlLabel
              control={<Checkbox checked={components.has('material')} onChange={handleComponentChange} name="material" />}
              label="Material"
            />
            <TextField label="Material" disabled={!components.has('material')} variant="outlined" />
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default AddCustomSpellComponent;
