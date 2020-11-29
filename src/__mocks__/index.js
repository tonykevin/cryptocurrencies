import { readFileSync } from "fs";
import path from "path";

export const cryptoList = JSON.parse(
  readFileSync(path.join(__dirname, "api.json")).toString()
);

export const currencies = [
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "Libra esterlina" },
  { code: "MXN", name: "Peso Mexicano" },
  { code: "PEN", name: "Soles" },
  { code: "USD", name: "Dólar de Estados unidos" },
];
