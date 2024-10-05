import imagen1 from '/home/andres/Documentos/Modulo_5/library/src/components/imagenes/el-nombre-del-viento.jpeg';
import imagen2 from '/home/andres/Documentos/Modulo_5/library/src/components/imagenes/cien-anos-de-soledad.jpg';

const books = [
    {
      id: 1,
      title: "El nombre del viento",
      author: "Patrick Rothfuss",
      synopsis: "Un joven cuenta su historia sobre cómo se convirtió en un mago legendario.",
      image: "imagen1",
      available: true,
    },
    {
      id: 2,
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      synopsis: "La historia de siete generaciones de la familia Buendía en el pueblo de Macondo.",
      image: "imagen2",
      available: false,
    },
    // Agrega más libros...
  ];
  
  export default books;
  