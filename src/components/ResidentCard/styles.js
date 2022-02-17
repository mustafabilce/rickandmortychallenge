import styled from "styled-components";
import { Card, Divider } from "antd"

export const StyledCard = styled(Card)`
text-align: center;
`;

export const StatusStyle = styled.span`
    height: 10px;
    width: 10px;
    background-color: ${ props => props.dead ? "#de2f1f" : props.alive ? "#29cf55" : "#bdbdbd" };
    display: inline-block;
    border-radius: 50%;
    margin: 0 5px;
`;

export const StyledDivider = styled(Divider)`
  margin: 10px;
`;

export const Subtitle = styled.p`
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 0;
`;

export const CharacterText = styled.p`
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 0;
`;