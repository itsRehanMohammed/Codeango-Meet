import React from "react";
import TextField from "@mui/material/TextField";
import "./JoinMeeting.css";
const JoinMeeting = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <div className="join_meeting">
      <h1> Join Meeting</h1>
      <div className="join-form-wrapper">
        <form action="" onSubmit={handleSubmit} className="form">
          <div className="meeting-name">
            <TextField required autoComplete="true" type="text" className="meeting-name" id="meeting-name" label="Enter Your Name" name="meeting-name" />
          </div>
          <div className="meeting-id">
            <TextField required autoComplete="true" className="meeting-id" id="meeting-id" label="Meeting Id" name="meeting-id" type="text" />
          </div>
          <div className="join-button">
            <button type="submit" className="input-button">
              JOIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinMeeting;
