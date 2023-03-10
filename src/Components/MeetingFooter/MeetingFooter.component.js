import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faVideo, faDesktop, faVideoSlash, faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";
import CallEndIcon from "@mui/icons-material/CallEnd";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./MeetingFooter.css";
const MeetingFooter = (props) => {
  const [streamState, setStreamState] = useState({
    mic: true,
    video: false,
    screen: false,
  });
  const micClick = () => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        mic: !currentState.mic,
      };
    });
  };

  const onVideoClick = () => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        video: !currentState.video,
      };
    });
  };

  const onScreenClick = () => {
    props.onScreenClick(setScreenState);
  };
  const endMeeting = () => {
    window.confirm("leave meeting?");
    window.location.href = "/";
  };

  const setScreenState = (isEnabled) => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        screen: isEnabled,
      };
    });
  };
  useEffect(() => {
    props.onMicClick(streamState.mic);
  }, [streamState.mic]);
  useEffect(() => {
    props.onVideoClick(streamState.video);
  }, [streamState.video]);
  return (
    <div className="meeting-footer">
      <div className={"meeting-icons " + (!streamState.mic ? "active" : "")} data-tip={streamState.mic ? "Mute Audio" : "Unmute Audio"} onClick={micClick}>
        <FontAwesomeIcon icon={!streamState.mic ? faMicrophoneSlash : faMicrophone} title="Mute" />
      </div>
      <div className={"meeting-icons " + (!streamState.video ? "active" : "")} data-tip={streamState.video ? "Hide Video" : "Show Video"} onClick={onVideoClick}>
        <FontAwesomeIcon icon={!streamState.video ? faVideoSlash : faVideo} title="Camera" />
      </div>
      <div className="meeting-icons" data-tip="Share Screen" onClick={onScreenClick} disabled={streamState.screen}>
        <FontAwesomeIcon icon={faDesktop} title="Share Screen" />
      </div>
      <div className="meeting-icons" style={{ backgroundColor: "#ea4335" }} data-tip="leave" onClick={endMeeting}>
        <CallEndIcon title="leave" />
      </div>
      <ReactTooltip />
    </div>
  );
};

export default MeetingFooter;
