import { execFileSync } from "node:child_process";
import path from "node:path";

const SWAGGER_JSON_URL = process.env.SWAGGER_JSON_URL;

const MODEL_PATH = path.resolve(import.meta.dirname, "../libs/api-models/src/lib");

execFileSync('npx', [
    "openapi-generator-cli",
    "generate",
    "-i",
    `${SWAGGER_JSON_URL}`,
    "-g",
    "typescript-angular",
    "-o",
    MODEL_PATH,
    "--global-property=models",
    "--additional-properties=fileNaming=kebab-case"
], {
    stdio: "inherit",
    shell: true
});