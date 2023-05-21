import { ReactElement, FC, useState } from 'react';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { VscCheck } from 'react-icons/vsc';
import Button from '../UI/Button';

type Props = {
  children: ReactElement;
};

const RenamableItem: FC<Props> = ({ children }) => {
  const [name, setName] = useState<string>(children.props.children);
  const [renaming, setRenaming] = useState<boolean>(false);

  const handleRename = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSwitchRenaming = () => {
    setRenaming((prev) => !prev);
  };

  return (
    <>
      <span style={{ padding: '5px 5px 10px 5px' }}>
        {renaming ? (
          <input type='text' onChange={handleRename} value={name} />
        ) : (
          name
        )}
      </span>

      <Button
        title={renaming ? 'Save' : 'Rename'}
        type='button'
        onClick={handleSwitchRenaming}
      >
        {renaming ? <VscCheck /> : <MdDriveFileRenameOutline />}
      </Button>
    </>
  );
};

export default RenamableItem;
