import React from "react";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import "./JoinMeeting.css";
import { Link } from "react-router-dom";
const CreateMeeting = ({ closeModal }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };
  return (
    <div className="create_meeting">
      <div className="create-form-wrapper">
        <div className="modal_head">
          <h2> Create Meeting</h2>
          <div className="closeModal" onClick={closeModal}>
            {" "}
            <CloseIcon />{" "}
          </div>
        </div>
        <form action="" onSubmit={handleSubmit} className="form">
          <div className="host-name">
            <TextField required autoComplete="true" type="text" className="host-name" id="host-name" label="Host Name" />
          </div>
          {/* <div className="meeting-id">
            <TextField required autoComplete="true" className="meeting-id" id="meeting-id" label="Meeting Id" name="meeting-id" type="text" />
          </div> */}
          <div className="create-button">
            <button type="submit" className="input-button">
              <Link to={`meeting/:${new Date().getFullYear() * Math.round(100 * Math.random())}`}>Create Meeting</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMeeting;
