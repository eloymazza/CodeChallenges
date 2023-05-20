import './App.css';
import Folder from './components/Folder';

function App() {
  return (
    <>
      <h1> File System Challenge</h1>
      <Folder
        isRoot
        id={crypto.randomUUID()}
        name={'root'}
        subItems={[]}
        handleRemoveFolder={() => undefined}
      />
    </>
  );
}

export default App;
