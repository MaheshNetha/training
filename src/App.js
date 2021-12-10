import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import AuthContainer from './containers/AuthContainer/AuthContainer';
import Login from './components/Auth/Login';
import SharedCard from './Shared/Card/Card';
import UserProfile from './components/Profile/Profile';
import Router from "./constants/route";


function App() {
  return (

    <div className="app">
     
            <Router/>
    </div>

     
  );
}

export default App;
