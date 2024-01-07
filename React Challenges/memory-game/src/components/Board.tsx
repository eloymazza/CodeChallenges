import { FC, useState } from "react";
import Card from "./Card";
import { getDefaultImages } from "../utils/defaultCards";
import { arrayShuffle } from "../utils/utils";

type Props = {
  elementsQTY: number;
  // setShowCongrats: (show: boolean) => void;
};

type TCard = {
  id: string;
  name: string;
  imgSrc: string;
  active: boolean;
  removed: boolean;
};

const Board: FC<Props> = ({
  elementsQTY
}: // , setShowCongrats
Props) => {
  const defaultImages = getDefaultImages(elementsQTY);
  const defaultCardsImages = defaultImages.concat(defaultImages);
  const randomizedCardImages = arrayShuffle(defaultCardsImages);

  const [cards, setCards] = useState<TCard[]>(
    Array.from({ length: elementsQTY * 2 }).map((_, index) => {
      const { name, imgSrc } = randomizedCardImages[index];
      return {
        id: (index + 1).toString(),
        name,
        imgSrc,
        active: false,
        removed: false
      };
    })
  );

  const [clickCount, setClickCount] = useState<number>(0);
  const [activeCard, setActiveCard] = useState<TCard>();

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
    // setShowCongrats(false);
  };

  const evaluateCards = (index: string) => {
    const cardIndex = parseInt(index) - 1;
    const selectedCard = cards[cardIndex];

    if (!activeCard) {
      setActiveCard(selectedCard);
      return;
    }

    if (activeCard.name === selectedCard.name) {
      // setShowCongrats(true);
      setTimeout(() => {
        removeCards([activeCard.id, selectedCard.id]);
        resetRound();
      }, 1000);
    } else {
      setTimeout(() => {
        resetRound();
      }, 1000);
    }
  };

  const handleCardClick = (index: string) => () => {
    if (clickCount >= 2) return;
    activateCard(index);
    evaluateCards(index);
    setClickCount((prev) => prev + 1);
  };

  return (
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
  );
};

export default Board;
