import { FC } from "react";

type Props = {
  id: string;
  name: string;
  active: boolean;
  removed: boolean;
  onCardClick: (id: string) => void;
  imgSrc: string;
};

const Card: FC<Props> = ({
  id,
  name,
  active,
  removed,
  onCardClick,
  imgSrc
}: Props) => {
  return (
    <div
      key={id}
      className='flip-card'
      style={{ visibility: removed ? "hidden" : "visible" }}
      onClick={() => onCardClick(id)}
    >
      <div className={`flip-card-inner ${active ? "flip" : ""}`}>
        <div className='flip-card-front' />
        <div className='flip-card-back'>
          <img src={imgSrc} alt={name} width={"100%"} height={"100%"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
