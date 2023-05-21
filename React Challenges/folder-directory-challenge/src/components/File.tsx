import React from 'react';
import { VscFile } from 'react-icons/vsc';

type Props = {
  id: string;
  name: string;
};

const File: React.FC<Props> = ({ name }) => {
  return (
    <>
      <VscFile />
      {name}
    </>
  );
};

export default File;
