import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
    <div>
        <div>
         <img src='https://www.zastavki.com/pictures/originals/2014/Nature___Islands_Island_in_the_tropics_089496_.jpg' className={s.contentback}></img> 
        </div>

        <div  className={s.descriptionBlock} > 
            ava + description
        </div> 

    </div>
    );
}


export default ProfileInfo;