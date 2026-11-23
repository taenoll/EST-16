import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [messages, setMessages] = useState<string[]>([
    "다했어?",
    "넘어가도 돼?",
    "나중에 안 보여준다?",
  ]);

  const addMessage = () => {
  setMessages((prev) => [...prev, `새 메시지 ${prev.length + 1}`]);
};

  return (
    <div>
      <h2>채팅방</h2>
      <div
        style={{
          height: "200px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {messages.map((msg, idx) => (
          <Child key={idx} message={msg} />
        ))}
      </div>
      <button type="button" onClick={addMessage}>메시지 보내기</button>
    </div>
  );
}

export default Parent;