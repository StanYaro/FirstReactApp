import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/state';

const MyPosts = (props) => {
let postsElements = props.posts.map ( post => <Post message={post.message} likesCount={post.likesCount} />);

let newPostElement = React.createRef();


let addPost = () => {
  props.dispatch(addPostActionCreator());
}

let onPostChange = () => {
  let text = newPostElement.current.value;
  // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
  let action = updateNewPostActionCreator(text);
  props.dispatch(action);
}
 
    return (
      <div className={s.postsblock}>

      <h3>My Posts</h3>

        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>

        <div>
          <button onClick={ addPost } >Add post</button>
        </div>

        <div className={s.posts}>
         {postsElements}
        </div> 

        </div>
  );
}

export default MyPosts;

