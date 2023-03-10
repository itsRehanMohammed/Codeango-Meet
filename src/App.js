import { BrowserRouter as Router, Routes, Route, useParams, useSearchParams } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Components/Login and SignUp/Login";
import Signup from "./Components/Login and SignUp/Signup";
import Home from "./Pages/Home";
import MainScreen from "./Components/MainScreen/MainScreen.component";
import dbRef, { db, connectedRef, userName } from "./server/firebase";
import { useEffect, useState } from "react";
import { setMainStream, addParticipant, setUser, removeParticipant, updateParticipant } from "./store/actioncreator";
import { connect } from "react-redux";

function App(props) {
  const [meetName, setmeetName] = useState("");
  const meetNameOnChange = (e) => {
    setmeetName(e.target.value);
  };
  // const getUserStream = async () => {
  //   const localStream = await navigator.mediaDevices.getUserMedia({
  //     audio: true,
  //     video: true,
  //   });

  //   return localStream;
  // };
  const participantRef = dbRef.child("participants");
  // let { meetingName } = useParams();
  console.log(meetName);
  useEffect(() => {
    // const stream = await getUserStream();
    // stream.getVideoTracks()[0].enabled = false;
    // props.setMainStream(stream);
    connectedRef.on("value", (snap) => {
      if (snap.val()) {
        const defaultPreference = {
          audio: true,
          video: false,
          screen: false,
        };
        const userRef = participantRef.push({
          userName: meetName,
          preferences: defaultPreference,
        });
        // props.setUser({
        //   [userRef.key]: { name: userName, ...defaultPreference },
        // });
        userRef.onDisconnect().remove();
      }
    });
  }, []);

  // const connectedRef = db.database().ref(".info/connected");
  // const participantRef = dbRef.child("participants");

  // const isUserSet = !!props.user;
  // const isStreamSet = !!props.stream;

  // useEffect(() => {
  //   if (isStreamSet && isUserSet) {
  //     participantRef.on("child_added", (snap) => {
  //       const preferenceUpdateEvent = participantRef.child(snap.key).child("preferences");
  //       preferenceUpdateEvent.on("child_changed", (preferenceSnap) => {
  //         props.updateParticipant({
  //           [snap.key]: {
  //             [preferenceSnap.key]: preferenceSnap.val(),
  //           },
  //         });
  //       });
  //       const { userName: name, preferences = {} } = snap.val();
  //       props.addParticipant({
  //         [snap.key]: {
  //           name,
  //           ...preferences,
  //         },
  //       });
  //     });
  //     participantRef.on("child_removed", (snap) => {
  //       props.removeParticipant(snap.key);
  //     });
  //   }
  // }, [isStreamSet, isUserSet]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home meetName={meetName} setmeetName={meetNameOnChange} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/meeting" element={<MainScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     stream: state.mainStream,
//     user: state.currentUser,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setMainStream: (stream) => dispatch(setMainStream(stream)),
//     addParticipant: (user) => dispatch(addParticipant(user)),
//     setUser: (user) => dispatch(setUser(user)),
//     removeParticipant: (userId) => dispatch(removeParticipant(userId)),
//     updateParticipant: (user) => dispatch(updateParticipant(user)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
