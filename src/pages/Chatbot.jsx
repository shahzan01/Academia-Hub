// src/components/Chatbot.js
import React, { useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";
import "./Rating.css";
import faqData from "../data/chatboxFAQ";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(false);

  // Reference for the message container to scroll
  const messageListRef = useRef(null);

  // Configure Fuse.js
  const fuse = new Fuse(faqData, {
    keys: ["question"], // Search only in the "question" field
    threshold: 0.4, // Adjust sensitivity (lower is stricter)
  });

  useEffect(() => {
    // Add initial message on component mount
    setMessages([{ text: "Hello, How can I help you?", sender: "bot" }]);
  }, []);

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]); // Trigger scroll when messages are updated

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };

      // Perform fuzzy matching
      const results = fuse.search(input.trim());
      const botResponse =
        results.length > 0
          ? results[0].item.answer
          : "Sorry, I can only answer questions about courses, projects, & return policy.";

      setMessages([
        ...messages,
        userMessage,
        { text: botResponse, sender: "bot" },
      ]);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div>
      <div className="chatbot-icon" onClick={() => setVisible(!visible)}>
        💬
      </div>
      {visible && (
        <div className="chatbot">
          <div className="chatbot-header">
            <h4>FAQ Chatbot</h4>
            <button onClick={() => setVisible(false)}>X</button>
          </div>
          <div
            className="chatbot-messages overflow-y-scroll"
            ref={messageListRef} // Attach ref to message container
          >
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a question..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
