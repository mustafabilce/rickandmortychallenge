import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "antd";
import { LocationCard } from "../../components";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  // Get all locations
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then((response) => setLocations(response.data.results));
  }, []);

  return (
    <Row gutter={16}>
      {locations.map((location, index) => {
        return (
          <Col className="gutter-row" span={8} key={index}>
            <LocationCard location={location} />
          </Col>
        );
      })}
    </Row>
  );
};

export default Locations;
