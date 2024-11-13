let repetir;
do {
    console.clear();
    let base, exp, result = 1;
    
    base = parseInt(prompt("Informe um inteiro para base da exponenciação: "));
    
    exp = parseInt(prompt("Informe um inteiro para expoente da exponenciação: "));
    
    for (let i = 1; i < exp; i++) {
        result *= base;
    }
    
    console.log(`o resultado da exponenciação é, ${base}^${exp} = ${result}`);
    
    repetir = prompt("deseja repetir o programa? (sim | não): ").toUpperCase();
}while(repetir === "SIM");





let num1, num2, op;

num1 = Number(prompt("Informe o primeiro numero: "));
op = prompt("Informe o operador (+ | - | * | / ): ");
num2 = Number(prompt("Informe o segundo numero: "))

switch (op) {
    case '+':
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case '-':
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case '*':
        console.log(`${num1} x ${num2} = ${num1 * num2}`);
        break; 
    case '/':
        if (num2 === 0) {
            console.log("Não podemos dividir por zero!");
            break
        }
        
}