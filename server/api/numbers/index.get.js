import path from "path";
import fs from "fs";

export default defineEventHandler((event) => {
  const query = getQuery(event);

  const file = fs.readFileSync(
    path.join(process.cwd(), "data", "numbers.json")
  );
  const data = JSON.parse(file);

  return {
    data,
    query,
  };
});
