import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import "./JoinMeeting.css";
import { Link, useParams, useSearchParams } from "react-router-dom";

const JoinMeeting = ({ closeModal, meetName, meetNameOnChange }) => {
  const [meetID, setmeetID] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // setSearchParams({ name: meetName });
  };
  // const joinMeeting = (e) => {
  //   e.preventDefault();
  //   setmeetName(e.target.value);
  // };
  let { meetingID } = useParams();
  return (
    <div className="join_meeting">
      <div className="join-form-wrapper">
        <div className="modal_head">
          <h2> Join Meeting</h2>
          <div className="closeModal" onClick={closeModal}>
            {" "}
            <CloseIcon />{" "}
          </div>
        </div>
        <form action="" onSubmit={handleSubmit} className="form">
          <div className="meeting-name">
            <TextField required autoComplete="true" type="text" className="meeting-name" id="meeting-name" label="Meeting Name" name="meeting-name" onChange={(e) => meetNameOnChange(e)} value={meetName} />
          </div>
          <div className="meeting-id">
            <TextField required autoComplete="true" className="meeting-id" id="meeting-id" label="Meeting Id" name="meeting-id" type="text" onChange={(e) => setmeetID(e.target.value)} value={meetID} />
          </div>
          <div className="join-button">
            <button type="submit" className="input-button">
              <a href={`/meeting/?id=${meetID}`}>JOIN</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinMeeting;
