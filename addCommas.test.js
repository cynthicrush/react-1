const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test('does it work properly', () => {
    expect(addCommas(1234567)).toBe('1,234,567')
    expect(addCommas(12345.67)).toBe('12,345.67')
    expect(addCommas(-3141592.65)).toBe('-3,141,592.65')
  })
});
