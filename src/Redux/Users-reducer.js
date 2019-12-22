import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
  users : [],
  pageSize: 25,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,  //loading animation-preloader
  followingInProgress: []
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
            ...state, 
            users: action.users
    }
    case SET_CURRENT_PAGE:
      return {
            ...state, 
            currentPage: action.currentPage
    }
    case SET_TOTAL_USERS_COUNT:
      return {
            ...state, 
            totalUsersCount: action.count
    }
    case TOGGLE_IS_FETCHING:
      return {
            ...state, 
            isFetching: action.isFetching
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
            ...state, 
            followingInProgress: action.isFetching 
              ? [...state.followingInProgress, action.userId]
              : state.followingInProgress.filter(id=> id != action.userId)
    }
  }
    default:
      return state;
  }
}

//action creators
export const followSucces = (userId) => ({ type: FOLLOW, userId })
export const unfollowSucces = (userId) => ({ type: UNFOLLOW, userId})
export const setUsers = (users) => ({ type: SET_USERS, users}) //get all users
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage}) //change curent page on click
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})  //count and set all users on cite
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching})  //preloader animation
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}) 


 //thunks -"sanki"
export const getUsers = (currentPage, pageSize) => {  
   return (dispatch) => { 
      dispatch(toggleIsFetching(true));

            usersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(toggleIsFetching(false));      
                dispatch(setUsers(data.items)); //callback from containers mapDispatchToProps
                dispatch(setTotalUsersCount(data.totalCount)); //callback
            });
    }      
}
export const follow = (userID) => {
  return (dispatch) => { 
    dispatch(toggleFollowingProgress(true, userID));
    usersAPI.follow(userID).then(response => {
        if (response.data.resultCode == 0) {
            dispatch(followSucces(userID));
        }
        dispatch(toggleFollowingProgress(false, userID));
        });
  }
}
export const unfollow = (userID) => {
  return (dispatch) => { 
    dispatch(toggleFollowingProgress(true, userID));
    usersAPI.unfollow(userID).then(response => {
        if (response.data.resultCode == 0) {
            dispatch(unfollowSucces(userID));
        }
        dispatch(toggleFollowingProgress(false, userID));
        });
}
}

export default usersReducer;