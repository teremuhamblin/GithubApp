import fs from "fs";
import path from "path";

export function loadConfig() {
  const env = process.env.NODE_ENV || "default";
  const file = path.join("config", `${env}.json`);
  return JSON.parse(fs.readFileSync(file, "utf8"));
}
