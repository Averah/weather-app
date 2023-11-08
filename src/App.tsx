import './App.scss';
import ghLogo from './assets/icons/footer/icons8-github-100.svg'
import SearchBar from './SearchBar/SearchBar';
import { WeatherLogo } from './WeatherLogo/WeatherLogo';

function App() {

  return (
    <div className="App-layout">
      <div className='content'>
        <WeatherLogo />
        <SearchBar />
      </div>
      <div className='footer'>
        <a href="https://github.com/Averah" target="_blank" rel="noopener noreferrer">
          <img className='gh-logo' src={ghLogo} alt='' />
        </a>
      </div>
    </div>
  );
}

export default App;
