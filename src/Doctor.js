import React from "react";
import { Avatar } from "@mui/material";
import "./style/doctor.css";
function Doctor({ img, profession, color, name }) {
  console.log(color);
  return (
    <div className="doctor">
      <div className="searchinfo">
        <div
          className="infos_S"
          style={{
            border: "1px solid black",
            padding: "2px",
          }}
        >
          <Avatar src={img} sx={{ width: 120, height: 120 }} />
        </div>

        <div className="s_f_name">
          <name> {name}</name>
        </div>
        <div className="profession">
          <h>{profession}</h>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
