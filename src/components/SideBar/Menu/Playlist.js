import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";

const Playlist = () => {
  const url = "http://zmdp.cloud/iseAlim/spotify.json";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data.allPlaylists);
      setData(response.data.allPlaylists);
    });
  }, []);

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Song Name</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, key) => (
          <tr key={key}>
            <td>{item.id}</td>
            <td>{item.description}</td>
            <td>{item.name}</td>
            <td>
              <a href={item.external_urls.spotify}>
                {item.external_urls.spotify}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Playlist;
