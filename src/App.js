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
        <a id="custom-login-btn" href="https://kauth.kakao.com/oauth/authorize?client_id=f389279a519362486ab648bdf0ebaccd&redirect_uri=http://localhost:8080/kakao/callback&response_type=code">
          <img
            src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
            width="222"
            alt="카카오 로그인 버튼"
          />
        </a>
        <a href='https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=dzNXC_0vF67gUapNQghR&redirect_uri=http://localhost:8080/naver/callback&state=code'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>
      </header>
    </div>
  );
}

export default App;
