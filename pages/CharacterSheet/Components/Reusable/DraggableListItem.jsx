import { useDrag, useDrop } from 'react-dnd';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import React, { useRef } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import { useCharacterState } from '../../../Context/CharacterContext';

const DraggableCard = ({
  id,
  text,
  key,
  index,
  moveCard,
  updateItem,
  removeItem,
}) => {
  const { style } = useCharacterState();
  const [displayText, setDisplayText] = React.useState(text);
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: 'card',
    hover(item, monitor) {
      if (!ref.current) { return; }
      const startingIndex = item.index;
      const hoverIndex = index;
      if (startingIndex === hoverIndex) { return; } // Don't replace items with themselves
      const hoverBoundingRect = ref.current?.getBoundingClientRect(); // get rectangle on screen
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2; // Get vert mid
      const clientOffset = monitor.getClientOffset(); // Determine mouse position
      const hoverClientY = clientOffset.y - hoverBoundingRect.top; // Get pixels to the top
      // Only perform the move when the mouse has crossed half of the items height
      if (startingIndex < hoverIndex && hoverClientY < hoverMiddleY) { return; }
      if (startingIndex > hoverIndex && hoverClientY > hoverMiddleY) { return; }

      moveCard(startingIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      // eslint-disable-next-line no-param-reassign
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: 'card', id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <ListItem
      ref={ref}
      key={key}
      style={{
        opacity, padding: 0, marginTop: -10, marginBottom: -10,
      }}
    >
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <TextField
            variant="outlined"
            onBlur={() => updateItem(displayText)}
            onChange={(event) => setDisplayText(event.target.value)}
            onClick={(e) => e.stopPropagation()}
            onFocus={(e) => e.stopPropagation()}
            value={displayText}
            inputProps={{
              style: {
                fontSize: 12, paddingTop: 5, paddingBottom: 5, width: 80,
              },
            }}
          />
        </Grid>
        <Grid item>
          <IconButton onClick={() => removeItem(index)}>
            <ClearIcon color="action" fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
  );
};

DraggableCard.propTypes = {
  id: PropTypes.number.isRequired,
  key: PropTypes.number.isRequired,
  text: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  moveCard: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default DraggableCard;
