import "mocha";
import { expect } from "chai";
import { Documental, DocumentalCollection} from "../../src/ejercicio-1/documental";

describe("Tests Peliculas", () => {


  it("Pruebas Documental getters y setters", () => {
    documental1.setAno = 2007;
    documental1.setNombre = "cataratas";
    documental1.setDuracion = 135;
    documental1.setPuntuacion = 6.5;
    expect(documental1.getAno).to.eq(2007);
    expect(documental1.getNombre).to.eq("cataratas");
    expect(documental1.getDuracion).to.eq(135);
    expect(documental1.getPuntuacion).to.eq(6.5);
  });

  it("Pruebas DocumentalCollection métodos", () => {
    expect(my_collection_documental.buscarPorAno(2007)).to.eql([documental1]);
    expect(my_collection_documental.buscarPorAno(2010)).to.eql([]);
    expect(my_collection_documental.buscarPorNombre("insectos")).to.eql([documental2]);
    expect(my_collection_documental.buscarPorNombre("polo norte")).to.eql([]);
    expect(my_collection_documental.buscarPorPuntuacion(8.5)).to.eql([documental2]);
    expect(my_collection_documental.buscarPorPuntuacion(9.5)).to.eql([]);
    expect(my_collection_documental.eliminarElemento("cataratas")).to.eql([documental2]);
    expect(my_collection_documental.eliminarElemento("reptiles")).to.eql([documental2]);
    expect(my_collection_documental.buscarPorDuracion(180)).to.eql([documental2]);
    expect(my_collection_documental.buscarPorDuracion(120)).to.eql([]);
    expect(my_collection_documental.anadirElemento(documental3)).to.eql([documental2,documental3]);
    expect(my_collection_documental.numeroTotalElementos()).to.eq(2);
  });



});
const documental1 = new Documental(2002, "rios", 8, 150);
const documental2 = new Documental(2012, "insectos", 8.75, 175);
const documental3 = new Documental(2017, "aves", 7.75, 140);
const my_collection_documental = new DocumentalCollection([documental1, documental2]);