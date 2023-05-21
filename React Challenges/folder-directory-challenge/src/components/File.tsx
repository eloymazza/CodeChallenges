import React from 'react';
import { VscFile } from 'react-icons/vsc';
import RenamableElement from '../HOC/RenamableElement';

type Props = {
  id: string;
  name: string;
};

const File: React.FC<Props> = ({ name }) => {
  return (
    <>
      <span>
        <VscFile />
      </span>
      <RenamableElement>
        <span>{name}</span>
      </RenamableElement>
    </>
  );
};

export default File;
