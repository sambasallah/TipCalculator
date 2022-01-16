

function calcTip() {
    var subTotal = parseInt(document.getElementById("subtotal").value);
    var tip = parseInt(document.getElementById("tip").value);
    var tipTotal = tip/100 * subTotal;
    var total = tipTotal + subTotal;
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}