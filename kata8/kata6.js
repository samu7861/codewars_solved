function estanEnamorados(florTimmy, florSarah) {
    // Verificar si una de las flores tiene un número par de pétalos y la otra un número impar
    const esParFlorTimmy = florTimmy % 2 === 0;
    const esParFlorSarah = florSarah % 2 === 0;
  
    // Si una de las flores tiene un número par de pétalos y la otra un número impar, están enamorados
    if ((esParFlorTimmy && !esParFlorSarah) || (!esParFlorTimmy && esParFlorSarah)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Ejemplo de uso:
  const florTimmy = 6;
  const florSarah = 8;
  
  if (estanEnamorados(florTimmy, florSarah)) {
    console.log("Timmy y Sarah están enamorados ❤️");
  } else {
    console.log("Timmy y Sarah no están enamorados 💔");
  }
  