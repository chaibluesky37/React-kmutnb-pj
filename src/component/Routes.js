
import React, { Component } from 'react';
import { Router , Stack , Scene } from 'react-native-router-flux';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

class Routes extends Component {
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={ true }>
                    <Scene key="login" component={ LoginPage } title="Login" initial={ true }/>
                    <Scene key="main" component={ HomePage } title="My Locker" />
                    <Scene key="register" component={ RegisterPage } title="Register"/>
                    <Scene key="profile" component={ ProfilePage } title="Profile"/>
                </Stack>
            </Router>
        );
    }
}
export default Routes;
