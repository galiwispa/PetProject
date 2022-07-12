import React from "react";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus } from './../../redux/profile-reducer';
import { connect } from 'react-redux';
import { compose } from "redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 24481;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status || 'hello'} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router = {{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default compose (
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})
) (ProfileContainer);
