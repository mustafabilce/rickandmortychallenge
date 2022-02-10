import { Routes, Route, Navigate } from "react-router-dom";
import Locations from "./pages/Locations";
import Residents from "./pages/Residents";
import "./App.css";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ backgroundColor: "#f0f2f5", textAlign: "center" }}>
          <h4>Rick and Morty</h4>
        </Header>
        <Content style={{ padding: "30px", backgroundColor: "#fff" }}>
          <Routes>
            <Route exact path="/locations" element={<Locations />} />
            <Route exact path="locations/:id" element={<Residents />} />
            <Route path="/" element={<Navigate to="/locations" replace />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
