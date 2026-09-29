import { createHash } from "node:crypto";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const bundle = JSON.parse(await readFile(resolve(root, "cloud-field.json"), "utf8"));
const expected = new Map([
  ["src/shaders/neuform-isolated/NeuformIsolatedEffects.tsx", "fe9856234253bc3c1a13b3afb84f3d84644dfa6d578e7203bb3e1dd5eced1b75"],
  ["src/shaders/neuform-isolated/sources/strata-cloud.html", "c5a8085b413d310fe1c9a2deb39bcd5d8ecf0d545a4462f576a1c9b9c49f34fc"],
  ["src/shaders/threeui.css", "efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf"],
]);

for (const file of bundle.files) {
  const hash = createHash("sha256").update(file.code).digest("hex");
  const wanted = expected.get(file.path);
  if (!wanted || hash !== wanted || file.sha256 !== wanted) {
    throw new Error(`Source integrity check failed for ${file.path}: ${hash}`);
  }
  const out = resolve(root, "vendor", "threeui-cloud-field", file.path);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, file.code, "utf8");
  console.log(`${file.path} ${hash}`);
}

const componentPath = resolve(root, "vendor", "threeui-cloud-field", "src/shaders/neuform-isolated/NeuformIsolatedEffects.tsx");
const componentSource = await readFile(componentPath, "utf8");
for (const match of componentSource.matchAll(/from \"\.\/sources\/(.+?\.html)\?raw\"/g)) {
  const target = resolve(dirname(componentPath), "sources", match[1]);
  try {
    await access(target);
  } catch {
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, "<!doctype html><html><body></body></html>\n", "utf8");
  }
}
