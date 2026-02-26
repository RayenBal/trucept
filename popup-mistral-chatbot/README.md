# Chatbot Popup using Mistral API

This project integrates a chatbot using the Mistral API, designed to appear as a popup on your web application. Below are the details regarding the setup and usage of the project.

## Project Structure

```
popup-mistral-chatbot
├── src
│   ├── main.tsx          # Entry point of the application
│   ├── App.tsx           # Main application component
│   ├── index.html        # HTML template for the application
│   ├── components
│   │   ├── ChatPopup.tsx # Component for the chatbot popup
│   │   ├── ChatWindow.tsx # Main chat interface
│   │   └── Message.tsx    # Individual chat message component
│   ├── services
│   │   └── mistral.ts     # Functions to interact with the Mistral API
│   ├── hooks
│   │   └── useChat.ts     # Custom hook for managing chat state
│   ├── styles
│   │   └── popup.css       # CSS styles for the chatbot popup
│   └── types
│       └── index.ts        # TypeScript interfaces for messages
├── .env.example           # Example environment variables
├── package.json           # npm configuration file
├── tsconfig.json          # TypeScript configuration file
├── vite.config.ts         # Vite configuration file
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd popup-mistral-chatbot
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   - Copy `.env.example` to `.env` and add your Mistral API key:
     ```
     MISTRAL_API_KEY=your_api_key_here
     ```

4. **Run the Application**
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   - Navigate to `http://localhost:3000` (or the port specified in your Vite config) to see the chatbot popup in action.

## Usage

- Click on the chatbot icon to open the chat popup.
- Type your message in the input field and press enter to send.
- The chatbot will respond based on the input provided.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.