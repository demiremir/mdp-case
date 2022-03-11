import React from "react";
import ReactDOM from "react-dom";
import SideBar from "./components/SideBar/SideBar";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row } from "reactstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/SideBar/Menu/Home";
import Profile from "./components/SideBar/Menu/Profile";
import Playlist from "./components/SideBar/Menu/Playlist";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Container>
        <Row className="mt-5">
          <Col xs="3">
            <SideBar />
          </Col>
          <Col xs="9">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/playlist" element={<Playlist />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
