function main()
{
    var opções = Number(prompt(
        "Escolha na lista o que você quer que se faça: \n" +
        "1 - Imprimir números de 1 a 10 \n" +
        "2 - Imprimir os números impares menores que 100 \n" +
        "3 - Imprimir a tabuada do número 8 \n" +
        "4 - Imprimir todas as tabuadas do número 1 ao 10 \n"    
    ));

    var res = document.getElementById("resultado")

    switch(opções)
    {
        case 1:
        document.getElementById("texto").innerText = `Números de 1 a 10: `
        res.innerHTML(numerosde1a10())
        break

        case 2:
        document.getElementById("texto").innerText = `Números imparares menos que 100: `
        res.innerHTML(imparesmenoresqueCem())
        break

        case 3:
        document.getElementById("texto").innerText = `Tabuada do Oito: `
        res.innerHTML(TabuadaDoOito())
        break

        case 4:
        document.getElementById("texto").innerText = `Todas as tabuadas: `
        res.innerHTML(TodasAsTabuadas())
        break
    }
}

function numerosde1a10(){
var i = 0;

while(i < 10){
    i++;
    document.getElementById("resultado").innerHTML += (i);
}

}

function imparesmenoresqueCem(){
    var res = "";
    for (var i = 1; i < 100; i += 2) {
        res = i + (",")
        document.getElementById("resultado").innerHTML += (res);
    }
  }
  
  function TabuadaDoOito() {
    for (var i = 1; i <= 10; i++) {
        document.getElementById("resultado").innerHTML += ("8 x " + i + " = " + 8 * i + "  |  ");
    }
  }
  
  function TodasAsTabuadas() {
    for (var i = 1; i <= 10; i++) {
        document.getElementById("resultado").innerHTML += ("Tabuada do " + i + "  |  ")
      for (var j = 1; j <= 10; j++) {
        document.getElementById("resultado").innerHTML += (i + " x " + j + " = " + i * j + "  |  ");
      }
    }
  }