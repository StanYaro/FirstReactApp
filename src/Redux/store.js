import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

//not using this store cause of installed react-tedux

let store = {
  _state : {
    profilePage: {
      posts : [
        {id: '1', message: 'Hi, how r u', likesCount: 0},
        {id: '2', message: 'its my 1st post', likesCount: 23},
        {id: '3', message: 'asdas', likesCount: 1113},
        {id: '4', message: 'asgasdgasdgasd', likesCount: 3}
      ],
    newPostText: 'React is the best!'
  },
    dialogsPage: {
      dialogs : [
        {id: '1', name: 'Stan'},
        {id: '2', name: 'Nadin'},
        {id: '3', name: 'Iana'},
        {id: '4', name: 'Alex'},
        {id: '5', name: 'Jenia'},
        {id: '6', name: 'Kubik'}
    ],
    messages : [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'Yo'},
        {id: '3', message: 'Bu bu ga ga'},
        {id: '4', message: 'JS is a power!'},
        {id: '5', message: 'Relax man!'},
        {id: '6', message: 'Meaaaau'}
    ],
    newMessageBody: ""
  },
    sidebar: {}
  },
  _callSubscriber() {
    console.log ('state changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },   
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
  
    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;