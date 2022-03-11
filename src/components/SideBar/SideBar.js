import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const SideBar = () => {
  return (
    <ListGroup>
      <ListGroupItem color="success">
        <Link to="/">Home</Link>
      </ListGroupItem>
      <ListGroupItem color="success">
        <Link to="/profile">Profile</Link>
      </ListGroupItem>
      <ListGroupItem color="success">
        <Link to="/playlist">Playlist</Link>
      </ListGroupItem>
    </ListGroup>
  );
};

export default SideBar;
