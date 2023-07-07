import React from "react";
import "./style/appoint.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar } from "@mui/material";
import Doctor from "./Doctor";

function Appoint() {
  var data = [
    {
      image: "doctor1.jpg",
      name: "Misra Guptill",
      profession: "senior at orthopedic",
      color: "blue",
    },
    {
      image: "doctor2.jpg",
      name: "Amit vatkar",
      profession: "senior at orthopedic",
      color: "orange",
    },
    {
      image: "doctor3.jpg",
      name: " Sunita More ",
      profession: "senior at orthopedic",
      color: "lightgreen",
    },
    {
      image: "doctor4.jpg",
      name: "Santosh Kondekar",
      profession: "senior at orthopedic",
      color: "orange",
    },
    {
      image: "doctor5.jpg",
      name: "Rahul Gupta",
      profession: "senior at orthopedic",
      color: "blue",
    },
    {
      image: "doctor6.jpg",
      name: " Prajct Sao",
      profession: "senior at orthopedic",
      color: "orange",
    },
    {
      image: "doctor7.jpg",
      name: "Amruta Prabhu",
      profession: "senior at orthopedic",
      color: "lightgreen",
    },
    {
      image: "doctor8.jpg",
      name: " lena Mariana",
      profession: "senior at orthopedic",
      color: "blue",
    },
    {
      image: "doctor9.webp",
      name: "Elyssa Perry",
      profession: "senior at orthopedic",
      color: "orange",
    },
  ];
  return (
    <div classNaame="appoint">
      <div className="A_compo1">
        <div className="titles">
          <h1>Search Doctor, make an Appointment</h1>
          <p>
            Discover the best doctor , clinic & hospital the city nearst to you
          </p>
        </div>
        <div className="user_info">
          <div className="user_1">
            <div className="user_1_title">
              <p>(only for medical Treatments)</p>
            </div>
            <div className="treatment_">
              <h>Treatment inquiry for </h>
              <input type="radio" />
              <p1>Myself</p1>
              <input type="radio" />
              <p2>Someone</p2>
            </div>
          </div>
          <div className="user_2">
            <name>Name</name>
            <input type="text" placeholder="Patient name" />
          </div>
          <div className="user_3">
            <name>Phone or Email</name>
            <input type="text" placeholder="Phone or email" />
          </div>
          <div className="user_3">
            <name>Speciality</name>
            <input type="date" />
          </div>

          <div className="button">
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
      <div className="A_compo2">
        <div className="search">
          <div className="search_option1">
            <div className="name">
              <name>Search</name>
            </div>
            <div className="input">
              <input type="text" placeholder="Search" />
              <SearchOutlinedIcon />
            </div>
          </div>
          <div className="search_option2">
            <div className="name">
              <name>Country</name>
            </div>
            <div className="input">
              <input type="text" placeholder="Country" />
            </div>
          </div>
          <div className="search_option3">
            <div className="name">
              <name>District/State</name>
            </div>
            <div className="input">
              <input type="text" placeholder="Select a State" />
            </div>
          </div>
          <div className="search_option4">
            <div className="name">
              <name>Speciality</name>
            </div>
            <div className="input">
              <input type="text" placeholder="Select a Speciality" />
            </div>
            <div className="select"></div>
            <select
              id="cars"
              // style="padding: 10px; background:#edf2ff; border:none;"
              onChange={(e) => console.log(e.target.value)}
            >
              <option value="orthopedic">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div className="search_option5">
            <div className="mode">
              <h>Mode</h>
            </div>
            <div className="mode_radio">
              <div className="mode_radio_1">
                <input type="radio" />
                <p>Online</p>
              </div>
              <div className="mode_radio_2">
                <input type="radio" />
                <p>Ofline</p>
              </div>
            </div>
          </div>
        </div>
        <div className="search__info">
          <div className="__info">
            {data.map((d) => (
              <Doctor
                name={d.name}
                profession={d.profession}
                img={d.image}
                color={d.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appoint;
