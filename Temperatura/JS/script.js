function converter() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    
    if (isNaN(celsius)) {
        document.getElementById("resultado").innerText = "Por favor, insira um valor numérico válido.";
        return;
    }

    var fahrenheit = (celsius * 9/5) + 32;
    
    document.getElementById("resultado").innerText = celsius + " graus Celsius são " + fahrenheit.toFixed(2) + " graus Fahrenheit.";
}
