import { suma , multiplica } from './controller.js';
import chalk from 'chalk';

const sum = suma(4, 5);
const sum1 = suma(1, 2);

const resultado = multiplica(sum, sum1);
console.log(chalk.green(resultado));