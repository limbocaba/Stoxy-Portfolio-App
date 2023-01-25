import './App.css';
import Header from './components/Header';
import Newsfeed from './components/Newsfeed';
import Stats from './components/Stats';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='app_header'>

      </div>
      <div className='app-body'>
        <div className='app-container'>
          <div className='newsfeed'>
            <Newsfeed />
          </div>
          <div className=' stats'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
