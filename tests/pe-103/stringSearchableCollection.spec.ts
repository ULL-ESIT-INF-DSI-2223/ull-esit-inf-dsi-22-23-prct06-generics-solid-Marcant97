import "mocha";
import { expect } from "chai";
import { StringSearchableCollection } from "../../src/pe-103/stringSearchableCollection";

describe("Tests StringSearchableCollection", () => {
  it("Pruebas search String", () => {
    expect(mi_stringSearchableCollection.search("juan")).to.eql(["juan"]);
    expect(mi_stringSearchableCollection.search("maria")).to.eql([]);
  });
  it("Pruebas addItem String", () => {
    expect(mi_stringSearchableCollection.addItem("manuel")).to.eql(["hola","adios","juan", "ana", "manuel"]);
  });
  it("Pruebas getItem String", () => {
    expect(mi_stringSearchableCollection.getItem(2)).to.eq("juan");
    expect(mi_stringSearchableCollection.getItem(8)).to.eq(undefined);
    expect(mi_stringSearchableCollection.getItem(-3)).to.eq(undefined);
  });
  it("Pruebas removeItem String", () => {
    expect(mi_stringSearchableCollection.removeItem(1)).to.eq("adios");
    expect(mi_stringSearchableCollection.removeItem(8)).to.eq(undefined);
    expect(mi_stringSearchableCollection.removeItem(-3)).to.eq(undefined);

  });
  it("Pruebas getNumberOfItems String", () => {
    expect(mi_stringSearchableCollection.getNumberOfItems()).to.eq(4);
  });
});


const mi_stringSearchableCollection = new StringSearchableCollection(["hola","adios","juan", "ana"]);