import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href='https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=dzNXC_0vF67gUapNQghR&redirect_uri=http://localhost:8080/naver/callback&state=code'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>
      </header>
    </div>
  );
}

export default App;
