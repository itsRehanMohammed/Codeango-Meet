import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Components/Login and SignUp/Login";
import Signup from "./Components/Login and SignUp/Signup";
import Service from "./Pages/Service";
import Home from "./Pages/Home";
import JoinMeeting from "./Components/JoinMeeting/JoinMeeting";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/join" element={<JoinMeeting />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
