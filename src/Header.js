import React, { useEffect, useState } from "react";
import "./style/header.css";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { Avatar } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Dashborad from "./Dashborad";
import Appoint from "./Appoint";
import Account from "./Account";
import Shop from "./Shop";
import axios from "axios";
import data from "./data";
function Header() {
  const [dash, setdash] = useState(true);
  const [appoin, setappoint] = useState();
  const [account, setaccount] = useState();
  const [shop, setshop] = useState();
  const [patient, setpatient] = useState([]);
  console.log(data);
  useEffect(() => {
    var patient_info = localStorage.getItem("data");
    setpatient(JSON.parse(patient_info));
  }, []);

  function getinfo(data) {
    if (data == "dash") {
      setdash(true);
      setappoint(false);
    }
    if (data == "appoin") {
      setappoint(true);
      setdash(false);
    }
    if (data == "account") {
      setappoint(false);
      setdash(false);
      setaccount(true);
    }
    if (data == "shop") {
      setappoint(false);
      setdash(false);
      setaccount(false);
      setshop(true);
    }
  }
  return (
    <div className="handle">
      <div className="header">
        <div className="com1">
          <div className="logo">
            <div className="img">
              <img src="applogo4.webp" alt="" />
            </div>
            <div className="logo_text">
              <p>Health </p>
              <h>care</h>
            </div>
          </div>
          <div className="menu">
            <div className="profile">
              <div className="avatar">
                <Avatar alt="" src="" />
              </div>
              <div className="profile_info">
                <name>{patient.name}</name>
                <level>Silver level</level>
              </div>
            </div>
            <div className="dashboard" onClick={() => getinfo("dash")}>
              <div className="options">
                <div className="dash_icon">
                  <GridViewOutlinedIcon />

                  <icon>Dashboard</icon>
                </div>
                <div className="drop_down_"></div>
              </div>
            </div>
            <div className="appointment" onClick={() => getinfo("appoin")}>
              <div className="options">
                <div className="dash_icon">
                  <BookOnlineOutlinedIcon />
                  <icon>Appointment</icon>
                </div>
                <div className="drop_down_"></div>
              </div>
            </div>

            <div className="Accounts">
              <div className="options">
                <div className="dash_icon" onClick={() => getinfo("account")}>
                  <Person2OutlinedIcon />

                  <icon>Accounts</icon>
                </div>
              </div>
            </div>
            <div className="Accounts">
              <div className="options">
                <div className="dash_icon" onClick={() => getinfo("shop")}>
                  <ShoppingBasketIcon />

                  <icon>Shop</icon>
                </div>
                <div className="drop_down_"></div>
              </div>
            </div>
          </div>
          <div className="preferences">
            <div className="topic"></div>
            <div className="option">
              <SettingsOutlinedIcon />

              <h1>Settings</h1>
            </div>
            <div className="option">
              <NotificationsOutlinedIcon />

              <h1>Notification</h1>
            </div>
            <div className="option">
              <HelpCenterOutlinedIcon />

              <h1>Help</h1>
            </div>
          </div>
        </div>
        <div className="comp_2">
          <div className="logout">
            <LogoutOutlinedIcon />
            <p
              onClick={() => {
                localStorage.setItem("data", "");
              }}
            >
              Log Out
            </p>
          </div>
        </div>
      </div>
      <div className="side_Com">
        {dash ? <Dashborad /> : ""}
        {appoin ? <Appoint /> : ""}
        {account ? <Account /> : ""}
        {shop ? <Shop /> : ""}
      </div>
    </div>
  );
}

export default Header;
