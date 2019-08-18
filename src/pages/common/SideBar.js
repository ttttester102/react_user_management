import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Storage } from '../../storage/Storage';
import { USER_DATA } from '../../storage/Constant';

export default class SideBar extends PureComponent {
    static propTypes = {

    }

    state = {
        userData: Storage.getUser(USER_DATA)
    }

    openPage = (path) => {
        const { history } = this.props;

        history.push(path);
    }

    _getUserName = () => {
        const { userData } = this.state;

        return userData ? userData.name.toUpperCase() : "No name available.";
    }

    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">{this._getUserName()}</li>
                        <li onClick={this.openPage.bind(this, '/home/user/add')}>
                            <a className="stm-cursor">
                                <i className="glyphicon glyphicon-plus"></i> <span>Create User</span>
                            </a>
                        </li>
                        <li onClick={this.openPage.bind(this, '/home/user/list')}>
                            <a className="stm-cursor">
                                <i className="glyphicon glyphicon-th-list"></i> <span>Users</span>
                            </a>
                        </li>
                        <li onClick={this.openPage.bind(this, '/home/')}>
                            <a className="stm-cursor">
                                <i className="glyphicon glyphicon-user"></i> <span>Profile</span>
                            </a>
                        </li>
                        <li>
                            <a className="stm-cursor">
                                <i className="glyphicon glyphicon-log-out"></i> <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </aside>
        )
    }
}
