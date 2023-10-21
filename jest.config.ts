// module.exports = {
//   testEnvironment: "node",

//   testMatch: ["**/*.test.ts"],

//   moduleFileExtensions: ["js", "json", "ts", "tsx"],

//   coverageReporters: ["lcov", "text-summary"],

//   transform: {
//     "^.+\\.ts$": "ts-jest",
//   },
// };
import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  automock: true,

  collectCoverage: false,

  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "src/**/*.{ts,tsx}",
    "!vendor/**/*.{js,jsx}",
    "!**node_modules/**",
  ],

  // coverageThreshold: {
  //   global: { branches: 100, functions: 100, lines: 100, statements: 100 },
  // },

  coveragePathIgnorePatterns: ["/node_modules/", "config.js"],

  testMatch: ["**/*.test.tsx"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],

  transform: {
    "^.+\\.ts$": "ts-jest",
  },

  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
};

export default config;
