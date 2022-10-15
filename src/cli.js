import readlineSync from "readline-sync";

const firstGame = () => {
    const userName = readlineSync.question('May I have your name? '); 
    return `Hello, ${userName}!`; 
};
export default firstGame; 