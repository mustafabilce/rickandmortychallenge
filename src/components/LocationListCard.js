import { Link } from "react-router-dom";
import { Card } from "antd";

const LocationListCard = (props) => {
  const fontStyle = {
    fontSize: "14px",
    marginBottom: "5px",
    fontFamily: "'Open Sans', sans-serif",
  };
  return (
    <Card
      type="inner"
      title={props.type}
      extra={<Link to={props.type}>Residents</Link>}
    >
      <p style={fontStyle}>
        <strong>Dimension:</strong> {props.dimension}
      </p>
      <p style={fontStyle}>
        <strong>ResidentCount:</strong> {props.residentCount}
      </p>
    </Card>
  );
};

export default LocationListCard;
