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
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
    return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>

      <Route path='/dialogs' 
         render = { () => <DialogsContainer store={props.store} />} /> 

      <Route path='/profile' 
         render = { () => <Profile store={props.store} />} /> 
      </div>
    </div>
  );
}

export default App;
