// @ts-nocheck
import React from 'react';
import { Message } from './Message';

interface ChatWindowProps {
    messages: { id: number; content: string; sender: 'user' | 'bot' }[];
    onSendMessage: (message: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, onSendMessage }) => {
    const [input, setInput] = React.useState('');

    const handleSend = () => {
        if (input.trim()) {
            onSendMessage(input);
            setInput('');
        }
    };

    return (
        <div className="chat-window">
            <div className="messages">
                {messages.map((msg) => (
                    <Message key={msg.id} content={msg.content} sender={msg.sender} />
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default ChatWindow;