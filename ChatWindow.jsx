import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './ChatWindow.css';

const socket = io('http://localhost:4000'); // adjust if needed

function ChatWindow() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [myId, setMyId] = useState('');

  useEffect(() => {
    // Store your socket ID
    socket.on('connect', () => {
      setMyId(socket.id);
    });

    // Listen for messages
    const handleReceive = (data) => {
      setMessages((prev) => [...prev, data]);
    };

    socket.on('receive_message', handleReceive);

    // Cleanup
    return () => {
      socket.off('receive_message', handleReceive);
      socket.off('connect');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        text: message,
        sender: socket.id,
      };

      socket.emit('send_message', newMessage);
      setMessage('');
      // Do NOT add locally here, we wait for server to send it back
    }
  };

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
          <div
            key={i}
            className={`message ${msg.sender === myId ? 'user' : 'bot'}`}
          >
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
}

export default ChatWindow;
