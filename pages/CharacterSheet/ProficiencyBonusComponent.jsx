import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import { useStore } from "../Context/store"

const ProficiencyBonusComponent = ({
  style,
}) => {
  const [displayedProficiency, setDisplayedProficiency] = React.useState(proficiencyBonus);

  return (
    const {state, dispatch} = useStore();

    <Card elevation={style.elevation} style={style.proficiencyComponent}>
      <CardActions>
        <TextField
          id="proficiency-bonus-textfield"
          value={displayedProficiency}
          onChange={(event) => setDisplayedProficiency(event.target.value)}
          onBlur={() => setProficiencyBonus(displayedProficiency)}
          variant="outlined"
          inputProps={{
            style: {
              fontSize: 20,
              width: 20,
              height: 3,
              textAlign: 'center',
              marginLeft: 0,
              marginRight: 0,
            },
          }}
        />
        <Typography align="center" color="textSecondary">Proficiency Bonus</Typography>
      </CardActions>
    </Card>
  );
};

ProficiencyBonusComponent.propTypes = {
  style: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ProficiencyBonusComponent;
