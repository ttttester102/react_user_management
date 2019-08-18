import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Login extends PureComponent {
    static propTypes = {

    }

    state = {
        usernameClasses: '',
        passwordClasses: ''
    }

    onFocus(key) {
        switch (key) {
            case 'username':
                this.setState({ usernameClasses: 'active', passwordClasses: '' });
                break;
            case 'password':
                this.setState({ usernameClasses: '', passwordClasses: 'active' });
                break;
        }
    }

    onBlur(key) {
        switch (key) {
            case 'username':
                this.setState({ usernameClasses: '', passwordClasses: '' });
                break;
            case 'password':
                this.setState({ usernameClasses: '', passwordClasses: 'active' });
                break;
        }
    }

    openPage = (page) => {
        const { history } = this.props;

        history.push(page);
    }

    render() {
        return (
            <div className="hold-transition login-page h-100vh">
                <div className="login-box container-center m-0">
                    <div className="login-logo">
                        <a className="stm-cursor"><b>STD</b>Management</a>
                    </div>
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form method="post">
                            <div className="form-group has-feedback">
                                <input type="email" className="form-control" placeholder="Email" />
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" className="form-control" placeholder="Password" />
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                                </div>
                            </div>
                            <p className="login-box-msg mt-1">I Don't have an account? <span className="stm-cursor" onClick={this.openPage.bind(this, '/signup')}>Sign Up</span></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
