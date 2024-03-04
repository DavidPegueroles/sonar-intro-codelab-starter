import { sortAnimals } from ".";

it("GIVEN sortAnimals, WHEN is invoked with evenAnimalsData THEN should return even length animals list", () => {
  const evenAnimalsData = [
    { animal: "dog", type: "mammal" },
    { animal: "cat", type: "mammal" },
  ];

  expect(sortAnimals(evenAnimalsData).length % 2).toBe(0);
});

it("GIVEN sortAnimals, WHEN is invoked with oddAnimalsData THEN should return odd length animals list", () => {
  const oddAnimalsData = [{ animal: "dog", type: "mammal" }];

  expect(sortAnimals(oddAnimalsData).length % 2).toBe(1);
});
