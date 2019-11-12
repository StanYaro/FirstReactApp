import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
      <div className={s.item}>
        <img src='https://images.wallpaperscraft.ru/image/intel_logotip_intel_znak_brend_26171_1280x720.jpg'>
        </img>{props.message}

        <div>
        <span>like</span> {props.likesCount}
        </div> 

      </div>
  );
}


export default Post;