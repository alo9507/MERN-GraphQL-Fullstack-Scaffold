import React, { Component } from "react";
import { signIn, signOut } from "../redux/actions";
import { connect } from "react-redux";

class GoogleAuth extends Component {
    
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '880008491292-ru9m3o8qsnmb25hpcdhi3pstj5fgn2fd.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };
    
    onSignInClick = () => {
        this.props.signIn();
    }

    onSignOutClick = () => {
        this.props.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                <i className="google icon"></i>
                    Google Auth
                </button>
            )
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                <i className="google icon"></i>
                    Sign Out with Google
                </button>
            )
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                <i className="google icon"></i>
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return (
          this.renderAuthButton()
        );
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);