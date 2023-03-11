import "mocha";
import { expect } from "chai";
import { Pelicula, PeliculaCollection } from "../../src/ejercicio-1/pelicula";

describe("Tests peliculas", () => {

  it("Pruebas pelicula getters y setters", () => {
    pelicula1.setAno = 2022;
    pelicula1.setNombre = "Avatar 2";
    pelicula1.setDirector = "James Cameron";
    pelicula1.setPuntuacion = 9.1;
    expect(pelicula1.getAno).to.eq(2022);
    expect(pelicula1.getNombre).to.eq("Avatar 2");
    expect(pelicula1.getDirector).to.eq("James Cameron");
    expect(pelicula1.getPuntuacion).to.eq(9.1);
  });

  it("Pruebas peliculaCollection métodos", () => {
    expect(my_collection_pelicula.buscarPorAno(2023)).to.eql([pelicula2]);
    expect(my_collection_pelicula.buscarPorAno(2011)).to.eql([]);
    expect(my_collection_pelicula.buscarPorNombre("Creed 3")).to.eql([pelicula2]);
    expect(my_collection_pelicula.buscarPorNombre("polo norte")).to.eql([]);
    expect(my_collection_pelicula.buscarPorPuntuacion(8)).to.eql([pelicula1, pelicula3]);
    expect(my_collection_pelicula.buscarPorPuntuacion(9.5)).to.eql([]);
    expect(my_collection_pelicula.eliminarElemento("singapur")).to.eql([pelicula1,pelicula2]);
    expect(my_collection_pelicula.eliminarElemento("reptiles")).to.eql([pelicula1,pelicula2]);
    expect(my_collection_pelicula.buscarPorDirector("James Cameron")).to.eql([pelicula1]);
    expect(my_collection_pelicula.buscarPorDirector("roberto")).to.eql([]);
    expect(my_collection_pelicula.anadirElemento(pelicula3)).to.eql([pelicula1,pelicula2,pelicula3]);
    expect(my_collection_pelicula.numeroTotalElementos()).to.eq(3);
  });


});
const pelicula1 = new Pelicula(2012, "Avatar", 8.5, "Luis");
const pelicula2 = new Pelicula(2023, "Creed 3", 7.85, "fernando");
const pelicula3 = new Pelicula(2010, "singapur", 8, "alberto");
const my_collection_pelicula = new PeliculaCollection([pelicula1,pelicula2,pelicula3]);