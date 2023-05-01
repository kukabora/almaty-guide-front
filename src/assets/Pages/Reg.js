import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reg = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                for (const key in errorData) {
                    toast.error(`${key}: ${errorData[key]}`);
                }
                return;
            }

            toast.success('Registration successful!');
        } catch (error) {
            toast.error('Error submitting registration data');
        }
    };

    return (
        <div>
            <ToastContainer />
            <Container>
                <div className="Auth-form-container">
                    <form className="Auth-form" onSubmit={handleSubmit}>
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Registrate</h3>
                            <div className="form-group mt-3">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control mt-1"
                                    placeholder="Enter name"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    value={formData.email}
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
                                Already registered?<a href="/login"> Login</a>
                            </p>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Reg;
