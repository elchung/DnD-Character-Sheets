import { useDrag, useDrop } from 'react-dnd';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

const DraggableCard = ({
  id,
  text,
  key,
  index,
  moveCard,
  updateItems,
  removeItems,
  includeCheckbox,
  checkBoxChecked,
  checkBoxClicked,
}) => {
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
  const [displayText, setDisplayText] = React.useState(text);

  return (
    <Accordion
      ref={ref}
      key={key}
      style={{
        opacity, marginRight: 10, marginLeft: 10,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        style={{
          borderBottom: '1px solid rgba(0, 0, 0, .125)',
          borderTop: '1px solid rgba(0, 0, 0, .125)',
          height: 0,
        }}
      >
        {includeCheckbox && (
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={(
              <Checkbox
                checkedIcon={<RadioButtonCheckedIcon />}
                edge="start"
                size="small"
                id={`${id}-checkbox`}
                icon={<RadioButtonUncheckedIcon />}
                checked={checkBoxChecked}
                onChange={checkBoxClicked}
              />
            )}
          />
        )}
        <InputBase
          inputProps={{ 'aria-label': 'naked' }}
          onBlur={() => updateItems(displayText, index)}
          onChange={(e) => setDisplayText({ ...text, title: e.target.value })}
          onClick={(e) => e.stopPropagation()}
          onFocus={(e) => e.stopPropagation()}
          value={displayText.title}
        />
      </AccordionSummary>
      <AccordionDetails style={{ height: '5%', padding: 5 }}>
        <OutlinedInput
          inputProps={{
            style: {
              fontSize: 12,
              marginTop: -10,
              marginBottom: -10,
            },
          }}
          fullWidth
          multiline
          rowsMax={5}
          onBlur={() => updateItems(displayText, index)}
          onChange={(e) => setDisplayText({ ...text, body: e.target.value })}
          value={displayText.body}
        />
        <Box
          position="relative"
        >
          <IconButton onClick={() => removeItems(index)}>
            <HighlightOffRoundedIcon color="action" fontSize="small" />
          </IconButton>
        </Box>
      </AccordionDetails>
    </Accordion>
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
  updateItems: PropTypes.func.isRequired,
  removeItems: PropTypes.func.isRequired,
  includeCheckbox: PropTypes.bool,
  checkBoxChecked: PropTypes.bool,
  checkBoxClicked: PropTypes.func,
};

DraggableCard.defaultProps = {
  includeCheckbox: false,
  checkBoxChecked: false,
  checkBoxClicked: () => console.error('checkbox click when no function provided'),
};

export default DraggableCard;
