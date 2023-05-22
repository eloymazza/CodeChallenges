import React, { useState } from 'react';
import { IFolder, TFileSystemItem } from '../types/types';
import File from './File';
import { VscFolderOpened, VscFolder } from 'react-icons/vsc';
import { FiFolderPlus, FiTrash } from 'react-icons/fi';
import { AiOutlineFileAdd } from 'react-icons/ai';
import RenamableItem from '../HOC/RenamableElement';
import Button from '../UI/Button';

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
      <div className='item-container'>
        <Button
          title={expanded ? 'Collapse' : 'Expand'}
          onClick={handleExpandFolder}
          type='button'
        >
          {expanded ? <VscFolderOpened /> : <VscFolder />}
        </Button>
        <RenamableItem>
          <div>{name}</div>
        </RenamableItem>
        <Button title='Add Folder' type='button' onClick={handleAddFolder}>
          <FiFolderPlus />
        </Button>
        <Button title='Add File' type='button' onClick={handleAddFile}>
          <AiOutlineFileAdd />
        </Button>
        {!isRoot && (
          <Button
            title='Remove'
            onClick={() => handleRemoveFolder(id)}
            type='button'
          >
            <FiTrash />
          </Button>
        )}
      </div>
      <div>
        <ul
          style={{
            display: expanded ? 'block' : 'none',
            listStyleType: 'none',
          }}
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
                  <Button
                    onClick={() => handleRemoveItem(item.id)}
                    type='button'
                  >
                    <FiTrash />
                  </Button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Folder;
