const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users : [
    {id: 1, photoUrl:'https://i.pinimg.com/originals/e0/73/cf/e073cff3ef3e0e5f173598208a1a0dee.jpg', followed: false, fullName: 'Stanislav', status: 'I am a Junior!', location:{city: 'Chisinau', country: 'Moldova'} },
    {id: 2, photoUrl:'https://i.pinimg.com/originals/14/c7/2c/14c72ce84186246df41b9bf943932d1d.jpg', followed: true, fullName: 'Alexander', status: 'I am a Senior!', location:{city: 'London', country: 'Britain'} },
    {id: 3, photoUrl:'https://mir-s3-cdn-cf.behance.net/project_modules/1400/3671da38650505.598fa119575fb.jpg', followed: true, fullName: 'Nadin', status: 'I am a Wife', location:{city: 'Moscow', country: 'Russia'} },
    {id: 4, photoUrl:'https://i.kym-cdn.com/photos/images/original/000/357/581/514.gif', followed: false, fullName: 'Kubik', status: 'I am dump-cat', location:{city: 'Street', country: 'NoWhere'} },    
  ]
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true
            }
          }
          return u;
        })
    }
    case UNFOLLOW:
      return {
          ...state,
          users: state.users.map(u => {
            if (u.id === action.userId) {
              return {
                ...u,
                followed: false
              }
            }
            return u;
          })
    }
    case SET_USERS:
      return {
            ...state, users: [...state.users, ...action.users]
    }
    default:
      return state;
  }
}


export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({ type: SET_USERS, users})

export default usersReducer;