import React, { useState } from 'react';
import Paper from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';

const SpellLevelHeaderComponent = ({ level }) => {
  const { spellSlots, usedSpellSlots } = useCharacterState();
  const { setSpellSlots, setUsedSpellSlots } = useSetCharacterState();
  const [displayedSpellSlots, setDisplayedSpellSlots] = useState(spellSlots[level]);
  const [displayedUsedSpellSlots, setDisplayedUsedSpellSlots] = useState(usedSpellSlots[level]);
  // [level][slots][used]

  // TODO FILTER NUMBERS ONLY
  const handleSpellSlotBlur = (event) => {
    setSpellSlots({
      ...spellSlots,
      [level]: event.target.value,
    });
  };

  const handleUsedSpellSlotBlur = (event) => {
    setUsedSpellSlots({
      ...usedSpellSlots,
      [level]: event.target.value,
    });
  };

  return (
    <div style={{ width: '100%', height: 50 }}>
      <Grid container direction="row">
        <Grid item>
          <TextField
            inputProps={{
              style: {
                textAlign: 'center',
                fontSize: 25,
                height: 15,
                width: 30,
              },
            }}
            InputLabelProps={{
              classes: {
                root: { fontSize: 20 },
              },
            }}
            disabled
            value={level}
            variant="outlined"
            label="Level"
          />
        </Grid>
        <Grid item>
          <TextField
            inputProps={{
              style: {
                textAlign: 'center', fontSize: 30, height: 15, width: 55,
              },
            }}
            onBlur={handleSpellSlotBlur}
            onChange={(event) => setDisplayedSpellSlots(event.target.value)}
            value={displayedSpellSlots}
            variant="outlined"
            label="Spell Slots"
          />
        </Grid>
        <Grid item>
          <TextField
            inputProps={{
              style: {
                textAlign: 'center', fontSize: 30, height: 15, width: 30,
              },
            }}
            onBlur={handleUsedSpellSlotBlur}
            onChange={(event) => setDisplayedUsedSpellSlots(event.target.value)}
            value={displayedUsedSpellSlots}
            variant="outlined"
            label="Used"
          />
        </Grid>
      </Grid>
    </div>
  );
};

SpellLevelHeaderComponent.propTypes = {
  level: PropTypes.number.isRequired,
};

export default SpellLevelHeaderComponent;
