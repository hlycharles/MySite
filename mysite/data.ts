const ENV: "DEV" | "PROD" = "DEV";

const ASSET_PATH: string = "asset/";

export function getAssetPath(path: string) {
    if (ENV === "DEV") {
        return path;
    }
    return ASSET_PATH;
}
