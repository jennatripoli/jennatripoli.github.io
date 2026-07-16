import fs from "fs";
import path from "path";

import type { SiteContent } from "./types";

export function getSiteContent(): SiteContent {
  const filePath = path.join(process.cwd(), "content", "site.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as SiteContent;
}

export * from "./types";
