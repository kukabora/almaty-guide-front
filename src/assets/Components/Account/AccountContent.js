import React, {Component} from 'react';
import AccountSettings from "./AccountSettings";

class AccountContent extends Component {
    render() {
        return (
            <div>
                <div className="content-title">
                    <h2>Account settings</h2>
                    <h6>Manage your ALAtravel experience</h6>
                </div>
                <AccountSettings />
            </div>
        );
    }
}

export default AccountContent;