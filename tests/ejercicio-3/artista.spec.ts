import "mocha";
import { expect } from "chai";
import { Grupo, Solista } from "../../src/ejercicio-3/artista";
import { discografia,disco,single } from "../../src/ejercicio-3/discografia";
import { cancion } from "../../src/ejercicio-3/cancion";

describe("Tests Grupo", () => {
  it("getters de grupo", () => {
    expect(grupo1.nombre).to.eq("Beatles");
    expect(grupo1.numero_oyentes).to.eq(1000);
    expect(grupo1.discografia).to.eql([discografia1]);
    expect(grupo1.numero_miembros).to.eq(4);
  });
});



describe("Tests Solista", () => {
  it("getter de solista", () => {
    expect(solista1.nombre).to.eq("Juan");
    expect(solista1.numero_oyentes).to.eq(3500);
    expect(solista1.discografia).to.eql([discografia2]);
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