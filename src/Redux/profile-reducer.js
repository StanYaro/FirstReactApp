const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts : [
    {id: '1', message: 'Hi, how r u', likesCount: 0},
    {id: '2', message: 'its my 1st post', likesCount: 23},
    {id: '3', message: 'asdas', likesCount: 1113},
    {id: '4', message: 'asgasdgasdgasd', likesCount: 3}
  ],
  newPostText: 'React is the best!'
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
          let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
          };
          return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: '',
          };
        }
        case UPDATE_NEW_POST_TEXT: {
          return {
            ...state,   
            newPostText: action.newText         
          }
        }
        default: 
          return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export default profileReducer;