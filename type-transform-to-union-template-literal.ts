interface FruitMap {
  apple: "red";
  banana: "yellow";
  orange: "orange";
}

type TransformedFruit = {
  [F in keyof FruitMap]: `${F}:${FruitMap[F]}`;
}[keyof FruitMap];
// "orange:orange" | "apple:red" | "banana:yellow"