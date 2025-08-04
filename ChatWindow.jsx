import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './ChatWindow.css'; // <-- Importing the CSS file

const socket = io('http://localhost:4000'); // adjust your backend port if needed

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMsg = { text: message, sender: 'user' };
      socket.emit('send_message', newMsg);
      setMessages((prev) => [...prev, newMsg]);
      setMessage('');
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages((prev) => [...prev, { text: data.text, sender: 'bot' }]);
    });

    return () => socket.off('receive_message');
  }, []);

  return (
      <div className="chat-container">
        <div className="chat-header">
          <img className="avatar" src="./assets/play.avif" alt="Avatar" />

          <div>
            <h4>Pulkit</h4>
            <span className="status">Online</span>
          </div>
        </div>

        <div className="chat-box">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.sender === 'user' ? 'user' : 'bot'}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
  );
};

export default ChatWindow;
