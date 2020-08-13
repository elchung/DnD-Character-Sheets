import React from 'react'
import Textfield from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {
  useCharacterState,
  useSetCharacterState,
} from '../Context/CharacterContext';

const SkillsAndFeaturesComponent = () => {
  {
    const {
      skillsAndFeatures, style,
    } = useCharacterState();
    const {
      setSkillsAndFeatures,
    } = useSetCharacterState();
    
    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex]
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          }),
        )
      },
      [cards],
    )
    
    const renderCard = (card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      )
    }
    return (
      <>
        {cards.map((card, i) => renderCard(card, i))}
      </>
    )
    
    return (
      <DndProvider backend={HTML5Backend}>
        
      </DndProvider>
    )
  }
}
