import './App.scss';
import { useSelector } from 'react-redux';
import ghLogo from './assets/icons/footer/github-icon.svg';
import { CurrentWeather } from './Components/CurrentWeather/CurrentWeather';
import { Forecast } from './Components/Forecast/Forecast';
import SearchBar from './Components/SearchBar/SearchBar';
import { SplashPage } from './Components/SplashPage/SplashPage';
import { WeatherLogo } from './Components/WeatherLogo/WeatherLogo';
import { getIsDataReceived, getIsLoading } from './Store/Selectors/getLocationState';
import classNames from 'classnames';


function App() {
  const isDataReceived = useSelector(getIsDataReceived);
  const isLoading = useSelector(getIsLoading);

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
        <SplashPage className={classNames('splashPage', isLoading && 'loader')} />
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
