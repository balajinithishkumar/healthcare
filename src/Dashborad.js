import React, { useEffect, useState } from "react";
import "./style/dasgborad.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import BloodtypeOutlinedIcon from "@mui/icons-material/BloodtypeOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import InvertColorsOutlinedIcon from "@mui/icons-material/InvertColorsOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar } from "@mui/material";
function Dashborad() {
  const [date, setdate] = useState();
  const [patient, setpatient] = useState([]);
  useEffect(() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "." + dd + "." + yyyy;
    setdate(today);
  }, []);
  useEffect(() => {
    var patient_info = localStorage.getItem("data");
    setpatient(JSON.parse(patient_info));
  }, []);

  return (
    <div className="dashboard_c">
      <div className="dashborad1">
        <div className="dash_op1">
          <div className="info">
            <h1>Health Improvements</h1>
            <p>{date}</p>
          </div>
          <div className="search_icon">
            <SearchOutlinedIcon />
          </div>
        </div>
        <div className="dash_op2">
          <div className="Blood_p">
            <div className="b_p_1">
              <icon>
                <BloodtypeOutlinedIcon />
              </icon>
            </div>
            <div className="b_p_2">
              <div className="text_1">
                <p>Resting Blood pressure</p>
              </div>
              <div className="text_2">
                <p>1,6%</p>
              </div>
            </div>
            <div className="b_p_3">
              <number1>{patient.trestbps}</number1>
              <number2>/120</number2>
            </div>
            <div className="b_p_4">mmHg</div>
            <div className="b_p_5"></div>
          </div>

          <div className="Blood_s">
            <div className="b_p_1">
              <icon>
                <BloodtypeOutlinedIcon />
              </icon>
            </div>
            <div className="b_p_2">
              <div className="text_1">
                <p>Fasting Blood Sugar</p>
              </div>
              <div className="text_2">
                <p>3,2%</p>
              </div>
            </div>
            <div className="b_p_3">
              <number1>{patient.fbs}</number1>
              <number2>/160</number2>
            </div>
            <div className="b_p_4">mg/dL</div>
            <div className="b_p_5"></div>
          </div>
          <div className="Blood_d">
            <div className="b_p_1">
              <icon>
                <BloodtypeOutlinedIcon />
              </icon>
            </div>
            <div className="b_p_2">
              <div className="text_1">
                <p>Maximum heart rate achieved</p>
              </div>
              <div className="text_2">
                <p>0,3%</p>
              </div>
            </div>
            <div className="b_p_3">
              <number1>{patient.thalach}</number1>
              <number2>/250</number2>
            </div>
            <div className="b_p_4">mg/dL</div>
            <div className="b_p_5"></div>
          </div>
        </div>
        <div className="dash_op3">
          <div className="dash_op3_">
            <h>Report Condition</h>
          </div>
          <div className="report">
            <div className="rep_1">
              <img src="lungs.jpg"></img>
              <p>Asthma</p>
            </div>
            <div className="rep_2">
              <p>Chronic condition</p>
            </div>
            <div className="rep_3">
              <div className="opt1">
                <num>10.0%</num>
                <text1>last 1 year</text1>
              </div>
              <div className="opt2">
                <p></p>
              </div>
              <div className="opt3">
                <num>30.0%</num>
                <text1>last mouth</text1>
              </div>
            </div>
            <div className="rep_4">
              <button>Need Surgery!</button>
            </div>
            <div className="rep_5">
              <p>View Full Report</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashborad2">
        <div className="dash__com">
          <div className="d2_op_1">
            <div className="patient__">
              <p>Patient details</p>
            </div>
            <div className="dash_icon">
              <MoreVertIcon />
            </div>
          </div>
          <div className="d2_op_2">
            <div className="avatar">
              <Avatar src="" sx={{ width: 120, height: 120 }} />
            </div>
            <div className="pro_name">{patient.name}</div>
            <div className="pro_suffer">Chronic Asthma Sufferes</div>
          </div>
          <div className="d2_op_3">
            <div className="days1">
              <div className="days1_op1">
                <number>04</number>
                <p>Tuesday</p>
              </div>
              <div className="days1_op2">
                <p>--periodic inspection</p>
              </div>
              <div className="days1_op3">
                <p>See Details</p>
              </div>
            </div>
            <div className="days2">
              <div className="days1_op1">
                <number>07</number>
                <p>Friday</p>
              </div>
              <div className="days1_op2">
                <p>- periodic inspection</p>
              </div>
              <div className="days1_op3">
                <p>See Details</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d2_op_4">
          <div className="mental_head">
            <p>Mental Analysis</p>
          </div>
          <div className="mental_bar_graph"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashborad;
