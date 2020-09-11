import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const axios = require("axios").default;

function History(props) {
  const [cabHistory, setHistory] = useState({
    isLoad: false,
    status: 0,
    data: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/history/${props.userId}`)
      .then(function (response) {
        if (response.status === 200) {
          setHistory({ isLoad: true, data: response.data, status: 200 });
        } else if (response.status === 204) {
          setHistory({ isLoad: false, data: response.data, status: 204 });
        }

        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [1]);

  return (
    <div>
      {cabHistory.isLoad === true && cabHistory.status === 200 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Cab Number</th>
              <th>Pick-up Location</th>
              <th>Drop Location</th>
            </tr>
          </thead>
          <tbody>
            <>
              {cabHistory.data.map((val, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{val.cab_no}</td>
                    <td>{val.pickup_loc}</td>
                    <td>{val.drop_loc}</td>
                  </tr>
                );
              })}
            </>
          </tbody>
        </Table>
      ) : cabHistory.status === 204 ? (
        <>Not found</>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}

export default History;
