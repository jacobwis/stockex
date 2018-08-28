const fs = require("fs");
const path = require("path");

let schema = "";

const TYPES_DIR = path.resolve(__dirname, "types");

const files = fs.readdirSync(TYPES_DIR);
for (const fileName of files) {
  schema += fs.readFileSync(path.resolve(TYPES_DIR, fileName), "utf8");
}

module.exports = schema;
