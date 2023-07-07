import React, { useState } from "react";
import "./style/login.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import data from "./data";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [checkbox, setcheckbox] = useState();
  const [password, setpassword] = useState("");

  function signup() {
    data.map((d) =>
      d.Sheet1.map((patient) => {
        if (patient.name == name) {
          localStorage.setItem("data", JSON.stringify(patient));
          console.log(patient);
          location.reload();

          return;
        } else {
          console.log("false");
        }
      })
    );
  }

  function error(data) {
    alert(data);
    return "";
  }

  function error_control() {
    if (email === "") {
      error("email should not be empty!");
      return "";
    }

    if (password === "") {
      error("password should not be empty!");
      return "";
    }
    if (checkbox === false) {
      error("agree the terms and conditions");
      return "";
    }
  }
  return (
    <div className="login">
      <div className="container_1">
        <div className="header_login">
          <logo>
            <img src="applogo.jpg" alt="" />
            <text>
              <p>HealthCare</p> Platform
            </text>
          </logo>
        </div>
        <div className="login_info">
          <div className="info">
            <div className="option1">
              <div className="opt1_Com">
                <h>Log in</h>
                <p>
                  welcome to healthcare platform .please put your login
                  cradentials below to start using the app
                </p>
              </div>
              <div className="inputs">
                <div className="input_title1">
                  <text>Name</text>
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="input_title1">
                  <text>E-mail</text>
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                {/* <div className="input_title2">
                  <text>Password</text>
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div> */}
              </div>
            </div>
            <div className="option3">{/* <text>Forgot password?</text> */}</div>
            <div className="option4">
              <text>
                <input
                  type="checkbox"
                  onClick={(e) => setcheckbox(e.target.checked)}
                />
                Remember me
              </text>
              <button onClick={() => signup()}>Log in</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container_2">
        <div className="slider">
          <div className="slide">
            <div className="images">
              <div className="image">
                <img src="image7.jpg" alt="" />
              </div>
            </div>
            <div className="wesite_info">
              <div className="infoss">
                <div className="headerss">
                  <header>Health is wealth</header>
                </div>
                <div className="hos_info">
                  <p>
                    Welcome to healthcare platform.please put your login
                    platform.please put your login
                  </p>
                  <p>cradentials below to start using the app</p>
                </div>
              </div>
              <div className="radios">
                <button>{"<"} </button>
                <div className="radio_btns">
                  <input
                    className="radio1"
                    type="radio"
                    id="radio1"
                    name="age"
                    value="radio1"
                  />
                  {/* <label for="radio1" className="mau-b"></label> */}
                  <input
                    className="radio2"
                    type="radio"
                    id="radio2"
                    name="age"
                    value="radio2"
                  />
                  {/* <label for="radio2" className="mau-b"></label> */}
                  <input
                    className="radio3"
                    type="radio"
                    id="radio3"
                    name="age"
                    value="radio3"
                  />
                  {/* <label for="radio3" className="mau-b"></label> */}
                </div>
                <button>{">"} </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
