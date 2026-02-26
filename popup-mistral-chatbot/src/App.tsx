// @ts-nocheck
import React, { useState } from 'react';
import ChatPopup from './components/ChatPopup';
import './styles/popup.css';

const App: React.FC = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    return (
        <div>
            <button onClick={togglePopup} className="chat-button">
                Chat with us
            </button>
            {isPopupVisible && <ChatPopup onClose={togglePopup} />}
        </div>
    );
};

export default App;