import { ReactNode, FC } from 'react';

type Props = {
  children: ReactNode;
};

const RemovableITem: FC<Props> = ({ children }) => {
  return (
    <div>
      <button type='button'>Remove</button>
      {children}
    </div>
  );
};

export default RemovableITem;
