// @ts-nocheck
import axios from 'axios';

const MISTRAL_API_URL = 'https://api.mistral.ai/v1/chat'; // Replace with the actual Mistral API endpoint
const API_KEY = process.env.MISTRAL_API_KEY; // Ensure to set this in your environment variables

export const sendMessage = async (message) => {
    try {
        const response = await axios.post(MISTRAL_API_URL, {
            message: message
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error sending message to Mistral API:', error);
        throw error;
    }
};