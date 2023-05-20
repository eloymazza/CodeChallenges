import React from 'react';

type Props = {
  id: string;
  name: string;
};

const File: React.FC<Props> = ({ name }) => {
  return <>{name}</>;
};

export default File;
