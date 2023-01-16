var saida = document.getElementById("saida");
var mes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
var resultado = "";

for(var x = 0; x < mes.length; x++) {
    resultado += mes[x] + "<br>" 
}

saida.innerHTML = resultado