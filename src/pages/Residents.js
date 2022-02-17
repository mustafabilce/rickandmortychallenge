import React, { useEffect, useState } from "react";
import { api } from "../api";
import { ResidentCard } from "../components"
import { useParams } from "react-router-dom";
import { Row, Col } from "antd";
import { StyledPageHeader } from "./styles";

const Residents = () => {
  const { id } = useParams();
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(true)
  const [selectedResidents, setSelectedResidents] = useState([]);

  useEffect(() => {
    getLocation();
    getResidents();
  },[location]);

  const getLocation = () => {
    api()
      .get(`/location/${id}`)
      .then((response) =>
        setLocation(
          response.data.residents
            .join("")
            .toString()
            .split("https://rickandmortyapi.com/api/character/")
            .toString()
            .replace(/^,/, "")
        )
      );
      setLoading(false);
  }

  const getResidents = () => {
    if (loading === false) {
      api()
      .get(`/character/${location}`)
      .then((response) => setSelectedResidents(response.data));
    }
  }

  if(loading === false) {
    return (
      <div>
        <div>
        <StyledPageHeader
          onBack={() => window.history.back()}
          title="Locations"
        />
        <Row>
          {selectedResidents.map((selectedResident) => {
            return (
              <Col
                span={8}
                key={selectedResident.id}
                style={{ padding: "15px" }}
              >
                <ResidentCard selectedResident={selectedResident} />
              </Col>
            );
          })}
        </Row>
      </div>
      </div>
    );
  } else {
    return (
      <h1>LOADING</h1>
    )
  }
  
};

export default Residents;
