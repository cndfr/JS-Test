window.setInterval(function () {
  location.reload();
}, 20000000);


var transaction = {
  payee: "Lavka",
  account: "BSPB",
  sum: 5000
}

console.log(Object.getOwnPropertyDescriptor(transaction, "sum"));

document.getElementById("input-date").value = Date();
