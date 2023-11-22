import './App.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { ContentWrapper } from './Components/ContentWrapper/ContentWrapper';
import { Footer } from './Components/Footer/Footer';
import { SplashPage } from './Components/SplashPage/SplashPage';
import { WeatherInfo } from './Components/WeatherInfo/WeatherInfo';
import { getIsDataReceived, getIsLoading } from './Store/Selectors/getLocationState';

function App() {
    const isDataReceived = useSelector(getIsDataReceived);
    const isLoading = useSelector(getIsLoading);

    const content = isDataReceived ? (
        <WeatherInfo />
    )
        : <SplashPage className={classNames('splashPage', isLoading && 'loader')} />;

    return (
        <div className="App-layout">
            <div className="content">
                <ContentWrapper>
                    {content}
                </ContentWrapper>
            </div>
            <div className="footer">
                <Footer />
            </div>

        </div>
    );
}

export default App;
