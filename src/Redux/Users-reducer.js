const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users : [
    // {id: 1, followed: false, fullName: 'Stanislav', status: 'I am a Junior!', location:{city: 'Chisinau', country: 'Moldova'} },
    // {id: 2, followed: true, fullName: 'Alexander', status: 'I am a Senior!', location:{city: 'London', country: 'Britain'} },
    // {id: 3, followed: true, fullName: 'Nadin', status: 'I am a Wife', location:{city: 'Moscow', country: 'Russia'} },
    // {id: 4, followed: false, fullName: 'Kubik', status: 'I am dump-cat', location:{city: 'Street', country: 'NoWhere'} },    
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