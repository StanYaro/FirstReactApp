const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
      ]
    }
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);    
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default store;
window.store = store;