import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';

const EventComponent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/data/events/');
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <Container>
                <h2>The main events of the week in Almaty (November 7 - 13)</h2>
                <div className="blog-boxes">
                    {events.map((event) => (
                        <div key={event.events_id} className="blog-box">
                            <div className="blog-img">
                                <img src={event.image_url} alt={event.events_name} width="500px" />
                            </div>
                            <div className="blog-text">
                                <h1>{event.events_name}</h1>
                                <h3>{event.date}</h3>
                                <p>{event.description}</p>
                                <div className="box-btn">
                                    <button>More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default EventComponent;
