import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map ( post => <Post message={post.message} likesCount={post.likesCount} />);

    return (
      <div className={s.postsblock}>

      <h3>My Posts</h3>

        <div>
        <textarea></textarea>
        </div>

        <div>
        <button>Add post</button>
        </div>

        <div className={s.posts}>
         {postsElements}
        </div> 

        </div>
  );
}

export default MyPosts;