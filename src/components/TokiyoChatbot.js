import React, { useState } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";

export default function TokiyoChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Radhe Radhe 💕 I’m Tokiyo, Karan’s personal AI assistant!" },
  ]);
  const [input, setInput] = useState("");

  const toggleOpen = () => setOpen(!open);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "I'm still learning! Please check back later." },
      ]);
    }, 1000);
  };

  return (
    <>
      <div
        onClick={toggleOpen}
        title="Chat with Tokiyo"
        style={{
          position: "fixed",
          bottom: open ? 320 : 30,
          right: 30,
          backgroundColor: "var(--btn-bg)",
          color: "var(--btn-text)",
          width: 60,
          height: 60,
          borderRadius: "50%",
          boxShadow: "var(--shadow)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10000,
          transition: "bottom 0.3s ease",
        }}
      >
        <FaRobot size={30} />
      </div>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 100,
            right: 30,
            width: 320,
            maxHeight: 400,
            backgroundColor: "var(--card-bg)",
            boxShadow: "var(--shadow)",
            borderRadius: 15,
            display: "flex",
            flexDirection: "column",
            zIndex: 10000,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-text)",
              padding: "0.75rem 1rem",
              fontWeight: "700",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              userSelect: "none",
            }}
          >
            Tokiyo AI
            <FaTimes
              style={{ cursor: "pointer" }}
              onClick={() => setOpen(false)}
              title="Close chat"
            />
          </div>
          <div
            style={{
              flex: 1,
              padding: "1rem",
              overflowY: "auto",
              fontSize: "0.9rem",
              color: "var(--text-color)",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "0.8rem",
                  textAlign: m.from === "bot" ? "left" : "right",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    backgroundColor: m.from === "bot" ? "var(--btn-bg)" : "var(--link-color)",
                    color: m.from === "bot" ? "var(--btn-text)" : "#fff",
                    maxWidth: "80%",
                    wordWrap: "break-word",
                  }}
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              borderTop: "1px solid #ccc",
              padding: "0.5rem",
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                borderRadius: 20,
                border: "1px solid #ccc",
                padding: "0.5rem 1rem",
                fontSize: "0.9rem",
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                backgroundColor: "var(--btn-bg)",
                border: "none",
                borderRadius: "50%",
                width: 36,
                height: 36,
                color: "var(--btn-text)",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              title="Send"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
