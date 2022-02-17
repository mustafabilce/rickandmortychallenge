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

export const StyledPageHeader = styled(PageHeader)`
    padding: 0 15px 12px
`;