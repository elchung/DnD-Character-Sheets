import React, { useCallback, useEffect } from 'react';
import update from 'immutability-helper';
import IconButton from '@material-ui/core/IconButton';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import DraggableListItem from './DraggableListItem';

const DnDListComponent = ({
  items, setItems, minDisplay, style,
}) => {
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const dragCard = items[dragIndex];
    setItems(
      update(items, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      }),
    );
  }, [items]);

  const updateItem = (value, index) => {
    setItems(items.map(((item, i) => (i === index ? { id: index, text: value } : item))));
  };

  const removeItem = (index) => {
    setItems(items
      .filter(({ id }) => index !== id)
      .map((item, i) => ({ text: item.text, id: i })));
  };

  const handleAddNew = () => {
    setItems([...items, { id: items.length, text: '' }]);
  };

  useEffect(() => {
    if (items.length < minDisplay) {
      handleAddNew();
    }
  }, [items]);

  return (
    <Box style={style}>
      <List>
        {items.map((item, index) => (
          <DraggableListItem
            id={item.id}
            index={index}
            key={item.id}
            moveCard={moveCard}
            removeItem={removeItem}
            text={item.text}
            updateItem={updateItem}
          />
        ))}
      </List>
      <Box display="flex" justifyContent="center" style={{ marginLeft: '-20%', marginTop: '-7%' }}>
        <IconButton onClick={handleAddNew}>
          <AddCircleRoundedIcon color="action" />
        </IconButton>
      </Box>
    </Box>
  );
};

DnDListComponent.propTypes = {
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
  style: PropTypes.object,
  minDisplay: PropTypes.number,
};

DnDListComponent.defaultProps = { style: {}, minDisplay: 0 };

export default DnDListComponent;
