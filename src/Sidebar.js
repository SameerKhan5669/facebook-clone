import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import StorefrontIcon from "@material-ui/icons/Storefront";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import ChatIcon from "@material-ui/icons/Chat";

import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";

function Sidebar() {
  return (
    <div>
      {/* <SidebarRow src={user.photoURL} title={user.displayName} /> */}
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />

      <SidebarRow Icon={PeopleIcon} title="Friends" />

      <SidebarRow Icon={ChatIcon} title="Messenger" />

      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />

      <SidebarRow Icon={VideoLibraryIcon} title="Vidoes" />

      <SidebarRow Icon={ExpandMoreOutlined} title="Pages" />
    </div>
  );
}

export default Sidebar;
