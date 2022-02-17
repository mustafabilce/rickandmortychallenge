import React from "react";
import { StyledLocationCard, BoldText } from "./styles";
import { Button, Avatar } from "antd";
import { Link } from "react-router-dom";
import LocationIcon from "../../assets/location-icon.png";

const { Meta } = StyledLocationCard;

const LocationCard = ({location}) => {
  return (
    <StyledLocationCard
      actions={[
        // Dynamic routing to residents page with location id
        <Button type="link">
          <Link to={`/locations/${location.id}`}>Select</Link>
        </Button>,
      ]}
    >
      <Meta
        avatar={<Avatar src={LocationIcon} />}
        description={[
          <div>
            <p>
              <BoldText>Type:</BoldText> {location.type}{" "}
            </p>
            <p>
              <BoldText>Dimension:</BoldText> {location.dimension}{" "}
            </p>
            <p>
              <BoldText>Resident Count:</BoldText> {location.residents.length}{" "}
            </p>
          </div>,
        ]}
      />
    </StyledLocationCard>
  );
};

export default LocationCard;
