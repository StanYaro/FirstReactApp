import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from '../../Redux/profile-reducer';
import {withRouter, Redirect} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'C:/Users/Cole/AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }   
        this.props.getUserProfile(userId);       
    }

    render() 
    {        
        return (
            <Profile {...this.props} profile={this.props.profile}/>     
        )};
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect (mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)