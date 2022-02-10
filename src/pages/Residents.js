import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Card, PageHeader } from "antd";

const Residents = () => {
  const { id } = useParams();
  const [residents, setResidents] = useState([]);
  const [selectedResidents, setSelectedResidents] = useState([]);

  const statusAlive = {
    color: "white",
    backgroundColor: "green",
    padding: "4px 10px",
    borderRadius: "3px",
  };

  const statusDead = {
    color: "white",
    backgroundColor: "red",
    padding: "4px 10px",
    borderRadius: "3px",
  };

  const statusUnkown = {
    color: "white",
    backgroundColor: "#9e9e9e",
    padding: "4px 10px",
    borderRadius: "3px",
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((response) => setResidents(response.data.residents));
  }, []);

  useEffect(async () => {
    await axios.all(residents.map((l) => axios.get(l))).then(
      axios.spread(function (...res) {
        setSelectedResidents(res);
      })
    );
  }, [residents]);
  return (
    <div>
      <PageHeader
      style={{padding: "0 15px 12px"}}
        onBack={() => window.history.back()}
        title="Locations"
        // subTitle="This is a subtitle"
      />
      <Row>
        {selectedResidents.map((selectedResident) => {
          return (
            <Col
              span={6}
              key={selectedResident.data.id}
              style={{ padding: "15px" }}
            >
              <Card
                cover={<img alt="example" src={selectedResident.data.image} />}
              >
                <p>
                  <strong>Name: </strong> {selectedResident.data.name}
                </p>
                <p>
                  <strong>Species: </strong> {selectedResident.data.species}
                </p>
                <p>
                  <strong>Type: </strong> {selectedResident.data.type}
                </p>
                <p>
                  <strong>Gender: </strong> {selectedResident.data.gender}
                </p>
                <p style={{ marginBottom: "0" }}>
                  <strong>Status: </strong> 
                  {selectedResident.data.status === "Dead" ? (
                    <span style={statusDead}>
                      <span>Dead</span>
                    </span>
                  ) : selectedResident.data.status === "Alive" ? (
                    <span style={statusAlive}>Alive</span>
                  ) : (
                    <span style={statusUnkown}>Unkown</span>
                  )}
                </p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Residents;
