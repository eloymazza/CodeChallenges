import React from 'react';
import { VscFile } from 'react-icons/vsc';
import RenamableElement from '../HOC/RenamableElement';
import Icon from '../UI/Icon';

type Props = {
  id: string;
  name: string;
};

const File: React.FC<Props> = ({ name }) => {
  return (
    <>
      <Icon>
        <VscFile />
      </Icon>
      <RenamableElement>
        <span>{name}</span>
      </RenamableElement>
    </>
  );
};

export default File;
