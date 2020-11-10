import React from 'react';
import { Switch } from "react-router-dom";

import AppRoute from './AppRoute';
import LoginLayout from '../components/LoginLayout'
import Home from '../containers/home/Home';
import Login from '../containers/Login';
import ChallengeOperationalManagement from '../containers/challenge-perational-management/ChallengeOperationalManagement';
import MemberManagement from '../containers/member-management/MemberManagement';
import DownloadManagement from '../containers/download-management/DownloadManagement';
import SaleManagement from '../containers/sale-management/SaleManagement';
import AdministratorId from '../containers/administrator-id/AdministratorId'
const Routes = () => {
    return (
        <Switch>
            <AppRoute exact path="/" component={Login} layout={LoginLayout} />
            <AppRoute exact path="/home" component={Home} />
            <AppRoute exact path="/challenge-perational-management" component={ChallengeOperationalManagement} />
            <AppRoute exact path="/member-management" component={MemberManagement} />
            <AppRoute exact path="/download-management" component={DownloadManagement} />
            <AppRoute exact path="/sale-management" component={SaleManagement} />
            <AppRoute exact path="/administrator-id" component={AdministratorId} />

        </Switch>
    )
}
export default Routes;