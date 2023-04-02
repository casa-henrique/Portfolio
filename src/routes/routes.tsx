import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Home } from "../pages/Home";
import { RouteWrapper } from "../style/routeStyle";

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route
          path="/"
          element={
            <RouteWrapper>
              <Sidebar />
              <Home />
            </RouteWrapper>
          }
        />
      </Router>
    </BrowserRouter>
  );
}
