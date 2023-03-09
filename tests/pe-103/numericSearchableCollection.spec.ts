import "mocha";
import { expect } from "chai";
import { NumericSearchableCollection } from "../../src/pe-103/numericSearchableCollection";

describe("Tests NumericSearchableCollection", () => {
  it("Pruebas search numeric", () => {
    expect(mi_numericSearchableCollection.search(2)).to.eql([2,2]);
    expect(mi_numericSearchableCollection.search(6)).to.eql([]);
  });
  it("Pruebas addItem numeric", () => {
    expect(mi_numericSearchableCollection.addItem(4)).to.eql([2,7,8,10,2,4]);
  });
  it("Pruebas getItem numeric", () => {
    expect(mi_numericSearchableCollection.getItem(2)).to.eq(8);
    expect(mi_numericSearchableCollection.getItem(8)).to.eq(undefined);
    expect(mi_numericSearchableCollection.getItem(-2)).to.eq(undefined);
  });
  it("Pruebas removeItem numeric", () => {
    expect(mi_numericSearchableCollection.removeItem(1)).to.eq(7);
    expect(mi_numericSearchableCollection.removeItem(8)).to.eq(undefined);
    expect(mi_numericSearchableCollection.removeItem(-2)).to.eq(undefined);
  });
  it("Pruebas getNumberOfItems numeric", () => {
    expect(mi_numericSearchableCollection.getNumberOfItems()).to.eq(5);
  });
});


const mi_numericSearchableCollection = new NumericSearchableCollection([2,7,8,10,2]);