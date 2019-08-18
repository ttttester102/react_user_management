import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { authRoutes } from './AuthRouteConfig';

export default class AuthRoute extends PureComponent {
    static propTypes = {

    }

    render() {
        return (
            <Switch>
                {
                    authRoutes.map((ele, index) => {
                        return (
                            <Route
                                path={ele.path}
                                key={`auth-route-${index}`}
                                component={ele.component}
                                exact={ele.exact} />
                        );
                    })
                }
            </Switch>
        )
    }
}
