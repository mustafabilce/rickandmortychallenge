import { Routes, Route, Navigate } from "react-router-dom";
import Locations from "./pages/Locations";
import Residents from "./pages/Residents";
import "./App.css";
import { Body, StyledLayout, StyledHeader, StyledContent, StyledFooter } from "./pages/styles"

function App() {
  return (
    // Project layout
    <Body>
      <StyledLayout>
        <StyledHeader>
          <h4>Rick and Morty</h4>
        </StyledHeader>
        <StyledContent>
          <Routes>
            <Route exact path="/locations" element={<Locations />} />
            {/* Residents page dynamically determined */}
            <Route exact path="locations/:id" element={<Residents />} />
            {/* Default page redirected to locations page */}
            <Route path="/" element={<Navigate to="/locations" replace />} />
          </Routes>
        </StyledContent>
        <StyledFooter>
          <h4>Footer</h4>
        </StyledFooter>
      </StyledLayout>
    </Body>
  );
}

export default App;
