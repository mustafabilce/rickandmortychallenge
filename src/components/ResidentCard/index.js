import React from "react";
import {
  StyledCard,
  StatusStyle,
  StyledDivider,
  Subtitle,
  CharacterText,
} from "./styles";

const ResidentCard = ({ selectedResident }) => {
  return (
    <StyledCard
      size="small"
      cover={<img alt="example" src={selectedResident.image} />}
    >
      <Subtitle>Name</Subtitle>
      <CharacterText>{selectedResident.name}</CharacterText>
      <StyledDivider />
      <Subtitle>Species</Subtitle>
      <CharacterText>{selectedResident.species}</CharacterText>
      <StyledDivider />
      <Subtitle>Type</Subtitle>
      <CharacterText>
        {selectedResident.type === "" ? (
          <span>Unknown </span>
        ) : (
          <span>{selectedResident.type}</span>
        )}
      </CharacterText>
      <StyledDivider />
      <Subtitle>Gender</Subtitle>
      <CharacterText>{selectedResident.gender}</CharacterText>
      <StyledDivider />
      <Subtitle>Origin Name</Subtitle>
      <CharacterText>{selectedResident.origin.name}</CharacterText>
      <StyledDivider />

      <Subtitle>Origin Url</Subtitle>
      <CharacterText>
        {selectedResident.origin.url === "" ? (
          <span>Unknown </span>
        ) : (
          <span>{selectedResident.origin.url}</span>
        )}
      </CharacterText>
      <StyledDivider />
      {/* Conditional rendering by status */}

      <Subtitle>Status</Subtitle>
      <CharacterText>
        {selectedResident.status === "Dead" ? (
          <span>
            <StatusStyle dead /> {selectedResident.status}
          </span>
        ) : selectedResident.status === "Alive" ? (
          <span>
            <StatusStyle alive /> {selectedResident.status}{" "}
          </span>
        ) : (
          <span>
            <StatusStyle Unknown /> {selectedResident.status}{" "}
          </span>
        )}
      </CharacterText>
    </StyledCard>
  );
};

export default ResidentCard;
