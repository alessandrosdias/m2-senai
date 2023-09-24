function main() 
{
    var lista = document.getElementById("listagem");
    lista.innerHTML = "";
    
    var anilhado = 1;
    for (var i = 1; i <= 5; i++) {
        for (var j = 0; j < anilhado; j++) {
            lista.innerHTML += " * ";
        }
        anilhado++;
        lista.innerHTML += "\n";
    }
}