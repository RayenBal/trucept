// @ts-nocheck
import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import './popup.css';

const ChatPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="chat-popup">
            <button className="chat-toggle" onClick={togglePopup}>
                {isOpen ? 'Close Chat' : 'Open Chat'}
            </button>
            {isOpen && (
                <div className="chat-content">
                    <ChatWindow />
                </div>
            )}
        </div>
    );
};

export default ChatPopup;