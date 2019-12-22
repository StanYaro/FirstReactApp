import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching ,toggleFollowingProgress} from '../../Redux/Users-reducer';
import Preloader from '../common/Preloader/preloader';
import { usersAPI } from '../../api/api';

//container component
class UsersContainer extends React.Component {

    componentDidMount () {
        this.props.toggleIsFetching(true);

            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);      
                this.props.setUsers(data.items); //callback from containers mapDispatchToProps
                this.props.setTotalUsersCount(data.totalCount); //callback
            });
    }

    onPageChanged =  (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        
            usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);        
                this.props.setUsers (data.items) //callback
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
                        unfollow={this.props.unfollow}
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
                        followingInProgress={this.props.followingInProgress}
                    /> 
                </> 
    }
}  

let mapStateToProps = (state) => {    //get object with all fresh data/props from store and push into components
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, 
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(UsersContainer);