import React, { useState } from 'react';
import logo from '../../img/Logo.png';
import { Container } from '@mui/material';
import '../../Styles/AccountStyle.css';
import avatar from '../../img/avatar.png';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AccountMenu = ({ userEmail }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove('access_token');
        navigate('/reg');
    };

    return (
        <div className="account-menu">
            <Container>
                <div className="navigation-panel account-navigation">
                    <nav>
                        <a href="/">
                            <img
                                src={logo}
                                alt=""
                                height=""
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                            <p>
                                <span>ALA</span>travel
                            </p>
                        </a>

                        <div className="account-manage">
                            <span className="account-manage-box">
                                <button className="account-manage-btn">
                                    <span style={{ position: 'relative' }}>
                                        <div className="account-manage-items">
                                            <div className="account-manage-img">
                                                <img src={avatar} alt="" />
                                            </div>
                                            <div
                                                className="account-manage-name"
                                                onClick={() => setShowDropdown(!showDropdown)}
                                            >
                                                <p>{userEmail || 'Guest'}</p>
                                                {showDropdown && (
                                                    <ul className="dropdown-menu">
                                                        <li onClick={handleLogout}>Logout</li>
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </span>
                                </button>
                            </span>
                        </div>
                    </nav>
                </div>
            </Container>
        </div>
    );
};

export default AccountMenu;
