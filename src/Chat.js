import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { AttachFile } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { InsertEmoticon } from "@mui/icons-material";
import { Mic } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import db from "./firebase";
function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const {roomId} = useParams();
  const [roomName,setRoomName] = useState("");


  useEffect(()=>{if(roomId){
    db.collection('rooms').doc(roomId).
    onSnapshot(snapshot => (setRoomName(snapshot.data().name)))
  }},[roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log('You typed >>> ',input);
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat_reciever"}`}>
          <span className="chat__name"> yaswanth panguluri </span>
          Hey Yaswanth
          <span className="chat__timestamp">3.52pm</span>
        </p>

      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>

        <Mic />
      </div>
    </div>
  );
}

export default Chat;
