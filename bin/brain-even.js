#!/usr/bin/env node
import { firstGame, secondGame } from '../src/even.js';

console.log('Welcome to the Brain Games!');
const userName = firstGame();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(secondGame(userName));