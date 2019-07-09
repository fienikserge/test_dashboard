import React from 'react';
import logo from '../../../assets/images/logo.png'

import './dashboard.scss';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <img className="logo" src={logo} alt="logo"/>
                <ul>
                    <li className={'active'}>Dashboard</li>
                    <li>Links</li>
                    <li>Embeds</li>
                    <li>Manage Pixel</li>
                    <li>Permissions</li>
                    <li>Audiences</li>
                    <li>Advertise</li>
                </ul>
            </div>
        );
    }
}

export default Dashboard;