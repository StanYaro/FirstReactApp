import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../Redux/Users-reducer';
import Preloader from '../common/Preloader/preloader';



//container component

class UsersContainer extends React.Component {

    componentDidMount () {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {withCredentials: true}).then(response => {
                this.props.toggleIsFetching(false);        
                this.props.setUsers (response.data.items) //callback from containers mapDispatchToProps
                this.props.setTotalUsersCount (response.data.totalCount) //callback
            });
    }

    onPageChanged =  (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {withCredentials: true}).then(response => {
                this.props.toggleIsFetching(false);        
                this.props.setUsers (response.data.items) //callback
            });
    }    
    render () {        
        return  <>
        {this.props.isFetching ? <Preloader /> : null }
                    <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}/> 
                </> 
    }
}  

let mapStateToProps = (state) => {    //get object with all fresh data/props from store and push into components
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {   //dispatch callbacks in store
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleisFetchingAC(isFetching));
//         }
//     }
// }


export default connect(mapStateToProps, 
    {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching})(UsersContainer);