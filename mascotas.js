class Mascota {
  #nombre;
  especie;
  edad;

  constructor(nombre, especie, edad) {
    this.#nombre = nombre;
    this.especie = especie;
    this.edad = edad;
  }

  getNombre() {
    return this.#nombre;
  }

  cumplirAnios() {
    edad = edad + 1;
    console.log(`¡${this.#nombre} ahora tiene ${edad} años!`);
  }
}

const miGato = new Mascota("Mishi", "Gato", 3);

console.log("Nombre:", miGato.#nombre);
console.log("Especie:", miGato.especie);

miGato.cumplirAnios();
