document.getElementById("buttonStar").addEventListener("click", convertToReal);

function convertToReal() {
  const euro = document.getElementById("euro").value;
  const quote = 6.27;
  const real = euro * quote;
  document.getElementById("result").innerText = `R$ ${real.toFixed(2)}`;
}

convertToReal();
