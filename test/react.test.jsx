import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";

// Iniciando aplicacion de react

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];

const operations = [`+`, `-`, `*`, `/`];

const Calculator = () => {
  return;
  <section>
    <h1>Calculator</h1>
    <div role="grid">
      {rows.map((row, idx) => {
        <div key={idx} role="row">
          {row.map((number) => (
            <span hey={number}>{number}</span>
          ))}
        </div>;
      })}
    </div>
  </section>;
};

describe(`Calculator`, () => {
  afterEach(cleanup); //Para que se limpie en caso de que haya varios con el mismo nombre

  it(`should render`, () => {
    render(<Calculator />);
  });

  it(`should render title correctly`, () => {
    render(<Calculator />);
    screen.getByText(`Calculator`);
  });

  it(`should render numbers`, () => {
    render(<Calculator />);

    number.forEach((number) => {
      screen.getByText(number);
    });
  });

  it(`should render 4 rows`, () => {
    render(<Calculator />);

    const rows = screen.getAllByRole(`row`);
    expect(rows).toHaveLenght(4);
  });

  it(`should render operations`, () => {
    render(<Calculator />);
  });
});
