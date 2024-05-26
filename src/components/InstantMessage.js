// components/InstantMessage.js
import React, { useState } from 'react';
import './InstantMessage.scss';

function InstantMessage() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        setMessages([...messages, newMessage]);
        setNewMessage('');
    };

    return (
        <div className="instant-message">
            <h1>Instant Message</h1>
            <div className="messages">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        {message}
                    </div>
                ))}
            </div>
            <div className="message-input">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default InstantMessage;
