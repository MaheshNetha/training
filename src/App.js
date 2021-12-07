import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import AuthContainer from './containers/AuthContainer/AuthContainer';
import Login from './components/Auth/Login';
import SharedCard from './Shared/Card/Card';
import UserProfile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Header/>
      </header> */}
      <section>
        <AuthContainer >
            {/* <Login /> */}
           
           <UserProfile />
           
           
        </AuthContainer>
      </section>
    </div>
  );
}

export default App;
