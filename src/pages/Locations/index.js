import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Row, Col, Button, Card } from "antd";

const style = { padding: "8px 0" };
const { Meta } = Card;

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
        {locations.map((location) => {
          return (
            <Col className="gutter-row" span={6} key={location.id}>
              <Card
                style={{ marginBottom: '15px' }}
                title={location.type}
                actions={[
                  <Button type="link">
                    <Link to={`/locations/${location.id}`}>Select</Link>
                  </Button>,
                ]}
              >
                <p><strong>Dimension:</strong> {location.dimension}</p>
                <p style={{marginBottom: '0'}}><strong>Resident Count:</strong> {location.residents.length}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Locations;
