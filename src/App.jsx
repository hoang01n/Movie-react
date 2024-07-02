// import "swiper/swiper.min.css";
// import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import {BrowserRouter, Route, Routes} from "react-router-dom";

import RoutesConfig from "./Config/Routes";
import MainLayout from "./Layout/Mainlayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            {RoutesConfig.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
