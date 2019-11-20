import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts : [
      {id: '1', message: 'Hi, how r u', likesCount: 0},
      {id: '2', message: 'its my 1st post', likesCount: 23},
      {id: '3', message: 'asdas', likesCount: 1113},
      {id: '4', message: 'asgasdgasdgasd', likesCount: 3}
    ]
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
}

export let addPost = (postMessage) => {
  let newPOst = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };

  state.profilePage.posts.push(newPOst);
  rerenderEntireTree(state);
} 

  


  export default state;