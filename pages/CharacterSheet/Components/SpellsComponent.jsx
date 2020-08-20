
import Paper from '@material-ui/core/Paper';
import React, { useCallback } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';

const SpellsComponent = () => {
  const { spells, preparedSpells,  style } = useCharacterState();
  const { setSpells, setPreparedSpells } = useSetCharacterState();

  const handlePreparedClick = (event) => {
    if (preparedSpells.has(event.target.name)) {
      const newPrepared = new Set([...preparedSpells]);
      newPrepared.delete(event.target.name);
      setPreparedSpells(newPrepared);
    } else {
      setPreparedSpells(new Set([...preparedSpells, event.target.name]));
    }
  };

  return (
    <Paper elevation={style.elevation} style={style.spellsAccordion}>
      {Array(9).fill().map((_, level) => (
        <>
          <SpellLevelHeader>
            //include header for
          </SpellLevelHeader>
          {spells[level]?.map((spell) => (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <FormControlLabel
                  aria-label="Acknowledge"
                  onClick={(event) => event.stopPropagation()}
                  onFocus={(event) => event.stopPropagation()}
                  control={
                    <Checkbox
                      checkedIcon={<RadioButtonCheckedIcon />}
                      edge="start"
                      size="small"
                      id={spell.name}
                      icon={<RadioButtonUncheckedIcon />}
                      checked={preparedSpells.has(spell.name)}
                      onChange={handlePreparedClick}
                    />}
                />
                <Typography>
                  {`${spell.name}${spell.ritual ? '(R)' : ''} - ${spell.casting_time} - ${spell.range}`}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {`Duration: ${spell.duration} - ${spell.components.raw} - ${spell.description}`}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))
          }
        </>
      ))}
    </Paper>
  );
};

export default SpellComponent;

// see https://react-dnd.github.io/react-dnd/examples/dustbin/single-target
const a = {
  casting_time: '1 action',
  classes: ['ranger', 'wizard',],
  components: {
    material: true,
    materials_needed: [
      'a tiny bell and a piece of fine silver wire',
    ],
    raw: 'V, S, M (a tiny bell and a piece of fine silver wire)',
    somatic: true,
    verbal: true,
  },
  description: "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.\n\nA mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.\n\nAn audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.",
  duration: '8 hours',
  level: '1',
  name: 'Alarm',
  range: '30 feet',
  ritual: true,
  school: 'abjuration',
  tags: ['ranger', 'wizard', 'level1',],
  type: '1st-level abjuration (ritual)',
},

