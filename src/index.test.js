import { sortAnimals } from ".";

it("GIVEN sortAnimals, WHEN is invoked THEN should return even length animals list", () => {
  expect(sortAnimals().length % 2).toBe(1);
});
