import './App.css';
import Folder from './components/Folder';

function App() {
  return (
    <>
      <h1> File System Challenge</h1>
      <div className='file-system-container'>
        <Folder
          isRoot
          id={crypto.randomUUID()}
          name={'Root'}
          subItems={[]}
          handleRemoveFolder={() => undefined}
        />
      </div>
    </>
  );
}

export default App;
