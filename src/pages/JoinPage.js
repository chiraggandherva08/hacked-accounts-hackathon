import React from "react";
import "./style.css";

const validator = require("validator");

const JoinPage = () => {

  setInterval(() => {
    const email = document.getElementById("email-input").value;
    const userName = document.getElementById("user-name").value;
    const joinBtn = document.querySelector("#join-btn");

    if (email.trim().toLowerCase() == "" || userName.trim().toLowerCase() == "" || validator.isEmail(email) == false) {
      joinBtn.disabled = true;
      joinBtn.style.cursor = "not-allowed";
      joinBtn.style.backgroundColor = "rgb(224, 153, 82)";
    }
    else {
      joinBtn.style.cursor = "pointer";
      joinBtn.style.backgroundColor = "rgb(153, 224, 82)";
      joinBtn.disabled = false;
    }

  }, 50);

  const joinMeeting = () => {
    const email = document.getElementById("email-input").value;
    const userName = document.getElementById("user-name").value;
  }

  return (
    <div id="join-page">
      <h1>Join Ongoing-Class</h1>
      <input id="email-input" type="email" placeholder="Enter your email: "/>
      <input id="user-name" type="text" placeholder="Enter name: " />
      <button id="join-btn" onClick={() => {
        joinMeeting()
      }} >Join</button>
    </div>
  );
}

export default JoinPage;