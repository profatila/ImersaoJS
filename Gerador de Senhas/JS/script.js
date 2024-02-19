document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btgerar').addEventListener('click', gerarSenhas);
    document.getElementById('reset').addEventListener('click', limpar);
});

function gerarSenhas() {
    let qtdsenhas = parseInt(document.getElementById('valor1').value);
    let qtdchar = parseInt(document.getElementById('valor2').value);
    let addmai = document.getElementById('cbmaiu').querySelector('input').checked;
    let addnum = document.getElementById('cbnum').querySelector('input').checked;
    let addespec = document.getElementById('cbcharE').querySelector('input').checked;

    let caracteres = [];
    let senhaArray = [];
    let senha = '';

    // Definir caracteres permitidos
    if (addmai) {
        for (let i = 65; i <= 90; i++) {
            caracteres.push(String.fromCharCode(i));
        }
    }
    if (addnum) {
        for (let i = 48; i <= 57; i++) {
            caracteres.push(String.fromCharCode(i));
        }
    }
    if (addespec) {
        for (let i = 33; i <= 47; i++) {
            caracteres.push(String.fromCharCode(i));
        }
        for (let i = 58; i <= 64; i++) {
            caracteres.push(String.fromCharCode(i));
        }
        for (let i = 91; i <= 96; i++) {
            caracteres.push(String.fromCharCode(i));
        }
        for (let i = 123; i <= 126; i++) {
            caracteres.push(String.fromCharCode(i));
        }
    }

    if (!addmai && !addnum && !addespec) {
        for (let i = 97; i <= 122; i++) {
            caracteres.push(String.fromCharCode(i));
        }
    }

    // Gerar senhas
    for (let i = 0; i < qtdsenhas; i++) {
        senhaArray[i] = '';
        for (let j = 0; j < qtdchar; j++) {
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            senhaArray[i] += caracteres[randomIndex];
        }
    }

    senha = senhaArray.join('\n');
    document.getElementById('blocoTexto').value = senha;
}

function limpar() {
    document.getElementById('blocoTexto').value = '';
}
