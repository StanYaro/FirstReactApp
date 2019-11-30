import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setings from './components/Setings/Setings';


const App = (props) => {
    return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>

      <Route /*exact*/ path='/dialogs' 
         render = { () => <Dialogs store={props.store} />} /> 

      <Route /*exact*/ path='/profile' 
         render = { () => <Profile 
           profilePage={props.state.profilePage} 
           dispatch={props.dispatch} />} /> 
      </div>
    </div>
  );
}

export default App;
