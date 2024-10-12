import imagen1 from './imagenes/cien-anos-de-soledad.jpg';
import imagen2 from './imagenes/Rayuela_JC.jpg';
import imagen3 from './imagenes/La_Casa_de_los_espitirus.jpeg';
import imagen4 from './imagenes/El_Tunel.jpg';
import imagen5 from './imagenes/Sobre-La-Grama.jpg';
import imagen6 from './imagenes/Dracula.jpeg';
import imagen7 from './imagenes/Frankenstein_o_el_Prometeo_moderno.jpeg';
import imagen8 from './imagenes/it.jpg';
import imagen9 from './imagenes/Montanas_locura.jpeg';
import imagen10 from './imagenes/Entrevista_Vampiro.jpeg';
import imagen11 from './imagenes/El_temor_de_un_hombre_sabio.jpg';
import imagen12 from './imagenes/Dune.jpg';
import imagen13 from './imagenes/Fundacion.jpg';
import imagen14 from './imagenes/1984.jpeg';
import imagen15 from './imagenes/un-mundo-feliz.jpg';
import imagen16 from './imagenes/Churchill.jpg';
import imagen17 from './imagenes/Steve_Jobs.jpg';
import imagen18 from './imagenes/Hitler.jpg';
import imagen19 from'./imagenes/Diana.jpeg';
import imagen20 from './imagenes/Leonardo.jpeg';


