import logo from './logo.svg';

import ChargeOverJS from './components/ChargeOverJS';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          ChargeOver.js React Demo |

          <a
            className="App-link"
            href="https://developer.chargeover.com/apidocs/js/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the documentation
          </a>
        </nav>

        <p>
          Open your browser console, then click the button below!
        </p>
        <ChargeOverJS />
      </header>
    </div>
  );
}

export default App;
