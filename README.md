# typescript-node-skeleton

Simple skeleton for TypeScript Node programs.

## Status

[![Tests](https://github.com/tobidelius/typescript-node-skeleton/actions/workflows/tests.yml/badge.svg)](https://github.com/tobidelius/typescript-node-skeleton/actions/workflows/tests.yml)

## Usage

1. Start by running `./setup` to install the development dependencies.
   (reason for doing this is to make sure you get the latest stable versions).
2. After this is done you you can remove the `setup` file.
3. Make sure you edit `package.json` with a new name and meta information.
4. Open `.github/workflows/tests.yml` and change `run: ./setup` to: `run: npm install`.

## NPM Dependencies

* [typescript](https://www.typescriptlang.org/) + types/tools
* [jest](https://jestjs.io/) (testing)
* [eslint](https://github.com/eslint/eslint) (linter) + typescript-eslint/airbnb
