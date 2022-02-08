import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationListCard from "../components/LocationListCard";
import { Row, Col } from "antd";

const style = { padding: "8px 0" };

const Locations = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then((response) => setLocations(response.data.results));
  }, []);
  return (
    <div>
      <Row gutter={16}>
        {locations.map(location => {
          return (
            <Col className="gutter-row" span={6} key={location.id}>
              <div style={style}>
                <LocationListCard dimension={location.dimension} type={location.type} residentCount={location.residents.length} />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Locations;
