var salário = Number(prompt("Digite o salário:"));
var percentual = prompt(
    "Digite o plano: \n" +
    "A = 10% \n" + 
    "B = 15% \n" + 
    "C = 20% \n" 
);

switch(percentual)
{
    case "A":
    prompt("O novo salário é = " + " R$ " + (((salário * 0.10) + salário).toFixed(2)))
    break

    case "B":
    prompt("O novo salário é = " + " R$ " + (((salário * 0.15) + salário).toFixed(2)))
    break

    case "C":
    prompt("O novo salário é = " + " R$ " + (((salário * 0.20) + salário).toFixed(2)))
    break

    default:
    prompt("Opção Inválida!")
    break
}
