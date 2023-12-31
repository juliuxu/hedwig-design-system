import StyleDictionaryPackage, { transform } from "style-dictionary";

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

type Brand = "posten" | "bring";
const brands: Brand[] = ["posten", "bring"];
function getStyleDictionaryConfig(brand: Brand) {
  return {
    source: ["tokens/shared.json", `tokens/brands/${brand}.json`],
    platforms: {
      web: {
        prefix: "hds",
        transformGroup: "css",
        buildPath: `dist/web/${brand}/`,
        files: [
          {
            destination: "tokens.css",
            format: "css/variables",
            options: {
              outputReferences: true,
            },
          },
        ],
      },
    },
  };
}

console.log("Build started...");

brands.map(function (brand) {
  console.log("\n==============================================");
  console.log(`\nProcessing:  [${brand}]`);

  const StyleDictionary = StyleDictionaryPackage.extend(
    getStyleDictionaryConfig(brand)
  );

  StyleDictionary.buildAllPlatforms();

  console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");
