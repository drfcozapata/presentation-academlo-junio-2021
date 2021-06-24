import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Bulb from './components/Bulbs';
import Input from './components/Input';
import Profile from './components/Profile';

function App() {
	const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
				<Counter />
				<br />
				<br />
				<br />

				<Bulb />
				<br />
				<br />
				<br />
				<Input />
				<br />
				<br />
				<br />
				<Profile title="Profile" data="Francisco Zapata, 53 años, Venezuela"/>
				<Profile title="Interest" data="Web development, Editorial design"/>
      </header>

    </div>
  );
}

export default App;
