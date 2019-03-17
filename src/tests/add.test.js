const add = (a, b) => a + b;
test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

const greetings = name => `Hello ${name}!`;
test("should return hello + name", () => {
  const result = greetings("dave");
  expect(result).toBe("Hello dave!");
});
