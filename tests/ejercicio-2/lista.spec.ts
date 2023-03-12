import "mocha";
import { expect } from "chai";
import { lista } from "../../src/ejercicio-2/lista";

describe("Tests lista", () => {

  it("getter y setter de lista", () => {
    expect(mi_lista1.getList).to.be.eql([1,2,3,4]);
    expect(mi_lista2.getList).to.be.eql(["a","b","c","d"]);
    mi_lista1.setlist = [0,1,2,3];
    mi_lista2.setlist = ["w","x","y","z"];
    expect(mi_lista1.getList).to.be.eql([0,1,2,3]);
    expect(mi_lista2.getList).to.be.eql(["w","x","y","z"]);
  });

  it("Método append", () => {
    expect(mi_lista1.append([4,5,6])).to.be.eql([0,1,2,3,4,5,6]);
    expect(mi_lista2.append(["A","B","AB"])).to.be.eql(["w","x","y","z","A","B","AB"]);
  });

  it("Método concatenate", () => {
    expect(mi_lista1.concatenate([7],[8],[9])).to.be.eql([0,1,2,3,4,5,6,7,8,9]);
    expect(mi_lista2.concatenate(["C","D"],["c","d"])).to.be.eql(["w","x","y","z","A","B","AB","C","D","c","d"]);
  });

  it("Método filter", () => {
    expect(mi_lista1.filter((num) => {
        if (num > 5) {return true;}
        else {return false;}
      })).to.be.eql([6,7,8,9]);
    expect(mi_lista2.filter((cadena) => {
      if(cadena[0] === "w" || cadena[0] === "A") {
        return true
      }
      else {return false;}
    })).to.be.eql(["w", "A", "AB"]);
  });

  it("Método length", () => {
    expect(mi_lista1.length()).to.eq(10);
    expect(mi_lista2.length()).to.eq(11);
  }); 
  
  it("Método reverse", () => {
    expect(mi_lista1.reverse()).to.be.eql([9,8,7,6,5,4,3,2,1,0]);
    expect(mi_lista2.reverse()).to.be.eql(["d","c","D","C","AB","B","A","z","y","x","w"]);
  });

  it("Método reduce", () => {
    expect(mi_lista1.reduce(0,(acumulador: number, elementoActual: number) => acumulador + elementoActual)).to.be.eq(45);
    expect(mi_lista2.reduce("hola:",(acumulador: string, elementoActual: string) => acumulador + elementoActual)).to.be.eq("hola:wxyzABABCDcd");
  });

  it("Método map", () => {
    expect(mi_lista1.map((num) => {
      return 2*num ;
    })).to.be.eql([0,2,4,6,8,10,12,14,16,18]);
    expect(mi_lista2.map((cadena) => {
      return cadena+"Q";
    })).to.be.eql(["wQ","xQ","yQ","zQ","AQ","BQ","ABQ","CQ","DQ","cQ","dQ"]);
  });

  it("Método forEach", () => {
    let numero_aux = 0;
    mi_lista1.forEach((elemento) => {
      numero_aux += elemento;
    });
    expect(numero_aux).to.eq(45); 

    let cadena_aux = "";
    mi_lista2.forEach((elemento) => {
      cadena_aux += elemento;
    });
    expect(cadena_aux).to.eq("wxyzABABCDcd"); 
  });
});


const mi_lista1 = new lista<number>([1,2,3,4]);
const mi_lista2 = new lista<string>(["a","b","c","d"]);
