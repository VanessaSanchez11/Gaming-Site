import "../styles/headerMenu.css";

const HeaderMenu = ({ setActivePage }) => {
  return (
    <div className="header-menu">
      <nav>
        <a href="#home" onClick={() => setActivePage("home")}>
          Home
        </a>
        <a href="#events" onClick={() => setActivePage("events")}>
          Eventos
        </a>
        <a href="#products" onClick={() => setActivePage("products")}>
          Productos
        </a>
        <a href="#about" onClick={() => setActivePage("foros")}>
          Foro
        </a>
      </nav>
    </div>
  );
};

export default HeaderMenu;
