import React, { useState } from 'react';
import { IFolder, TFileSystemItem } from '../types/types';
import File from './File';
import RemovableITem from '../HOC/RemovableITem';

type Props = IFolder & {
  handleRemoveFolder: (id: string) => void;
};

const Folder: React.FC<Props> = ({ name, id, handleRemoveFolder }) => {
  const [subItems, setSubItems] = useState<TFileSystemItem[]>([]);

  const handleAddFolder = () => {
    setSubItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: 'New Folder',
        subItems: [],
      },
    ]);
  };

  const handleAddFile = () => {
    setSubItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: 'New File',
        content: 'Empty',
      },
    ]);
  };

  const handleRemoveItem = (id: string) => {
    setSubItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <span>{name}</span>
      <button type='button' onClick={handleAddFolder}>
        Add Folder
      </button>
      <button type='button' onClick={handleAddFile}>
        Add File
      </button>
      <button onClick={() => handleRemoveFolder(id)} type='button'>
        Remove
      </button>
      <ul>
        {subItems.map((item) => (
          <li key={item.id}>
            {'subItems' in item ? (
              <Folder {...item} handleRemoveFolder={handleRemoveItem} />
            ) : (
              <>
                <File {...item} />
                <button onClick={() => handleRemoveItem(item.id)} type='button'>
                  Remove
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Folder;
