
function Paraula(paraula, horitzontal, posInicial, descripcio) {
  this.paraula = paraula;
  this.horitzontal = horitzontal;
  this.posInicial = posInicial;
  this.descripcio = descripcio;

  this.pintarcaselles = function () {
    let posicio = posInicial;
    for (let i = 0; i < paraula.length; i++) {
      let casella = document.getElementById(`casella ${posicio}`);
      let input = document.getElementById(`input ${posicio}`);
      casella.classList.add("activa");
      input.classList.remove("of");
      input.classList.add("on");
      let arrayPos = posicio.split(",");
      if (horitzontal) {
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
  };
}

const crucigrama = [];
let contestar = new Paraula("contestar", true, "1,5", "blablabla");
let tribus = new Paraula("tribus", false, "9,4", "blablabla");
let veure = new Paraula("veure", true, "3,3", "blablabla");
let crosta = new Paraula("crosta", false, "6,2", "blablabla");
let estisora = new Paraula("estisora", false, "4,3", "blablabla");
let ramses = new Paraula("ramses", true, "3,9", "blablakvdbalab");
crucigrama.push(contestar, tribus, veure, crosta, estisora, ramses);


const taula = {
  crearTaulell: function (num) {
    console.log(`hola`);
    const contenedorDiv = document.createElement("div");
    document.body.appendChild(contenedorDiv);
    contenedorDiv.className = "contenidor";
    for (let y = 0; y < num; y++) {
      const fila = document.createElement("div");
      contenedorDiv.appendChild(fila);
      fila.className = "fila";
      fila.id = `fila ${y + 1}`;
      for (let x = 0; x < num; x++) {
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
  },
  recorre: function (crucigrama, num) {
    for (let i = 0; i < crucigrama.length; i++) {
      if (num == 1) {
        crucigrama[i].pintarcaselles();
      } else {
        crucigrama[i].check();
      }
    }
  },
};

const nextfocus = document.querySelector('.casella input')
//nextfocus.addEventListener(keyUp)
//document.addEventListener('keydown', check);

/* const newTaulell = document.querySelector("button .newTaulell");
newTaulell.addEventListener(click, taula.crearTaulell(10));
 */
taula.crearTaulell(10);
taula.recorre(crucigrama, 1);


