import React from "react";
import "./Chat.css";
import { Avatar,IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { AttachFile } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import { useState, useEffect } from "react";

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
        <h3>Room Name</h3>
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
      <div className="chat__body"></div>
      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;