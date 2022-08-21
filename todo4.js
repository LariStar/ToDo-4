import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import chalk from 'chalk'
const prompt = require('prompt-sync')();

let nome = chalk.green(prompt('Como voce se chama?'));
let desejo = chalk.green(prompt('O que voce deseja?'));
let finalidade = chalk.green(prompt('Para que?'));

let historiaDoUsuario = (` Como  ${nome}, eu desejo ${desejo}, para ${finalidade}`)

console.log( historiaDoUsuario );