import { execFileSync } from "node:child_process";
import path from "node:path";

const SWAGGER_JSON_PATH = path.resolve("./openapi.json");

console.log(SWAGGER_JSON_PATH);

const MODEL_PATH = path.resolve(import.meta.dirname, "../libs/api-models/src/lib");

try {
    execFileSync('npx', [
        "openapi-generator-cli",
        "generate",
        "-i",
        `${SWAGGER_JSON_PATH}`,
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
} catch (error) {
    console.log(error);
}
