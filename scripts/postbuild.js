import fs from "fs";
import path from "path";

function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  const clientDir = path.resolve("dist/client");
  const rootDistDir = path.resolve("dist");
  const outputPublicDir = path.resolve(".output/public");

  if (fs.existsSync(clientDir)) {
    console.log("Copying dist/client to dist root and .output/public...");
    copyDirSync(clientDir, rootDistDir);
    copyDirSync(clientDir, outputPublicDir);
    console.log("Successfully created build fallbacks for Vercel!");
  }
} catch (err) {
  console.error("Postbuild error:", err);
}
