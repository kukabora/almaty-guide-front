import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/token/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `username=${formData.username}&password=${formData.password}`,
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast.error(errorData.detail);
                return;
            }

            const responseData = await response.json();
            Cookies.set('access_token', responseData.access);
            toast.success('Login successful!');
            navigate('/account');
        } catch (error) {
            toast.error('Error submitting login data');
            console.log(error)
        }
    };

    return (
        <div>
            <ToastContainer />
            <Container>
                <div className="Auth-form-container">
                    <form className="Auth-form" onSubmit={handleSubmit}>
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Sign In</h3>
                            <div className="form-group mt-3">
                                <label>Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                            <p className="forgot-password text-right mt-2">
                                Forgot <a href="#">password?</a> or didn't have <a href="/reg"> account?</a>
                            </p>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Login;
