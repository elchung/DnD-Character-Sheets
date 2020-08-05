import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';

const InspirationComponent = ({
  inspiration,
  setInspiration,
  style,
}) => {
  const [displayedInspiration, setDisplayedInspiration] = React.useState(inspiration);

  return (
    <Card elevation={style.elevation} style={style.inspirationComponent}>
      <CardActions>
        <TextField
          id="proficiency-bonus-textfield"
          value={displayedInspiration}
          onChange={(event) => setDisplayedInspiration(event.target.value)}
          onBlur={() => setInspiration(displayedInspiration)}
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
        <Typography align="center" color="textSecondary">Inspiration</Typography>
      </CardActions>
    </Card>
  );
};

InspirationComponent.propTypes = {
  inspiration: PropTypes.number.isRequired,
  setInspiration: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default InspirationComponent;
