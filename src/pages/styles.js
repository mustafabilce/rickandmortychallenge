import styled from "styled-components";
import { Layout, Card, Divider, PageHeader } from "antd"

const { Header, Footer, Content } = Layout;

export const Body = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
  font-family: 'Roboto', sans-serif;
`;

export const StyledLayout = styled(Layout)`
  background-color: #fff;
`;

export const StyledHeader = styled(Header)`
  background-color: #f0f2f5;
  text-align: center;
`;

export const StyledContent = styled(Content)`
  padding: 30px 100px;
  background-color: #fff;
`;

export const StyledFooter = styled(Footer)`
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

export const StyledLocationCard = styled(Card)`
    margin-bottom: 15px;
`;

export const StyledCard = styled(Card)`
  text-align: center;
    & p {
        font-size: 12px;
        margin: 0;
            &:last-child {
                margin-bottom: 0;
            }
    }
`;

export const StyledDivider = styled(Divider)`
  margin: 10px;
`;

export const BoldText = styled.strong`
    color: #000;
`;

export const StyledPageHeader = styled(PageHeader)`
    padding: 0 15px 12px
`;