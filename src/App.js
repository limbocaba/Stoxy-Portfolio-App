import './App.css';
import Header from './components/Header';
import Newsfeed from './components/Newsfeed';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='app_header'>

      </div>
      <div className=' app_body'>
        <div className='app-container'>
          <Newsfeed />
          {/* stats */}
        </div>
      </div>
    </div>
  );
}

export default App;
