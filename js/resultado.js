const id_aluno = localStorage.getItem("id_aluno");
const nota1 =localStorage.getItem("nota1");
const nota2 = localStorage.getItem("nota2");
const nota3 = localStorage.getItem("nota3");
const maior_nota = localStorage.getItem("maior_nota");
const menor_nota = localStorage.getItem("menor_nota");
const media = localStorage.getItem("media");
const conceito = localStorage.getItem("conceito");
const situacao = localStorage.getItem("situacao");

const conteudo = document.getElementById('conteudo');

const titulo = document.createElement('h2');
titulo.appendChild(document.createTextNode("Informações do aluno: "))
titulo.appendChild(document.createElement("br"));

conteudo.appendChild(titulo);

const info = document.createElement('p');
info.appendChild(document.createTextNode("Número de identificação do aluno: " + id_aluno));
info.appendChild(document.createElement("br"));

info.appendChild(document.createTextNode("1° Nota: " + nota1));
info.appendChild(document.createElement("br"));

info.appendChild(document.createTextNode("2° Nota: " + nota2));
info.appendChild(document.createElement("br"));

info.appendChild(document.createTextNode("3° Nota: " + nota3));
info.appendChild(document.createElement("br"));

info.appendChild(document.createTextNode("Bimestre com a maior nota: " + maior_nota));
info.appendChild(document.createElement("br"));

info.appendChild(document.createTextNode("Bimestre com a menor nota: " + menor_nota));
info.appendChild(document.createElement("br"));

info.appendChild(document.createTextNode("Média final: " + Math.round(media * 100) / 100));
info.appendChild(document.createElement("br"));

info.appendChild(document.createTextNode("Conceito e situação: " + conceito + " (" + situacao + ")"));    

conteudo.appendChild(info);

const botao = document.createElement('button');

botao.addEventListener('click', function() {

    window.location.href = "index.html";
});

botao.appendChild(document.createTextNode("Voltar"));

conteudo.appendChild(botao);