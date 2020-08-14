import { useDrag, useDrop } from 'react-dnd';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ClearIcon from '@material-ui/icons/Clear';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputBase from '@material-ui/core/InputBase';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

const DraggableCard = ({
  id, text, index, moveCard, updateFeaturesAndTraits, removeFeatureAndTrait
}) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: 'card',
    hover(item, monitor) {
      if (!ref.current) { return; }
      const startingIndex = item.index;
      const hoverIndex = index;
      if (startingIndex === hoverIndex) { return; } // Don't replace items with themselves
      const hoverBoundingRect = ref.current?.getBoundingClientRect(); // Determine rectangle on screen
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2; // Get vertical middle
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
    <Accordion ref={ref} style={{ opacity, marginRight: 10, marginLeft: 10 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        style={{ paddingTop: 0, paddingBottom: 0 }}
      >
        <InputBase
          inputProps={{ 'aria-label': 'naked' }}
          onChange={(event) => updateFeaturesAndTraits({ ...text, title: event.target.value }, index)}
          onClick={(event) => event.stopPropagation()}
          onFocus={(event) => event.stopPropagation()}
          value={text.title}
        />
      </AccordionSummary>
      <AccordionDetails>
        <InputBase
          inputProps={{ 'aria-label': 'naked' }}
          multiline
          onChange={(event) => updateFeaturesAndTraits({ ...text, body: event.target.value }, index)}
          onClick={(event) => event.stopPropagation()}
          onFocus={(event) => event.stopPropagation()}
          rowsMax={5}
          value={text.body}
        />
        <Chip
          label={<ClearIcon color="action" fontSize="small" style={{ marginLeft: -5 }} />}
          onClick={() => removeFeatureAndTrait(index)}
          size="small"
          style={{
            paddingTop: 3, marginTop: -7, width: 27, marginRight: -10
          }}
        />
      </AccordionDetails>
    </Accordion>
  );
};

DraggableCard.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  moveCard: PropTypes.func.isRequired,
  updateFeaturesAndTraits: PropTypes.func,
};

export default DraggableCard;
