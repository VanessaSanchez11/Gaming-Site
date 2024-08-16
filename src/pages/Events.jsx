import "./../styles/proximosEventos.css";

const Events = () => {
  const eventos = [
    {
      id: 1,
      imagen:
        "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/listings/GamesPLP_MWIII.webp",
      titulo: "Torneo de League of Legends",
      organizador: "Gaming World",
      descripcion: "Compite en el torneo de LoL más grande de la región.",
      lugar: "Centro de Convenciones",
      fecha: "25 de Septiembre, 2024",
      hora: "10:00 AM",
    },
    {
      id: 2,
      imagen:
        "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/listings/GamesPLP_WZ.webp",
      titulo: "Conferencia de Desarrolladores",
      organizador: "Tech Meet",
      descripcion:
        "Conoce las últimas tendencias en desarrollo de videojuegos.",
      lugar: "Auditorio Principal",
      fecha: "1 de Octubre, 2024",
      hora: "2:00 PM",
    },
    {
      id: 3,
      imagen:
        "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/listings/WZM_Hero_Crop_Square.webp",
      titulo: "Expo Gaming 2024",
      organizador: "Gamer Expo",
      descripcion: "Explora lo último en tecnología y juegos.",
      lugar: "Parque de Exposiciones",
      fecha: "10 de Octubre, 2024",
      hora: "9:00 AM",
    },
    {
      id: 4,
      imagen:
        "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5HMnEsc7eupPkmWZCw4NYy/0031812b27d3d291c3f6212f625473a4/ac-ezio-collection.jpg",
      titulo: "Torneo de League of Legends",
      organizador: "Gaming World",
      descripcion: "Compite en el torneo de LoL más grande de la región.",
      lugar: "Centro de Convenciones",
      fecha: "25 de Septiembre, 2024",
      hora: "10:00 AM",
    },
    {
      id: 5,
      imagen:
        "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/listings/GamesPLP_CODM.webp",
      titulo: "Conferencia de Desarrolladores",
      organizador: "Tech Meet",
      descripcion:
        "Conoce las últimas tendencias en desarrollo de videojuegos.",
      lugar: "Auditorio Principal",
      fecha: "1 de Octubre, 2024",
      hora: "2:00 PM",
    },
    {
      id: 6,
      imagen:
        "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5EBrXfSnjwvZRpDRtnqmpG/374f103250d4ed61cbb7f2323e063868/ac-valhalla.jpg",
      titulo: "Expo Gaming 2024",
      organizador: "Gamer Expo",
      descripcion: "Explora lo último en tecnología y juegos.",
      lugar: "Parque de Exposiciones",
      fecha: "10 de Octubre, 2024",
      hora: "9:00 AM",
    },
    {
      id: 7,
      imagen:
        "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/listings/GamesPLP_MWIII.webp",
      titulo: "Torneo de League of Legends",
      organizador: "Gaming World",
      descripcion: "Compite en el torneo de LoL más grande de la región.",
      lugar: "Centro de Convenciones",
      fecha: "25 de Septiembre, 2024",
      hora: "10:00 AM",
    },
    {
      id: 8,
      imagen:
        "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/listings/GamesPLP_WZ.webp",
      titulo: "Conferencia de Desarrolladores",
      organizador: "Tech Meet",
      descripcion:
        "Conoce las últimas tendencias en desarrollo de videojuegos.",
      lugar: "Auditorio Principal",
      fecha: "1 de Octubre, 2024",
      hora: "2:00 PM",
    },
    {
      id: 9,
      imagen:
        "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/listings/WZM_Hero_Crop_Square.webp",
      titulo: "Expo Gaming 2024",
      organizador: "Gamer Expo",
      descripcion: "Explora lo último en tecnología y juegos.",
      lugar: "Parque de Exposiciones",
      fecha: "10 de Octubre, 2024",
      hora: "9:00 AM",
    },
    {
      id: 10,
      imagen:
        "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5HMnEsc7eupPkmWZCw4NYy/0031812b27d3d291c3f6212f625473a4/ac-ezio-collection.jpg",
      titulo: "Torneo de League of Legends",
      organizador: "Gaming World",
      descripcion: "Compite en el torneo de LoL más grande de la región.",
      lugar: "Centro de Convenciones",
      fecha: "25 de Septiembre, 2024",
      hora: "10:00 AM",
    },
    {
      id: 11,
      imagen:
        "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/listings/GamesPLP_CODM.webp",
      titulo: "Conferencia de Desarrolladores",
      organizador: "Tech Meet",
      descripcion:
        "Conoce las últimas tendencias en desarrollo de videojuegos.",
      lugar: "Auditorio Principal",
      fecha: "1 de Octubre, 2024",
      hora: "2:00 PM",
    },
    {
      id: 12,
      imagen:
        "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5EBrXfSnjwvZRpDRtnqmpG/374f103250d4ed61cbb7f2323e063868/ac-valhalla.jpg",
      titulo: "Expo Gaming 2024",
      organizador: "Gamer Expo",
      descripcion: "Explora lo último en tecnología y juegos.",
      lugar: "Parque de Exposiciones",
      fecha: "10 de Octubre, 2024",
      hora: "9:00 AM",
    },
  ];

  return (
    <div className="proximos-eventos">
      <h2>Eventos</h2>
      <div className="eventos-container">
        {eventos.map((evento) => (
          <div key={evento.id} className="card">
            <img
              src={evento.imagen}
              alt={evento.titulo}
              className="card-image"
            />
            <div className="card-content">
              <h3>{evento.titulo}</h3>
              <p>
                <strong>Organizador:</strong> {evento.organizador}
              </p>
              <p>{evento.descripcion}</p>
              <p>
                <strong>Lugar:</strong> {evento.lugar}
              </p>
              <p>
                <strong>Fecha:</strong> {evento.fecha}
              </p>
              <p>
                <strong>Hora:</strong> {evento.hora}
              </p>
              <a className="add-event-btn">Añadir evento</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
