import './App.scss';
import ghLogo from './assets/icons/footer/icons8-github-100.svg'

function App() {

  return (
    <div className="App-layout">
      <div className='content'>Content</div>
      <div className='footer'>
        <a href="https://github.com/Averah" target="_blank">
          <img className='gh-logo' src={ghLogo} alt='' />
        </a>
      </div>
    </div>
  );
}

export default App;
