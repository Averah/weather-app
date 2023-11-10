import './App.scss';
import ghLogo from './assets/icons/footer/icons8-github-100.svg'
import { CurrentWeather } from './Components/CurrentWeather/CurrentWeather';
import { Forecast } from './Components/Forecast/Forecast';
import SearchBar from './Components/SearchBar/SearchBar';
import { WeatherLogo } from './Components/WeatherLogo/WeatherLogo';


function App() {

  return (
    <div className="App-layout">
      <div className='content'>
        <WeatherLogo />
        <SearchBar />
        <CurrentWeather />
        <Forecast />
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
