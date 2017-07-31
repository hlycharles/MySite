const ENV: "DEV" | "PROD" = "DEV";

const ASSET_PATH: string = "asset/";
const SCRIPT_PATH: string = "src/script";

export function getAssetPath(path: string) {
    if (ENV === "DEV") {
        return path;
    }
    return ASSET_PATH;
}

export function getScriptPath(path: string) {
    if (ENV === "DEV") {
        return path;
    }
    return SCRIPT_PATH;
}
