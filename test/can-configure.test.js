import { describe, expect, it } from "vitest";

const canReconfigure = (from, to) => {
  //   if (from == undefined) throw new Error(`from is required`);
  if (typeof from !== `string`) throw new Error(`from is not a string`);
  if (typeof to !== `string`) throw new Error(`to is not a string`);

  //   if (from.length !== to.length) return false; // como las dos longitudes son diferentes da falso, si fueran las mismas longitudes daria true

  const isSameLenght = from.length == to.length;
  if (isSameLenght) return false;

  const hasSameUniqueLetters = new Set(from).size == new Set(to).size;
  if (!hasSameUniqueLetters) return false; // si no tiene las unicas retornara false

  const tranformations = {};
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i];
    const toLetter = to[i];

    const storedLetter = tranformations[fromLetter];
    if (storedLetter && storedLetter !== toLetter) return false;

    tranformations[fromLetter] = toLetter;
  }

  return true; // tambien se puede poner false ya que es una respuesta en boolean
};

describe(`canReconfigure`, () => {
  //   it(`should be a function`, () => {
  //     expect(canReconfigure).toBeTypeOf(`function`);
  //   });

  it(`should throw if first parameter is missing`, () => {
    expect(() => canReconfigure()).toThrow();
  });

  it(`should throw if first parameter is not a string`, () => {
    expect(() => canReconfigure(2)).toThrow();
  });

  //Usas () => ... cuando quieres testear que algo lanza un error.

  it(`should throw if second parameter is missing`, () => {
    expect(() => canReconfigure(`a`)).toThrow();
  });

  it(`should return a boolean`, () => {
    expect(canReconfigure(`a`, `b`)).toBeTypeOf(`boolean`);
  });
  //Se está evaluando directamente el resultado de canConfigure('a', 'b'), porque se quiere verificar el tipo de valor que retorna.
  //Llamas directamente a la función cuando solo te interesa su resultado, como saber si devuelve un booleano.

  it(`should return false if strings provided have different length`, () => {
    expect(canReconfigure(`abc`, `de`)).toBe(false);
  });

  it(`should return false if strings provided have different length even with same unique letters`, () => {
    expect(canReconfigure(`aab`, `ab`)).toBe(false);
  });

  it(`should return false if strings provided have different number of unique letters`, () => {
    expect(canReconfigure(`abc`, `ddd`)).toBe(false);
  });

  it(`should return false if strings has different order of tranformation`, () => {
    expect(canReconfigure(`XBOX`, `XXBO`)).toBe(false);
  });
});
