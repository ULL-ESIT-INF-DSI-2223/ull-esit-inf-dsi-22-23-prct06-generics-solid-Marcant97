import "mocha";
import { expect } from "chai";
import { Serie, SeriesCollection } from "../../src/ejercicio-1/serie";

describe("Tests Series", () => {
  it("Pruebas getters y setters", () => {
    serie1.setAno = 2025;
    serie1.setNombre = "nueva serie";
    serie1.setNumeroEpisodios = 35;
    serie1.setPuntuacion = 6.5;
    expect(serie1.getAno).to.eq(2025);
    expect(serie1.getNombre).to.eq("nueva serie");
    expect(serie1.getNumeroEpisodios).to.eq(35);
    expect(serie1.getPuntuacion).to.eq(6.5);

  });

  it("Pruebas SeriesCollection métodos", () => {
    expect(my_collection_series.buscarPorAno(2015)).to.eql([RickyMorty]);
    expect(my_collection_series.buscarPorAno(2010)).to.eql([]);
    expect(my_collection_series.buscarPorNombre("Los Serrano")).to.eql([Serrano]);
    expect(my_collection_series.buscarPorNombre("Dora")).to.eql([]);
    expect(my_collection_series.buscarPorPuntuacion(8.5)).to.eql([RickyMorty, CasaPapel]);
    expect(my_collection_series.buscarPorPuntuacion(9.5)).to.eql([]);
    expect(my_collection_series.eliminarElemento("Los Serrano")).to.eql([RickyMorty,CasaPapel]);
    expect(my_collection_series.buscarPorNumeroEpisodios(40)).to.eql([CasaPapel]);
    expect(my_collection_series.numeroTotalElementos()).to.eq(2);
    expect(my_collection_series.anadirElemento(StrangerThings)).to.eql([RickyMorty, CasaPapel, StrangerThings]);
  });



});

const serie1 = new Serie(2000, "prueba", 10, 100);
const RickyMorty = new Serie(2015, "Rick y Morty", 8.5,52);
const CasaPapel = new Serie(2017, "La Casa de Papel", 9,37);
const Serrano = new Serie(2003, "Los Serrano",7.5,60);
const StrangerThings = new Serie(2020, "Stranger Things",7.75, 75)
const my_collection_series = new SeriesCollection([RickyMorty,CasaPapel,Serrano]);