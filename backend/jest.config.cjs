module.exports = {
  preset: "ts-jest/presets/default-esm", // ESM + TypeScript
  testEnvironment: "node",
  moduleFileExtensions: ["js", "ts"],
  testMatch: ["**/src/**/*.spec.[jt]s?(x)"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFiles: ["dotenv/config"],
  transform: {
    "^.+\\.[tj]s$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "tsconfig.json",
        diagnostics: false,
      },
    ],
  },
  extensionsToTreatAsEsm: [".ts"],
};
