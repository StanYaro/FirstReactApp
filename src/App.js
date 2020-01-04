import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setings from './components/Setings/Setings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/login/login';



const App = (props) => {
    return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>

      <Route path='/dialogs' 
        render = { () => <DialogsContainer store={props.store} />} /> 

      <Route path='/profile/:userId?' 
        render = { () => <ProfileContainer />} /> 

      <Route path='/users' 
        render = { () => <UsersContainer />} /> 
        
      <Route path='/login' 
        render = { () => <LoginPage />} /> 


      </div>
    </div>
  );
}

export default App;
