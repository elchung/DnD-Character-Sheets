import React, {useState} from 'react';
import Paper from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../../Context/CharacterContext';

const SpellLevelHeaderComponent = ({ level }) => {
  const { style, spellSlots, usedSpellSlots } = useCharacterState();
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
    <Paper elevation={style.elevation} style={style.spellLevelheader}>
      {level === 0
        ? <Typography variant="h6">Cantrip</Typography>
        : (
          <div>
            <TextField
              inputProps={{ style: { textAlign: 'center', fontSize: 20 } }}
              disabled
              value={level}
              variant="outlined"
              label="Level"
            />
            <TextField
              inputProps={{ style: { textAlign: 'center', fontSize: 30, width: 25, height: 15 } }}
              style={{ width: '30%' }}
              onBlur={handleSpellSlotBlur}
              onChange={(event) => setDisplayedSpellSlots(event.target.value)}
              value={displayedSpellSlots}
              variant="outlined"
              label="Spell Slots"
            />
            <TextField
              inputProps={style.singleLineDisplayInputProps}
              style={{ width: '30%' }}
              onBlur={handleUsedSpellSlotBlur}
              onChange={(event) => setDisplayedUsedSpellSlots(event.target.value)}
              value={displayedUsedSpellSlots}
              variant="outlined"
              label="Used"
            />
          </div>
        )}
    </Paper>
  );
};

SpellLevelHeaderComponent.propTypes = {
  level: PropTypes.number.isRequired,
};

export default SpellLevelHeaderComponent;
