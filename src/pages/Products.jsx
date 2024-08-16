import "./../styles/productosDestacados.css";

const Products = () => {
  const productos = [
    {
      id: 1,
      imagen: "https://via.placeholder.com/150",
      titulo: "Mouse Gamer RGB",
      descripcion: "Mouse ergonómico con iluminación RGB personalizable.",
      precio: "$50",
      categoria: "Periféricos",
      stock: 10,
    },
    {
      id: 2,
      imagen: "https://via.placeholder.com/150",
      titulo: "Teclado Mecánico",
      descripcion:
        "Teclado mecánico con switches Cherry MX y retroiluminación.",
      precio: "$120",
      categoria: "Periféricos",
      stock: 5,
    },
    {
      id: 3,
      imagen: "https://via.placeholder.com/150",
      titulo: "Monitor 144Hz",
      descripcion:
        "Monitor de 24 pulgadas con frecuencia de actualización de 144Hz.",
      precio: "$200",
      categoria: "Monitores",
      stock: 8,
    },
    {
      id: 4,
      imagen: "https://via.placeholder.com/150",
      titulo: "Silla Gamer",
      descripcion: "Silla ergonómica con soporte lumbar ajustable.",
      precio: "$250",
      categoria: "Mobiliario",
      stock: 4,
    },
    {
      id: 5,
      imagen: "https://via.placeholder.com/150",
      titulo: "Headset Inalámbrico",
      descripcion: "Auriculares inalámbricos con micrófono integrado.",
      precio: "$80",
      categoria: "Audio",
      stock: 12,
    },
    {
      id: 6,
      imagen: "https://via.placeholder.com/150",
      titulo: "Tarjeta Gráfica RTX 3080",
      descripcion: "Tarjeta gráfica de alto rendimiento para gaming y diseño.",
      precio: "$700",
      categoria: "Hardware",
      stock: 3,
    },
    {
      id: 7,
      imagen: "https://via.placeholder.com/150",
      titulo: "Laptop Gamer",
      descripcion: "Laptop potente con procesador Intel i7 y GPU GTX 1660Ti.",
      precio: "$1500",
      categoria: "Computadoras",
      stock: 7,
    },
    {
      id: 8,
      imagen: "https://via.placeholder.com/150",
      titulo: "Disco Duro Externo 2TB",
      descripcion:
        "Almacenamiento externo con alta velocidad de transferencia.",
      precio: "$90",
      categoria: "Almacenamiento",
      stock: 20,
    },
  ];

  return (
    <div className="productos-destacados">
      <h2>Productos</h2>
      <div className="bento-grid">
        {productos.map((producto, index) => (
          <div key={producto.id} className={`bento-card card-${index + 1}`}>
            <img
              src={producto.imagen}
              alt={producto.titulo}
              className="bento-image"
            />
            <div className="bento-content">
              <h3>{producto.titulo}</h3>
              <p>
                <strong>Precio:</strong> {producto.precio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
