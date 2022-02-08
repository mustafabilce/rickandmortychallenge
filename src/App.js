import { Routes, Route } from "react-router-dom";
import Locations from "./containers/Locations";
import Residents from "./containers/Residents";
import "./App.css";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ backgroundColor: '#f0f2f5', textAlign: "center" }}>
          Rick and Morty
        </Header>
        <Content style={{ padding: '30px', backgroundColor: '#fff' }}>
          <Routes>
            <Route path="/" element={<Locations />} />
            <Route path="residents" element={<Residents />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Footer
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
