import { describe, expect, it } from "vitest";

const canConfigure = () => {};

describe(`canReconfigure`, () => {
  it(`should be a function`, () => {
    expect(canConfigure).toBeTypeOf(`function`);
  });
});
