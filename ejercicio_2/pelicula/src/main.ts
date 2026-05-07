
/// <reference types="node" />
// Importación del módulo readline.
// Se utiliza para permitir interacción con el usuario
// mediante entrada de datos desde consola.
import * as readline from "readline";

// ============================================
// ENUMERACIONES
// ============================================

// Enumeración utilizada para representar
// géneros válidos dentro de la aplicación.
// Esto permite organizar los datos y evitar
// valores incorrectos escritos manualmente.
enum Genero {
  ACCION = "Acción",
  COMEDIA = "Comedia",
  DRAMA = "Drama",
  CIENCIA_FICCION = "Ciencia Ficción",
  TERROR = "Terror",
  ROMANCE = "Romance",
  ANIMACION = "Animación",
  AVENTURA = "Aventura"
}

// Enumeración utilizada para representar
// países de origen de las películas.
enum Pais {
  MEXICO = "México",
  ESTADOS_UNIDOS = "Estados Unidos",
  ESPAÑA = "España",
  ARGENTINA = "Argentina",
  JAPON = "Japón",
  FRANCIA = "Francia",
  REINO_UNIDO = "Reino Unido",
  COREA_DEL_SUR = "Corea del Sur"
}

// ============================================
// ESTRUCTURA DE PELÍCULA
// ============================================


// Tipo utilizado para definir la estructura
// de cada película almacenada en el sistema.
type Pelicula = {

  //Nomre de la película.
  titulo: string;
  //Género de la película, utilizando la enumeración Genero.
  genero: Genero;
  //País de origen de la película, utilizando la enumeración Pais.
  pais: Pais;
};

// ============================================
// DATOS 
// ============================================

// Arreglo principal donde se almacenan
// todas las películas utilizadas en la aplicación.
const peliculas: Pelicula[] = [
  {
    titulo: "Coco",
    genero: Genero.ANIMACION,
    pais: Pais.MEXICO
  },
  {
    titulo: "El Padrino",
    genero: Genero.DRAMA,
    pais: Pais.ESTADOS_UNIDOS
  },
  {
    titulo: "El Laberinto del Fauno",
    genero: Genero.AVENTURA,
    pais: Pais.ESPAÑA
  },
  {
    titulo: "Relatos Salvajes",
    genero: Genero.COMEDIA,
    pais: Pais.ARGENTINA
  },
  {
    titulo: "El Viaje de Chihiro",
    genero: Genero.ANIMACION,
    pais: Pais.JAPON
  },
  {
    titulo: "Amélie",
    genero: Genero.ROMANCE,
    pais: Pais.FRANCIA
  },
  {
    titulo: "Blade Runner",
    genero: Genero.CIENCIA_FICCION,
    pais: Pais.ESTADOS_UNIDOS
  },
  {
    titulo: "Parasite",
    genero: Genero.DRAMA,
    pais: Pais.COREA_DEL_SUR
  }
];

// ============================================
// FUNCIÓN PARA MOSTRAR LAS PELÍCULAS
// ============================================

// Función encargada de recorrer el arreglo
// y mostrar la información organizada en consola.
function mostrarPeliculas(listaPeliculas: Pelicula[]): void {
  console.log("\n╔════════════════════════════════════════════════════════╗");
  console.log("║           CATÁLOGO DE PELÍCULAS                        ║");
  console.log("╚════════════════════════════════════════════════════════╝\n");

  //Recorrido completo del arreglo de películas
  listaPeliculas.forEach((pelicula, index) => {

    //Mostrar número de resgistro
    console.log(`🎬 Película #${index + 1}`);

    //Mostrar detalles de cada película
    console.log(`   📝 Título: ${pelicula.titulo}`);
    console.log(`   🎭 Género: ${pelicula.genero}`);
    console.log(`   🌍 País: ${pelicula.pais}`);

    //Separador visual entre películas
    console.log("   " + "─".repeat(50));
  });

  //Mostar total de películas al final del listado
  console.log(`\n📊 Total de películas: ${listaPeliculas.length}\n`);
}
// ============================================
// CONFIGURACIÓN DE ENTRADA POR CONSOLA
// ============================================

// Creación de interfaz readline para permitir
// interacción con el usuario desde terminal.
const rl = readline.createInterface({

  // Entrada de datos desde teclado.
  input: process.stdin,

  // Salida de información hacia consola.
  output: process.stdout
});

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

// Mostrar inicialmente todo el catálogo disponible.
mostrarPeliculas(peliculas);

// ============================================
// FILTRO INTERACTIVO POR GÉNERO
// ============================================

// Solicitud de un género al usuario mediante consola.
rl.question("\nIngrese un género de película: ", (generoIngresado: string) => {

  // Filtrado del arreglo según el género ingresado.
  // Se utiliza toLowerCase() para evitar problemas
  // relacionados con mayúsculas y minúsculas.
  const peliculasFiltradas = peliculas.filter(
    p => p.genero.toLowerCase() === generoIngresado.toLowerCase()
  );

  // Verificación de resultados encontrados.
  if (peliculasFiltradas.length > 0) {

    console.log("\nPelículas encontradas:\n");

    // Mostrar únicamente películas filtradas.
    peliculasFiltradas.forEach(p => {
      console.log(`• ${p.titulo} (${p.pais})`);
    });

  } else {

    // Mensaje mostrado cuando no existen coincidencias.
    console.log("\nNo se encontraron películas para ese género.");
  }

  // Cierre de la interfaz readline para finalizar
  // correctamente la ejecución del programa.
  rl.close();
});