function resolver() {
    const numero = parseFloat(document.querySelector("#numero").value);
    const expoente = parseFloat(document.querySelector("#expoente").value);
  
    const resultado = numero * Math.pow(10, expoente);
  
    document.querySelector("#resultado").textContent = resultado;
}
document.querySelector("#resolver").addEventListener("click", resolver);

function limpar() {
    document.querySelector("#numero").value = "";
    document.querySelector("#expoente").value = "";
    document.querySelector("#resultado").textContent = "";
}
  document.querySelector("#limpar").addEventListener("click", limpar);
  