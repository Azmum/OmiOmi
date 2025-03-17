import { useState } from "react";
import Card from "../components/ui/card"; // 改成相对路径
import Button from "../components/ui/button";
import Input from "../components/ui/input";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "AI", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState({
    background: "#ffffff",
    textColor: "#000000",
    bubbleColor: "#f0f0f0",
    aiBubbleColor: "#d1e7ff",
  });

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { id: messages.length + 1, sender: "User", text: input };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div style={{ background: theme.background, color: theme.textColor }} className="h-screen flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-4 rounded-lg shadow-md">
        <div className="flex flex-col space-y-2 overflow-auto h-96 p-2">
          {messages.map((msg) => (
            <div key={msg.id} className={`p-2 rounded-lg max-w-xs ${msg.sender === "User" ? "self-end bg-blue-300" : "self-start bg-gray-200"}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </Card>
    </div>
  );
}
