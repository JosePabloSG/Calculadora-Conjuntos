// Función auxiliar para dividir y limpiar los elementos ingresados por el usuario
function splitAndTrim(input) {
  return input.split(",").map((element) => element.trim());
}

// Objeto que contiene las operaciones de conjuntos
const SetOperations = {
  // Realiza la operación de unión entre dos conjuntos
  union: (setA, setB) => Array.from(new Set([...setA, ...setB])),

  // Realiza la operación de intersección entre dos conjuntos
  intersection: (setA, setB) =>
    setA.filter((element) => setB.includes(element)),

  // Realiza la operación de complemento entre dos conjuntos
  complement: (setA, setB) => setA.filter((element) => !setB.includes(element)),

  // Realiza la operación de diferencia entre dos conjuntos
  difference: (setA, setB) => setA.filter((element) => !setB.includes(element)),
};

// Función principal para interactuar con la interfaz HTML
function main() {
  // Obtener referencias a los elementos de la interfaz HTML
  const setAInput = document.getElementById("setA");
  const setBInput = document.getElementById("setB");
  const resultElement = document.getElementById("result");
  const unionBtn = document.getElementById("unionBtn");
  const interseccionBtn = document.getElementById("interseccionBtn");
  const complementoBtn = document.getElementById("complementoBtn");
  const diferenciaBtn = document.getElementById("diferenciaBtn");

  // Manejador genérico para realizar una operación de conjunto
  function handleSetOperation(operation) {
    // Obtener conjuntos de entrada y ejecutar la operación
    const setA = splitAndTrim(setAInput.value);
    const setB = splitAndTrim(setBInput.value);

    let result;

    if (
      operation === SetOperations.difference ||
      operation === SetOperations.complement
    ) {
      if (
        prompt(
          "¿Qué conjunto desea utilizar para la operación? Ingrese 'A' o 'B'"
        ) === "A"
      ) {
        result = operation(setB,setA);
      } else {
        result = operation(setA,setB);
      }
    } else {
      result = operation(setA, setB);
    }

    resultElement.textContent = result.join(", ");

    resultElement.textContent = result.join(", ");
  }

  // Asociar manejadores de eventos a los botones de operaciones de conjunto
  unionBtn.addEventListener("click", () => {
    handleSetOperation(SetOperations.union);
  });

  interseccionBtn.addEventListener("click", () => {
    handleSetOperation(SetOperations.intersection);
  });

  complementoBtn.addEventListener("click", () => {
    handleSetOperation(SetOperations.complement);
  });

  diferenciaBtn.addEventListener("click", () => {
    handleSetOperation(SetOperations.difference);
  });
}

// Inicialización del script cuando se carga la página
document.addEventListener("DOMContentLoaded", main);
