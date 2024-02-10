import { FC, useState } from "react";
import { createPortal } from "react-dom";
import { useCards } from "../../hooks/useCards";
import type { Card as TCard } from "../../types/gameTypes";
import Card from "../UI/Card";
import CongratsAnimation from "../CongratsAnimation";
import { useGameImages } from "../../hooks/useGameImages";

type Props = {
  elementsQTY: number;
};

const Board: FC<Props> = ({ elementsQTY }: Props) => {
  const { sourceImages } = useGameImages(elementsQTY);
  const { cards, setCards } = useCards({ sourceImages, elementsQTY });
  const [clickCount, setClickCount] = useState<number>(0);
  const [activeCard, setActiveCard] = useState<TCard>();
  const [showCongrats, setShowCongrats] = useState<boolean>(false);

  const resetRound = () => {
    setClickCount(0);
    setActiveCard(undefined);
    cards.forEach((card) => {
      card.active = false;
    });
  };

  const activateCard = (index: string) => {
    const cardIndex = parseInt(index) - 1;
    const newCards = [...cards];
    newCards[cardIndex].active = true;
    setActiveCard(newCards[cardIndex]);
    setCards(newCards);
  };

  const removeCards = (ids: string[]) => {
    const newCards = [...cards];
    newCards.forEach((card) => {
      if (ids.some((id) => id === card.id)) {
        card.removed = true;
      }
    });
    setCards(newCards);
  };

  const evaluateCards = (index: string) => {
    const cardIndex = parseInt(index) - 1;
    const selectedCard = cards[cardIndex];

    if (!activeCard) {
      setActiveCard(selectedCard);
      return;
    }

    setTimeout(() => {
      if (activeCard.name === selectedCard.name) {
        setShowCongrats(false);
        removeCards([activeCard.id, selectedCard.id]);
      }
      resetRound();
    }, 1000);
  };

  const handleCardClick = (index: string) => () => {
    if (clickCount >= 2) return;
    activateCard(index);
    evaluateCards(index);
    setClickCount((prev) => prev + 1);
  };

  return (
    <>
      {showCongrats &&
        createPortal(<CongratsAnimation show={showCongrats} />, document.body)}
      <section className='board'>
        {cards.map(({ name, active, removed, imgSrc }, index) => {
          const cardID = index + 1 + "";
          return (
            <Card
              key={index}
              id={cardID}
              name={name}
              active={active}
              imgSrc={imgSrc}
              removed={removed}
              onCardClick={handleCardClick(cardID)}
            />
          );
        })}
      </section>
    </>
  );
};

export default Board;
