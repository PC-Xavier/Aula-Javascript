
function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
};

function redirecionar(){
    window.open("https://www.w3schools.com/"); // Redireciona em outra guia
    //window.location.href = "https://www.w3schools.com/" Redireciona na mesma página
};

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
};

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
};

function load(){
    alert("Página carregada");
};

function Change(elemento){
    console.log(elemento.value);
};

/*
var validar
function validaIdade(idade){
    validar;
    if(idade >= 18){
        return true;
    }else{
     return false;
    }
}

var idade = prompt("Digite sua idade: ");
console.log(validaIdade(idade));
*/


/*
var d = new Date();
console.log("Hoje é "+ d.getDate() + "/" + (d.getMonth() + 1))
*/

/*
var count;
for(count=1; count<=10; count++){
    console.log(count);
};
*/

/*
var count = 0
do{
    console.log(count)
    count++
}while(count == 0)
*/

/*
var idade = prompt("Qual a sua idade");
if(idade>=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*
var frutas = [{nome: "Maçã", cor: "Vermelha"}, {nome: "Uva", cor: "Roxa"}, {nome: "Banana", cor: "Amarela"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome: "Maçã", cor: "Vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var lista = ["Maçã", "Laranja", "Abacaxi"];
lista.push("Uva");
lista.pop();

console.log(lista);
console.log(lista.toString());
console.log(lista.join());
*/

/*
var nome="Pedro Xavier";
var n1 = 5;
var n2 = 3;
var frase= "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2)
console.log(nome)
console.log(n1 % n2)
console.log(frase.replace("Japão", "Brasil"));
*/
