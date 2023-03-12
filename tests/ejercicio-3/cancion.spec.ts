import "mocha";
import { expect } from "chai";
import { cancion } from "../../src/ejercicio-3/cancion";

describe("Tests cancion", () => {
  it("getter y setter de cancion", () => {
    expect(paradise.getNombre).to.eq("paradise");
    expect(paradise.getDuracion).to.eq(4);
    expect(paradise.getGeneros).to.eql(["Pop"]);
    expect(paradise.getSingle).to.eq(false);
    expect(paradise.getNumeroReproducciones).to.eq(1500);

    paradise.setNombre = "paradise 2";
    paradise.setDuracion = 4.5;
    paradise.setgeneros = ["POP"];
    paradise.setSingle = false;
    paradise.setNumeroReproducciones = 80000;

    expect(paradise.getNombre).to.eq("paradise 2");
    expect(paradise.getDuracion).to.eq(4.5);
    expect(paradise.getGeneros).to.eql(["POP"]);
    expect(paradise.getSingle).to.eq(false);
    expect(paradise.getNumeroReproducciones).to.eq(80000);
  });
});

const paradise = new cancion("paradise",4,["Pop"],false, 1500);

// private nombre: string,
// private duracion: number,
// private generos: string[],
// private single: boolean,
// private numero_reproducciones: number
