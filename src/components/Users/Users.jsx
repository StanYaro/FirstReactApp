import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';

let Users = (props) => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(Response => {
            props.setUsers (Response) 
        });

    //     props.setUsers ([
    //     {id: 1, photoUrl:'https://i.pinimg.com/originals/e0/73/cf/e073cff3ef3e0e5f173598208a1a0dee.jpg', followed: false, fullName: 'Stanislav', status: 'I am a Junior!', location:{city: 'Chisinau', country: 'Moldova'} },
    //     {id: 2, photoUrl:'https://i.pinimg.com/originals/14/c7/2c/14c72ce84186246df41b9bf943932d1d.jpg', followed: true, fullName: 'Alexander', status: 'I am a Senior!', location:{city: 'London', country: 'Britain'} },
    //     {id: 3, photoUrl:'https://mir-s3-cdn-cf.behance.net/project_modules/1400/3671da38650505.598fa119575fb.jpg', followed: true, fullName: 'Nadin', status: 'I am a Wife', location:{city: 'Moscow', country: 'Russia'} },
    //     {id: 4, photoUrl:'https://i.kym-cdn.com/photos/images/original/000/357/581/514.gif', followed: false, fullName: 'Kubik', status: 'I am dump-cat', location:{city: 'Street', country: 'NoWhere'} },    
    //   ])      
    }
    
    return <div>     
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed 
                            ? <button onClick={ () => {props.unfollow(u.id)} } >UnFollow</button> 
                            : <button onClick={ () => {props.follow(u.id)} } >Follow</button> }                        
                    </div>
                </span>

                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}


export default Users;