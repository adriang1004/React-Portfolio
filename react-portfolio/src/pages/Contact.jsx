import React, { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted');
        console.log('Form submitted');
    };

    return (
        <section>
            <h2>Contact</h2>
            <form onSubmit={handleFormSubmit}>
                <label>Name:
                    <input type="text" name="name" required onChange={(e) => setFormState({...formState, name: e.target.value})} />
                </label>
            </form>
        </section>
    )
}

export default Contact;