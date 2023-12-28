import './App.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { ContentWrapper } from './Components/ContentWrapper/ContentWrapper';
import { Footer } from './Components/Footer/Footer';
import { SplashPage } from './Components/SplashPage/SplashPage';
import { WeatherInfo } from './Components/WeatherInfo/WeatherInfo';
import { getIsDataReceived, getIsLoading } from './Store/Selectors/getLocationState';
import { useTheme } from './providers/ThemeProvider/useTheme';
import { ThemeSwitcher } from './Components/ThemeSwitcher/ThemeSwitcher';

function App() {
    const isDataReceived = useSelector(getIsDataReceived);
    const isLoading = useSelector(getIsLoading);
    const { theme } = useTheme();

    const content = isDataReceived ? (
        <WeatherInfo />
    )
        : <SplashPage className={classNames('splashPage', isLoading && 'loader')} />;

    return (
        <div className={`App-layout ${theme}`}>
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
