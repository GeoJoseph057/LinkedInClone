import { connect } from "react-redux";
import { useEffect } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import MyNetwork from "./components/MyNetwork";
import Jobs from "./components/Jobs";
import Messaging from "./components/Messaging";
import Notifications from "./components/Notifications";
import { getUserAuth } from "./actions/index";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <>
                <Header />
                <Profile />
              </>
            }
          ></Route>
          <Route
            path="/network"
            element={
              <>
                <Header />
                <MyNetwork />
              </>
            }
          ></Route>
          <Route
            path="/jobs"
            element={
              <>
                <Header />
                <Jobs />
              </>
            }
          ></Route>
          <Route
            path="/messaging"
            element={
              <>
                <Header />
                <Messaging />
              </>
            }
          ></Route>
          <Route
            path="/notifications"
            element={
              <>
                <Header />
                <Notifications />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
