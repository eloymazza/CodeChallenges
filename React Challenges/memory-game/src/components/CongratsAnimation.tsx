import { FC } from "react";

type Props = {
  show: boolean;
};

const CongratsAnimation: FC<Props> = ({ show = false }: Props) => {
  return (
    <div className={`congrats ${show ? "animate-congrats" : ""}`}>
      <img
        src='../src/assets/amor.png'
        alt='flotaingHeart'
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default CongratsAnimation;
