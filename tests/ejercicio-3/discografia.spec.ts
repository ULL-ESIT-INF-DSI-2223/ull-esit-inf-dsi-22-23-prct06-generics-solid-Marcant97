import "mocha";
import { expect } from "chai";
import { cancion } from "../../src/ejercicio-3/cancion";
import { disco,single,discografia } from "../../src/ejercicio-3/discografia";

describe("Disco", () => {
  it("getter y setter de grupo", () => {
    expect(disco1.getNombre).to.eq("disco1");
    expect(disco1.getAno).to.eq(2008);
    expect(disco1.getCanciones).to.eql([paradise]);
    disco1.setNombre = "mi disco";
    disco1.setAno = 2015;
    disco1.setCanciones = [paradise, heaven];
    expect(disco1.getNombre).to.eq("mi disco");
    expect(disco1.getAno).to.eq(2015);
    expect(disco1.getCanciones).to.eql([paradise, heaven]);
  });
  it("métodos disco", () => {
    expect(disco1.duracionDisco()).to.eq(8);
    expect(disco1.numeroReproduccionesDisco()).to.eq(2500);
    expect(disco1.numerocanciones()).to.eq(2);
  });
});

const paradise = new cancion("paradise",4,["Pop"],false, 1500);
const heaven = new cancion("heaven",4,["jazz"],false, 1000);
const disco1 = new disco("disco1",2008,[paradise]);

describe("Single", () => {
  it("fallo constructor single", () => {
    const single2 = new single("single2",2010,[heaven,paradise],1);
    expect(single2.getCanciones).to.eql([heaven]);
  });
  it("getter y setter de grupo", () => {
    expect(single1.getNombre).to.eq("single1");
    expect(single1.getAno).to.eq(2008);
    expect(single1.getCanciones).to.eql([heaven]);
    expect(single1.getNumeroVersiones).to.eq(1);
    single1.setNombre = "mi single";
    single1.setAno = 2015;
    single1.setCanciones = [paradise];
    single1.setNumeroVersiones = 2;
    expect(single1.getNumeroVersiones).to.eq(2);
    expect(single1.getNombre).to.eq("mi single");
    expect(single1.getAno).to.eq(2015);
    expect(single1.getCanciones).to.eql([paradise]);
    expect(single1.getNumeroVersiones).to.eq(2);
  });
  it("métodos single", () => {
    expect(single1.duracionSingle()).to.eq(4);
    expect(single1.numeroReproduccionesSingle()).to.eq(1500);
    expect(single1.numerocanciones()).to.eq(1);
  });
});
const single1 = new single("single1",2008,[heaven],1);


describe("Discografia", () => {
  it("prueba getter y setter discografia", () => {
    const discografia1 = new discografia([disco1,single1]);
    expect(discografia1.getDiscos).to.eql([disco1,single1]);
    discografia1.setDiscos = [single1,disco1];
    expect(discografia1.getDiscos).to.eql([single1,disco1]);
  });
});



