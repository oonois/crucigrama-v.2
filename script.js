class Paraula {
  constructor(paraula, horitzontal, posInicial, descripcio) {
    this.paraula = paraula;
    this.horitzontal = horitzontal;
    this.posInicial = posInicial;
    this.descripcio = descripcio;
  }
  getParaula() {
    return this.paraula;
  }
  getHoritzontal() {
    return this.horitzontal;
  }
  getPosIniacial() {
    return this.posInicial;
  }
  getDescripcio() {
    return this.descripcio;
  }
  setParaula(paraula) {
    this.paraula = paraula;
  }
  setHoritzontal(horitzontal) {
    this.horitzontal = horitzontal;
  }
  setPosIniacial(posInicial) {
    this.posInicial = posInicial;
  }
  setDescripcio(descripcio) {
    this.descripcio = descripcio;
  }
  pintarcaselles() {
    let posicio = this.posInicial;
    let casella = document.getElementById(`casella ${posicio}`);
    let input = document.getElementById(`input ${posicio}`);
    for (let i = 0; i < this.paraula.length; i++) {
      casella = document.getElementById(`casella ${posicio}`);
      input = document.getElementById(`input ${posicio}`);
      casella.classList.add("activa");
      input.classList.remove("of");
      input.classList.add("on");
      let arrayPos = posicio.split(",");
      if (this.horitzontal) {
        let ppos = arrayPos[0];
        arrayPos[0] = Number(ppos) + 1;
        posicio = arrayPos.join(",");
      } else {
        let ppos = arrayPos[1];
        arrayPos[1] = Number(ppos) + 1;
        posicio = arrayPos.join(",");
      }
      console.log(posicio);
      console.log("volta");
    }
  }
}

class Taula {
  constructor(dimensions, crucigrama) {
    this.dimensions = dimensions;
    this.crucigrama = crucigrama;
  }
  getDimensions() {
    return this.dimensions;
  }
  getCrucigrama() {
    return this.crucigrama;
  }
  setDimensions(dimensions) {
    this.dimensions = dimensions;
  }
  setCrucigrama(crucigrama) {
    this.crucigrama = crucigrama;
  }
  crearTaulell() {
    console.log(`hola`);
    const contenedorDiv = document.createElement("div");
    document.body.appendChild(contenedorDiv);
    contenedorDiv.className = "contenidor";
    for (let y = 0; y < this.dimensions; y++) {
      const fila = document.createElement("div");
      contenedorDiv.appendChild(fila);
      fila.className = "fila";
      fila.id = `fila ${y + 1}`;
      for (let x = 0; x < this.dimensions; x++) {
        const casella = document.createElement("div");
        fila.appendChild(casella);
        casella.className = "casella";
        casella.id = `casella ${x + 1},${y + 1}`;
        const input = document.createElement("input");
        casella.appendChild(input);
        input.className = "of";
        input.setAttribute("maxLength", 1);
        input.id = `input ${x + 1},${y + 1}`;
      }
    }
  }
  recorre(num) {
    for (let i = 0; i < this.crucigrama.length; i++) {
      if (num == 1) {
        this.crucigrama[i].pintarcaselles();
      } else {
        //this.crucigrama[i].check();
      }
    }
  }
  omplirCrucigrama() {
    //Lianan
    console.log(crucigrama);
  }
}
//provisional Omplint CRUCIGRAMA
const crucigrama = [];
let contestar = new Paraula;
contestar.setParaula('contestar');
contestar.setHoritzontal(true);
contestar.setPosIniacial('1,5');
contestar.setDescripcio('bklablalblab');

//let contestar = new Paraula("contestar", true, "1,5", "blablabla");
let tribus = new Paraula("tribus", false, "9,4", "blablabla");
let veure = new Paraula("veure", true, "3,3", "blablabla");
let crosta = new Paraula("crosta", false, "6,2", "blablabla");
let estisora = new Paraula("estisora", false, "4,3", "blablabla");
let ramses = new Paraula("ramses", true, "3,9", "blablakvdbalab");
crucigrama.push(contestar, tribus, veure, crosta, estisora, ramses);
console.log(crucigrama);

const taula = new Taula(10, crucigrama);

//const nextfocus = document.querySelector(".casella input");
//nextfocus.addEventListener(keyUp)
//document.addEventListener('keydown', check);

/* const newTaulell = document.querySelector("button .newTaulell");
newTaulell.addEventListener(click, taula.crearTaulell(10));
 */

taula.crearTaulell(10);
taula.recorre(1);
