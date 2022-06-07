import './App.css';
import Dropdown from './dropdown/Dropdown';

function App() {
  return (
    <div className='App'>
      <Dropdown
        listItems={[
          {
            label: 'List1',
            callback: () => {
              console.log(1);
            },
          },
          {
            label: 'List2',
            callback: () => {
              console.log(2);
            },
          },
        ]}
      />
    </div>
  );
}

export default App;
