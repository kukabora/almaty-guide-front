import React, { useEffect, useState } from 'react';
import AccountMenu from '../Components/Account/AccountMenu';
import AccountContent from '../Components/Account/AccountContent';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Account = () => {
    const [userEmail, setUserEmail] = useState('');
    const history = useNavigate();

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        const token = Cookies.get('access_token');

        if (!token) {
            history('/login');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/api/user-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });

            if (!response.ok) {
                history.push('/login');
                return;
            }

            const data = await response.json();
            setUserEmail(data.user.email);
        } catch (error) {
            history.push('/login');
        }
    };

    return (
        <div>
            <AccountMenu userEmail={userEmail} />
            <Container>
                <AccountContent />
            </Container>
        </div>
    );
};

export default Account;
