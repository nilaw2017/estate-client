import { useState,useContext } from "react";

import "./Chat.scss";
import { AuthContext } from "../../context/AuthContext";
function Chat({chats}) {
  const [chat, setChat] = useState(false);
  const {currentUser} = useContext(AuthContext)
  console.log("CHATS",chats);
  
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {
          chats.map((chat)=> {
            return (
              <div className="message" key={chat.id} style={{
                backgroundColor: chat.seenBy.includes(currentUser.id) ? "white" : "#fecd514e" 
              }}>
                <img src={chat.receiver.avatar || "/pet.png"} alt="" />
                <span>{chat.receiver.username}</span>
                <p>{chat.lastMessage}</p>
              </div>
            )
          })
        }

      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="/pet.png" alt="" />
              <span>John Doe</span>
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>This is a random message</p>
              <span>1 min ago</span>
            </div>
            <div className="chatMessage own">
              <p>This is a random message</p>
              <span>1 min ago</span>
            </div>
            <div className="chatMessage own">
              <p>This is a random message</p>
              <span>1 min ago</span>
            </div>
            <div className="chatMessage own">
              <p>This is a random message</p>
              <span>1 min ago</span>
            </div>
            <div className="chatMessage">
              <p>This is a random message</p>
              <span>1 min ago</span>
            </div>
            <div className="chatMessage">
              <p>This is a random message</p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea placeholder="Write a message..."></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
