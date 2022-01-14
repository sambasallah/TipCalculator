

function calcTip() {
    var subTotal = document.getElementById("subtotal").value;
    var tip = document.getElementById("tip").value;
    var total = tip/100 * subTotal;
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}