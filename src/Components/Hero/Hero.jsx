import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateMeeting from "../Modals/CreateMeeting";
import JoinMeeting from "../Modals/JoinMeeting";
import "./hero.css";

const Hero = ({ meetName, meetNameOnChange }) => {
  const [joinMeetingModal, setjoinMeetingModal] = useState(false);
  const [createMeetingModal, setcreateMeetingModal] = useState(false);

  const openJoinMeetingModal = () => {
    setjoinMeetingModal(true);
    setcreateMeetingModal(false);
  };
  const openCreateMeetingModal = () => {
    setcreateMeetingModal(true);
    setjoinMeetingModal(false);
  };

  const closeModal = () => {
    setjoinMeetingModal(false);
    setcreateMeetingModal(false);
  };
  return (
    <>
      <div className="hero">
        <div className="hero-img">
          <img src="../images/hero_img.png" alt="" />
        </div>
        <div className="hero-intro">
          <h1>Join OR Create Meeting test </h1>
          <input type="button" value="Join" className="hero-btn" onClick={openJoinMeetingModal} />

          <input type="button" value="Host" className="hero-btn" onClick={openCreateMeetingModal} />

          <Link to={"signup"}>
            <input type="button" value="Sign Up" className="hero-btn" />
          </Link>
        </div>
      </div>
      {joinMeetingModal && <JoinMeeting closeModal={closeModal} meetName={meetName} setmeetName={meetNameOnChange} />}
      {createMeetingModal && <CreateMeeting closeModal={closeModal} />}
    </>
  );
};

export default Hero;
