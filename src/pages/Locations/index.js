import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Button, Avatar } from "antd";
import { StyledLocationCard ,BoldText } from "../styles"
import LocationIcon from "../../assets/location-icon.png"

const { Meta } = StyledLocationCard;

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
        {locations.map((location) => {
          return (
            <Col className="gutter-row" span={8} key={location.id}>
              <StyledLocationCard
                actions={[
                  // Dynamic routing to residents page with location id
                  <Button type="link">
                    <Link to={`/locations/${location.id}`}>Select</Link>
                  </Button>,
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src={LocationIcon} />
                  }
                  description={[
                    <div>
                      <p>
                        <BoldText>Type:</BoldText> {location.type}{" "}
                      </p>
                      <p>
                        <BoldText>Dimension:</BoldText>{" "}
                        {location.dimension}{" "}
                      </p>
                      <p>
                        <BoldText>Resident Count:</BoldText>{" "}
                        {location.residents.length}{" "}
                      </p>
                    </div>,
                  ]}
                />
              </StyledLocationCard>
            </Col>
          );
        })}
      </Row>
  );
};

export default Locations;
