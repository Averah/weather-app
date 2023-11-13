import './App.scss';
import { useSelector } from 'react-redux';
import ghLogo from './assets/icons/footer/github-icon.svg';
import { CurrentWeather } from './Components/CurrentWeather/CurrentWeather';
import { Forecast } from './Components/Forecast/Forecast';
import SearchBar from './Components/SearchBar/SearchBar';
import { WeatherLogo } from './Components/WeatherLogo/WeatherLogo';
import { getIsDataReceived } from './Store/Selectors/getLocationState';
import { SplashPage } from './Components/SplashPage/SplashPage';


function App() {
  const isDataReceived = useSelector(getIsDataReceived)
  if (isDataReceived) {
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
    )
    
  }
  return (
    <div className="App-layout">
      <div className='content'>
        <WeatherLogo />
        <SearchBar />
        <SplashPage className='splashPage' />
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
