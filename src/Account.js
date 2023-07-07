import React, { useEffect, useState } from "react";
import "./style/account.css";
import { Avatar } from "@mui/material";

function Account() {
  const [email, setemail] = useState();
  const [name, setname] = useState();
  useEffect(() => {
    var email = localStorage.getItem("email");
    var name = localStorage.getItem("name");
    setemail(email);
    setname(name);
  }, []);

  return (
    <div className="account">
      <div className="account_Contain">
        <div className="account_con1">
          <div className="account_info">
            <div className="avatar">
              <div className="_info">
                <Avatar src="doctor6.jpg" sx={{ width: 50, height: 50 }} />
              </div>
            </div>
            <div className="name_update">
              <div className="name">
                <name>{email} / General</name>
              </div>
              <div className="update">
                <p>update user name and manage your account </p>
              </div>
            </div>
          </div>
          <div className="gopro">
            <div className="text">
              <h>
                Go <p> Pro</p>
              </h>
            </div>
            <div className="discrp">
              <p>add power freatures for just Rs.199</p>
            </div>
          </div>
        </div>
        <div className="account_con2">
          <div className="account_general">
            <h>General</h>
            <p>Edit profile</p>
            <p>Password</p>
            <p>Social Profile</p>
            <p>Email Notification</p>
            <p>Sessions</p>
            <p>Applications</p>
            <p>Data Export</p>
            <h1></h1>
            <div className="account_button">
              <button>Delete Account</button>
            </div>
          </div>
          <div className="account_user">
            <div className="a_u_option1">
              <name>Username</name>
              <input type="text" value={name} />
            </div>
            <div className="a_u_option2">
              <name>Email</name>
              <input type="text" value={email} />
            </div>
            <div className="a_u_option3">
              <p>
                Check your email
                <h> {email} </h> to confirm your address--you can't access many
                of the site's features until confirmed
              </p>
              <div className="confirm_email">
                <h>
                  <h1>.</h1> Don't see any confirmation email?
                </h>
                <p> Resend email confirmation</p>
              </div>
            </div>
            <div className="Disable_ads">
              <p>
                Disable ads
                <button>pro</button>
              </p>
              <h>
                With a <p>pro</p> or
                <p>pro business</p>
                account you can disable ads accross the sites
              </h>
            </div>

            <div className="save_Changes">
              <button>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
