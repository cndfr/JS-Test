window.setInterval(function () {
  location.reload();
}, 5000);


var transaction = {
  payee: "Lavka",
  account: "BSPB",
  sum: 5000
}

console.log(Object.getOwnPropertyDescriptor(transaction, "sum"));
