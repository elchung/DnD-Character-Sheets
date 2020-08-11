import AbilityScoreComponent from '../AbilityScoresComponent';
import Grid from '@material-ui/core/Grid';
import { useCharacterState, useSetCharacterState } from '../../Context/CharacterContext';
import React from 'react';
import SavingThrowsComponent from '../SavingThrowsComponent';
import SingleLineDisplayComponent from '../SingleLineDisplayComponent';
import SkillsComponent from '../SkillsComponent';

const LeftColumnComponent = () => {
  const characterState = useCharacterState();
  const setCharacterState = useSetCharacterState();

  return (
    <Grid item>
      <Grid container spacing={2}>
        <Grid item>
          <AbilityScoreComponent />
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <SingleLineDisplayComponent
                setValue={setCharacterState.setInspiration}
                text="Inspiration"
                value={characterState.inspiration}
              />
            </Grid>
            <Grid item>
              <SingleLineDisplayComponent
                setValue={setCharacterState.setProficiencyBonus}
                text="Proficiency Bonus"
                value={characterState.proficiencyBonus}
              />
            </Grid>
            <Grid item>
              <SavingThrowsComponent />
            </Grid>
            <Grid item>
              <SkillsComponent />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LeftColumnComponent;
