import { config } from "dotenv";
import { writeFileSync } from "fs";

config();

const prefix: string = process.env.PREFIX ?? "";

let content = `/*
* Arquivo gerado dinamicamente em 'src/variables-scss.ts'
* Não editar diretamente este arquivo.
*/`;

content += `\n\n$prefix: "${prefix}";`;

writeFileSync("src/styles/_variables.scss", content);
