import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setCurrentPage ,toggleFollowingProgress, getUsers} from '../../Redux/Users-reducer';
import Preloader from '../common/Preloader/preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'C:/Users/Cole/AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux';

//container component
class UsersContainer extends React.Component {

    componentDidMount () {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged =  (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})
)(UsersContainer)