
import './App.css';

import Header from './components/Header/header';
import List from './components/List';

const users = [
    {
      id: 0,
      name: 'Siri'
    },
    {
      id: 1,
      name: 'Alexa'
    },
    {
      id: 2,
      name: 'Google Assistente'
    }
  ];

function App() {
  return (
    <div className="App">
      <Header />
        <List items={users} />
    </div>
  );
}

export default App;
