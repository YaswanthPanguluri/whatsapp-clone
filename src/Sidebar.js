import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { DonutLarge } from "@mui/icons-material";
import { Chat } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import SidebarChat from "./SidebarChat";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text"></input>
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat addNewChat/>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
