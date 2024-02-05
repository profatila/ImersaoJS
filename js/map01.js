var vencedores = [
    {
        id: 1,
        name: 'Equipe A',
        pais: 'Brasil'
    },
    {
        id: 2,
        name: 'Equipe B',
        pais: 'Italia'
    },
    {
        id: 3,
        name: 'Equipe C',
        pais: 'Egito'
    }
]

var pais = vencedores.map(function(item){
    return item.name ;
})

// 1. Console
// console.log(pais)

// 2. document
document.getElementById("p1").innerHTML = pais;

// 3. document.write 
// document.write(pais);