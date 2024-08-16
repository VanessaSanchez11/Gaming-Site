import { useState } from "react";
import "./App.css";
import HeaderMenu from "./components/HeaderMenu";
import Home from "./components/Home";
import ProductosDestacados from "./components/ProductosDestacados";
import ProximosEventos from "./components/ProximosEventos";
import Sidebar from "./components/Sidebar";
import Events from "./pages/Events";
import Products from "./pages/Products";

function App() {
  const [activePage, setActivePage] = useState("home"); // Estado para controlar la página activa

  return (
    <>
      <div className="container">
        <div className="sidebar-content">
          <Sidebar />
        </div>
        <div className="main-content">
          <HeaderMenu setActivePage={setActivePage} />
          {activePage === "home" && (
            <>
              <Home />
              <div className="container-content">
                <ProximosEventos />
                <ProductosDestacados />
              </div>
            </>
          )}
          {activePage === "events" && <Events />}
          {activePage === "products" && <Products />}
        </div>
      </div>
    </>
  );
}

export default App;
