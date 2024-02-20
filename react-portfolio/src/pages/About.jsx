import React from 'react';
import { Container } from 'react-bootstrap';

function About() {
    return (
        <section>
            <Container className="about-container page-container mt-5">
            <h2>About Me</h2>
            <div> 
            <img src='/avatar.jpg' alt="dev" className="about-image"/>
            </div>
            <p>My name is Adrian Garcia. In my free time, I enjoy reading the newest on science and tech news/developments, going for hikes, bouldering/rock climbing, and get lost in films and games. I have been tinkering with computers since my family first got our Gateway PC over 20 years ago. I've marveled at the advanced we've made in that short amount of time, and excitedly look toward the future.</p>
            </Container>
        </section>
    )
}

export default About;