import React from 'react';
import Grid from '@material-ui/core/Grid';
import AbilityScoreComponent from '../AbilityScoresComponent';
import SkillsComponent from '../SkillsComponent';
import SavingThrowsComponent from '../SavingThrowsComponent';
import SingleLineDisplayComponent from '../SingleLineDisplayComponent';
import { useCharacterState, useSetCharacterState } from '../../Context/CharacterContext';

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
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <SingleLineDisplayComponent
                text="Inspiration"
                value={characterState.inspiration}
                setValue={setCharacterState.setInspiration}
              />
            </Grid>
            <Grid item>
              <SingleLineDisplayComponent
                text="Proficiency Bonus"
                value={characterState.proficiencyBonus}
                setValue={setCharacterState.setProficiencyBonus}
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
}


export default LeftColumnComponent;
