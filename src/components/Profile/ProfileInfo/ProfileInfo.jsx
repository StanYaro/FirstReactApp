import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/preloader';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }    
    return (
    <div>
        {/* <div>
         <img src='https://www.zastavki.com/pictures/originals/2014/Nature___Islands_Island_in_the_tropics_089496_.jpg' className={s.contentback}></img> 
        </div> */}

        <div  className={s.descriptionBlock} > 
            <img src={props.profile.photos.large} />
            <ProfileStatus  status={props.status} updateStatus={props.updateStatus} />
        </div> 

    </div>
    );
}


export default ProfileInfo;