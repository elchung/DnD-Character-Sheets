import Grid from '@material-ui/core/Grid';
import React from 'react';
import AbilityScoreComponent from '../Components/AbilityScoresComponent';
import { useCharacterState, useSetCharacterState } from '../../Context/CharacterContext';
import SavingThrowsComponent from '../Components/SavingThrowsComponent';
import SingleLineDisplayComponent from '../Components/Reusable/SingleLineDisplayComponent';
import SkillsComponent from '../Components/SkillsComponent';

const LeftColumnComponent = () => {
  const characterState = useCharacterState();
  const setCharacterState = useSetCharacterState();

  return (
    <Grid item>
      <Grid container direction="column">
        <Grid item>
          <Grid container direction="row" spacing={2}>
            <Grid item>
              <AbilityScoreComponent orientation="column" />
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
      </Grid>
    </Grid>
  );
};

export default LeftColumnComponent;
