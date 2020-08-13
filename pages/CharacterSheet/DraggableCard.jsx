import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import InputBase from '@material-ui/core/InputBase';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

const DraggableCard = ({ id, text, index, moveCard, setText }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: 'card',
    hover(item, monitor) {
      if (!ref.current) { return; }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) { return; }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) { return; }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) { return; }

      moveCard(dragIndex, hoverIndex);
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
  // const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        <InputBase
          inputProps={{ 'aria-label': 'naked' }}
          onChange={(event) => setText({ ...text, header: event.target.value })}
          value={text.header}
        />
      </AccordionSummary>
      <AccordionDetails>
        <InputBase
          inputProps={{ 'aria-label': 'naked' }}
          multiline
          onChange={(event) => ({ ...text, body: event.target.value })}
          rowsMax={5}
          value={text.header}
        />
      </AccordionDetails>
    </Accordion>
  );
};

DraggableCard.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.shape({
    header: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  moveCard: PropTypes.func.isRequired,
  setText: PropTypes.func.isRequired,
};

export default DraggableCard;
