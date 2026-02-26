// @ts-nocheck
import { useState, useEffect } from 'react';
import { sendMessageToMistral } from '../services/mistral';

const useChat = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const sendMessage = async (message) => {
        setMessages((prevMessages) => [...prevMessages, { content: message, sender: 'user' }]);
        setLoading(true);

        try {
            const response = await sendMessageToMistral(message);
            setMessages((prevMessages) => [...prevMessages, { content: response, sender: 'bot' }]);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setLoading(false);
        }
    };

    return { messages, sendMessage, loading };
};

export default useChat;