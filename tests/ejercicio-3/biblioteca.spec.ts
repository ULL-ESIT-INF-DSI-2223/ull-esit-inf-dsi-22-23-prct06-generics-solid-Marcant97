import "mocha";
import { expect } from "chai";
import { Grupo, Solista } from "../../src/ejercicio-3/artista";
import { discografia,disco,single } from "../../src/ejercicio-3/discografia";
import { cancion } from "../../src/ejercicio-3/cancion";
import { biblioteca} from "../../src/ejercicio-3/biblioteca"

describe("Tests Biblioteca", () => {
  it("tests buscar artista", () => {
    expect(biblioteca1.buscarArtista("Julián")).to.eql([]);
    expect(biblioteca1.buscarArtista("Beatles")).to.eql([grupo1]);
  });
  it("tests buscar disco", () => {
    expect(biblioteca1.buscarDisco("disco1")).to.eql([disco1,disco1]);
    expect(biblioteca1.buscarDisco("single1")).to.eql([single1,single1]);
  });
  it("tests buscar cancion", () => {
    expect(biblioteca1.buscarCancion("paradise")).to.eql([paradise, paradise]);
    expect(biblioteca1.buscarArtista("fun")).to.eql([]);
  });

  it("tests print", () => {
    expect(biblioteca1.print()).to.eql([grupo1,solista1]);
  });

});

const paradise = new cancion("paradise",4,["Pop"],false, 1500);
const heaven = new cancion("heaven",4,["jazz"],false, 1000);
const disco1 = new disco("disco1",2008,[paradise]);
const single1 = new single("single1",2008,[heaven],1);
const discografia1 = new discografia([disco1,single1]);
const discografia2 = new discografia([single1,disco1]);
const grupo1 = new Grupo("Beatles", 1000,[discografia1],4);
const solista1 = new Solista("Juan", 3500, [discografia2]);

const biblioteca1 = new biblioteca([grupo1, solista1]);