const books = [
    

    {
      id: 1,
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      synopsis: "La historia de siete generaciones de la familia Buendía en el pueblo de Macondo.",
      categoria: "Latinoamérica",
      image: imagen1,
      available: false,
      genre: "Latinoamérica",
    },

    {
      id: 2,
      title: "Rayuela",
      author: "Julio Cortazar",
      synopsis: "Circulo amoroso entre Horacio, Lucía y La Maga",
      categoria: "Latinoamérica",
      image: imagen2,
      available: true,
      genre: "Latinoamérica",
    },
    {
      id: 3,
      title: "La Casa de los Espíritus",
      author: "Isabel Allende",
      synopsis: "Narra la historia de cuatro generaciones de la familia Trueba",
      categoria: "Latinoamérica",
      image: imagen3,
      available: true,
      genre: "Latinoamérica",
    },
    {
      id: 4,
      title: "El Túnel",
      author: "Ernesto Sábato",
      synopsis: "cuenta la historia de Juan Pablo Castel, un pintor que mata a su amante, María Iribarne, y que luego reflexiona en prisión sobre las causas de su crimen",
      categoria: "Latinoamérica",
      image: imagen4,
      available: true,
      genre: "Latinoamérica",
    },
    {
      id: 5,
      title: "Sobre La Grama",
      author: "Gioconda Belli",
      synopsis: "Obra poética que expresa la pasión de una forma que no se había visto antes",
      categoria: "Latinoamérica",
      image: imagen5,
      available: true,
      genre: "Latinoamérica",
    },

    {
      id: 6,
      title: "Drácula",
      author: "Bram Stocker",
      synopsis: "Antes de convertirse en un vampiro, el conde Drácula era el príncipe Vlad que, al enterarse de la muerte de su amada, vendió su alma al diablo.",
      categoria: "Terror",
      image: imagen6,
      available: true,
      genre: "Terror",
    },

    {
      id: 7,
      title: "Frankenstein",
      author: "Mary Shelley",
      synopsis: "Un científico que crea un monstruo a partir de restos de cadáveres y se arrepiente de su creación",
      categoria: "Terror",
      image: imagen7,
      available: true,
      genre: "Terror",
    },

    {
      id: 8,
      title: "IT",
      author: "Stephen King",
      synopsis: "Varios niños de una pequeña ciudad del estado de Maine se alían para combatir a una entidad diabólica que adopta la forma de un payaso y desde hace mucho tiempo emerge cada 27 años para saciarse de sangre infantil",
      categoria: "Terror",
      image: imagen8,
      available: true,
      genre: "Terror",
    },

    {
      id: 9,
      title: "En las Montañas de la Locura",
      author: "HP Lovecraft",
      synopsis: "Narra la historia de una expedición a la Antártida en la que un grupo de científicos descubre seres biológicos extraordinarios",
      categoria: "Terror",
      image: imagen9,
      available: true,
      genre: "Terror",
    },

    {
      id: 10,
      title: "Entrevista con el Vampiro",
      author: "Anne Rice",
      synopsis: "Louis de Pointe explica a Daniel Malloy, un periodista, cómo se convirtió en un vampiro doscientos años atrás",
      categoria: "Terror",
      image: imagen10,
      available: true,
      genre: "Terror",
    },

    {
      id: 11,
      title: "El Temor de un Hombre Sabio",
      author: "Patrick Rothfuss",
      synopsis: "Un joven cuenta su historia sobre cómo se convirtió en un mago legendario.",
      categoria: "Ciencia Ficción",
      image: imagen11,
      available: true,
      genre: "Ciencia Ficción",
    },

    {
      id: 12,
      title: "Dune",
      author: "Frank Herbert",
      synopsis: "Historia que cuenta el nacimiento de un mesias",
      categoria: "Ciencia Ficción",
      image: imagen12,
      available: true,
      genre: "Ciencia Ficción",
    },

    {
      id: 13,
      title: "La Fundación",
      author: "Issac Asimov",
      synopsis: "La humanidad conquista el universo y forma un imperiomque cae en decadencia",
      categoria: "Ciencia Ficción",
      image: imagen13,
      available: true,
      genre: "Ciencia Ficción",
    },

    {
      id: 14,
      title: "1984",
      author: "George Orwell",
      synopsis: "El Gran Hermano vigila todo, y la Policía del Pensamiento controla cada aspecto de la vida de los ciudadanos.",
      categoria: "Ciencia Ficción",
      image: imagen14,
      available: true,
      genre: "Ciencia Ficción",
    },

    {
      id: 15,
      title: "Un Mundo Felix",
      author: "Aldous Huxley",
      synopsis: "La sociedad vive en una felicidad artificial gracias a la droga soma, que anula la voluntad y las ideas de quienes la toman.",
      categoria: "Ciencia Ficción",
      image: imagen15,
      available: true,
      genre: "Ciencia Ficción",
    },

    {
      id: 16,
      title: "Churchill: La Biografía",
      author: "Anderw Roberts",
      synopsis: "La mejor biografía de Winston Churchill que se haya publicado. Andrew Roberts, considerado como el mejor historiador militar británico, ha podido utilizar para su trabajo una gran cantidad de documentos que ningún biógrafo había podido consultar con anterioridad.",
      categoria: "Ciencia Ficción",
      image: imagen16,
      available: true,
      genre: "Ciencia Ficción",
    },

    {
      id: 17,
      title: "Steve Jobs",
      author: "Walter Isaacson",
      synopsis: "La biografía autorizada del empresario informático Steve Jobs. ",
      categoria: "Biografía",
      image: imagen17,
      available: true,
      genre: "Biografía",
    },

    {
      id: 18,
      title: "Hitler",
      author: "Ian Kershaw",
      synopsis: "La biografía del gran dictador Alemán, protagonista de la segunda guerra mundial",
      categoria: "Biografía",
      image: imagen18,
      available: true,
      genre: "Biografía",
    },

    {
      id: 19,
      title: "Diana",
      author: "Andrew Morton",
      synopsis: "La biografía número uno en ventas del New York Times se ha convertido en un clásico literario único.",
      categoria: "Biografía",
      image: imagen19,
      available: true,
      genre: "Biografía",
    },

    {
      id: 20,
      title: "Leonardo DaVinci",
      author: "Walter Isaacson",
      synopsis: "El aclamado autor de los Bets Sellers Steve Jobs y Einstein nos vuelve a cautivar con la vida del genio más creativo de la historia en esta fascinante biografía",
      categoria: "Biografía",
      image: imagen20,
      available: true,
      genre: "Biografía",
    },

    {
      id: 2,
      title: "Rayuela",
      author: "Julio Cortazar",
      synopsis: "Circulo amoroso entre Horacio, Lucía y La Maga",
      categoria: "Latinoamérica",
      image: imagen2,
      available: true,
    },
    {
      id: 3,
      title: "La Casa de los Espíritus",
      author: "Isabel Allende",
      synopsis: "Narra la historia de cuatro generaciones de la familia Trueba",
      categoria: "Latinoamérica",
      image: imagen3,
      available: true,
    },
    {
      id: 4,
      title: "El Túnel",
      author: "Ernesto Sábato",
      synopsis: "cuenta la historia de Juan Pablo Castel, un pintor que mata a su amante, María Iribarne, y que luego reflexiona en prisión sobre las causas de su crimen",
      categoria: "Latinoamérica",
      image: imagen4,
      available: true,
    },
    {
      id: 5,
      title: "Sobre La Grama",
      author: "Gioconda Belli",
      synopsis: "Obra poética que expresa la pasión de una forma que no se había visto antes",
      categoria: "Latinoamérica",
      image: imagen5,
      available: true,
    },

    {
      id: 6,
      title: "Drácula",
      author: "Bram Stocker",
      synopsis: "Antes de convertirse en un vampiro, el conde Drácula era el príncipe Vlad que, al enterarse de la muerte de su amada, vendió su alma al diablo.",
      categoria: "Terror",
      image: imagen6,
      available: true,
    },

    {
      id: 7,
      title: "Frankenstein",
      author: "Mary Shelley",
      synopsis: "Un científico que crea un monstruo a partir de restos de cadáveres y se arrepiente de su creación",
      categoria: "Terror",
      image: imagen7,
      available: true,
    },

    {
      id: 8,
      title: "IT",
      author: "Stephen King",
      synopsis: "Varios niños de una pequeña ciudad del estado de Maine se alían para combatir a una entidad diabólica que adopta la forma de un payaso y desde hace mucho tiempo emerge cada 27 años para saciarse de sangre infantil",
      categoria: "Terror",
      image: imagen8,
      available: true,
    },

    {
      id: 9,
      title: "En las Montañas de la Locura",
      author: "HP Lovecraft",
      synopsis: "Narra la historia de una expedición a la Antártida en la que un grupo de científicos descubre seres biológicos extraordinarios",
      categoria: "Terror",
      image: imagen9,
      available: true,
    },

    {
      id: 10,
      title: "Entrevista con el Vampiro",
      author: "Anne Rice",
      synopsis: "Louis de Pointe explica a Daniel Malloy, un periodista, cómo se convirtió en un vampiro doscientos años atrás",
      categoria: "Terror",
      image: imagen10,
      available: true,
    },

    {
      id: 11,
      title: "El Temor de un Hombre Sabio",
      author: "Patrick Rothfuss",
      synopsis: "Un joven cuenta su historia sobre cómo se convirtió en un mago legendario.",
      categoria: "Ciencia Ficción",
      image: imagen11,
      available: true,
    },

    {
      id: 12,
      title: "Dune",
      author: "Frank Herbert",
      synopsis: "Historia que cuenta el nacimiento de un mesias",
      categoria: "Ciencia Ficción",
      image: imagen12,
      available: true,
    },

    {
      id: 13,
      title: "La Fundación",
      author: "Issac Asimov",
      synopsis: "La humanidad conquista el universo y forma un imperiomque cae en decadencia",
      categoria: "Ciencia Ficción",
      image: imagen13,
      available: true,
    },

    {
      id: 14,
      title: "1984",
      author: "George Orwell",
      synopsis: "El Gran Hermano vigila todo, y la Policía del Pensamiento controla cada aspecto de la vida de los ciudadanos.",
      categoria: "Ciencia Ficción",
      image: imagen14,
      available: true,
    },

    {
      id: 15,
      title: "Un Mundo Felix",
      author: "Aldous Huxley",
      synopsis: "La sociedad vive en una felicidad artificial gracias a la droga soma, que anula la voluntad y las ideas de quienes la toman.",
      categoria: "Ciencia Ficción",
      image: imagen15,
      available: true,
    },

    {
      id: 16,
      title: "Churchill: La Biografía",
      author: "Anderw Roberts",
      synopsis: "La mejor biografía de Winston Churchill que se haya publicado. Andrew Roberts, considerado como el mejor historiador militar británico, ha podido utilizar para su trabajo una gran cantidad de documentos que ningún biógrafo había podido consultar con anterioridad.",
      categoria: "Ciencia Ficción",
      image: imagen16,
      available: true,
    },

    {
      id: 17,
      title: "Steve Jobs",
      author: "Walter Isaacson",
      synopsis: "La biografía autorizada del empresario informático Steve Jobs. ",
      categoria: "Biografía",
      image: imagen17,
      available: true,
    },

    {
      id: 18,
      title: "Hitler",
      author: "Ian Kershaw",
      synopsis: "La biografía del gran dictador Alemán, protagonista de la segunda guerra mundial",
      categoria: "Biografía",
      image: imagen18,
      available: true,
    },

    {
      id: 19,
      title: "Diana",
      author: "Andrew Morton",
      synopsis: "La biografía número uno en ventas del New York Times se ha convertido en un clásico literario único.",
      categoria: "Biografía",
      image: imagen19,
      available: true,
    },

    {
      id: 20,
      title: "Leonardo DaVinci",
      author: "Walter Isaacson",
      synopsis: "El aclamado autor de los Bets Sellers Steve Jobs y Einstein nos vuelve a cautivar con la vida del genio más creativo de la historia en esta fascinante biografía",
      categoria: "Biografía",
      image: imagen20,
      available: true,
    },
    // Agrega más libros...
  ];
  
  export default books;
  