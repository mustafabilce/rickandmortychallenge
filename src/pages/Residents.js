import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Row, Col } from "antd";
import {
  StyledCard,
  StatusStyle,
  StyledDivider,
  StyledPageHeader,
} from "./styles";

const Residents = () => {
  const { id } = useParams();
  const [residents, setResidents] = useState([]);
  const [selectedResidents, setSelectedResidents] = useState([]);

  // Get characters api url in this location
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((response) => setResidents(response.data.residents));
  }, [id]);

  // Characters urls mapped, get data for each character
  useEffect(() => {
    axios.all(residents.map((singleCharacter) => axios.get(singleCharacter))).then(
      axios.spread(function (...res) {
        setSelectedResidents(res);
      })
    );
  }, [residents]);
  return (
    <div>
      <StyledPageHeader
        onBack={() => window.history.back()}
        title="Locations"
      />
      <Row>
        {selectedResidents.map((selectedResident) => {
          return (
            <Col
              span={6}
              key={selectedResident.data.id}
              style={{ padding: "15px" }}
            >
              <StyledCard
                size="small"
                cover={<img alt="example" src={selectedResident.data.image} />}
              >
                <p>
                  <strong>Name </strong> <br />{" "}
                  <span>{selectedResident.data.name}</span>
                </p>
                <StyledDivider />
                <p>
                  <strong>Species </strong> <br />{" "}
                  <span>{selectedResident.data.species}</span>
                </p>
                <StyledDivider />
                <p>
                  <strong>Type </strong> <br />{" "}
                  {selectedResident.data.type === "" ? (
                    <span>Unknown </span>
                  ) : (
                    <span>{selectedResident.data.type}</span>
                  )}
                </p>
                <StyledDivider />
                <p>
                  <strong>Gender </strong> <br />{" "}
                  <span>{selectedResident.data.gender}</span>
                </p>
                <StyledDivider />
                <p>
                  <strong>Origin Name </strong> <br />{" "}
                  <span>{selectedResident.data.origin.name}</span>
                </p>
                <StyledDivider />
                <p>
                  <strong>Origin Url </strong> <br />{" "}
                  {selectedResident.data.origin.url === "" ? (
                    <span>Unknown </span>
                  ) : (
                    <span>{selectedResident.data.origin.url}</span>
                  )}
                </p>
                <StyledDivider />
                {/* Conditional rendering by status */}
                <p>
                  <strong>Status </strong> <br />
                  {selectedResident.data.status === "Dead" ? (
                    <span>
                      <StatusStyle dead /> {selectedResident.data.status}
                    </span>
                  ) : selectedResident.data.status === "Alive" ? (
                    <span>
                      <StatusStyle alive /> {selectedResident.data.status}{" "}
                    </span>
                  ) : (
                    <span>
                      <StatusStyle Unknown /> {selectedResident.data.status}{" "}
                    </span>
                  )}
                </p>
              </StyledCard>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Residents;
