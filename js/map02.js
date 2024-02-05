var vencedores = [
  {
    id: 1,
    name: "Equipe A",
    pais: "Brasil"
  },
  {
    id: 2,
    name: "Equipe B",
    pais: "Italia"
  },
  {
    id: 3,
    name: "Equipe C",
    pais: "Egito"
  }
];

var dados = vencedores.map(function (item, indice) {
  return `  <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.pais}</td>
            </tr>
    `;
});

// 1. Usando querySelector 
document.querySelector("#tabela #corpo").innerHTML = dados.join('');

// 2. Usando GEBID 
// document.getElementById("corpo").innerHTML = dados.join('');