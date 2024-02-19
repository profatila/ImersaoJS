function validarCPF() {
    var cpf = document.getElementById("cpfInput").value.replace(/[^\d]+/g, '');
    
    if (cpf == '' || cpf.length != 11 || /^(.)\1+$/.test(cpf)) {
        document.getElementById("resultado").innerText = "CPF inválido";
        return;
    }

    // Verificação do CPF
    var add = 0;
    for (var i = 0; i < 9; i++) {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    var rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9))) {
        document.getElementById("resultado").innerText = "CPF inválido";
        return;
    }

    add = 0;
    for (var i = 0; i < 10; i++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10))) {
        document.getElementById("resultado").innerText = "CPF inválido";
        return;
    }

    document.getElementById("resultado").innerText = "CPF válido";
}
