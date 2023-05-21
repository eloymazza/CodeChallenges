import React, { useState } from 'react';
import { IFolder, TFileSystemItem } from '../types/types';
import File from './File';
import { VscFolderOpened, VscFolder } from 'react-icons/vsc';

type Props = IFolder & {
  handleRemoveFolder: (id: string) => void;
};

const Folder: React.FC<Props> = ({
  name,
  id,
  handleRemoveFolder,
  isRoot = false,
  subItems,
}) => {
  const [items, setItems] = useState<TFileSystemItem[]>(subItems);
  const [expanded, setIsExpanded] = useState(true);

  const handleAddFolder = () => {
    setItems([
      ...items,
      {
        id: crypto.randomUUID(),
        name: 'New Folder',
        subItems: [],
      },
    ]);
  };

  const handleAddFile = () => {
    setItems([
      ...items,
      {
        id: crypto.randomUUID(),
        name: 'New File',
        content: 'Empty',
      },
    ]);
  };

  const handleRemoveItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleExpandFolder = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleExpandFolder} type='button'>
        {expanded ? <VscFolderOpened /> : <VscFolder />}
      </button>
      <span>{name}</span>
      <button type='button' onClick={handleAddFolder}>
        Add Folder
      </button>
      <button type='button' onClick={handleAddFile}>
        Add File
      </button>
      {!isRoot && (
        <button onClick={() => handleRemoveFolder(id)} type='button'>
          Remove
        </button>
      )}
      <ul
        style={{ display: expanded ? 'block' : 'none', listStyleType: 'none' }}
      >
        {items.map((item) => (
          <li key={item.id}>
            {'subItems' in item ? (
              <Folder
                {...item}
                subItems={item.subItems}
                handleRemoveFolder={handleRemoveItem}
              />
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
