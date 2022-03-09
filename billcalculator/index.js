
var tot, n, price, quantity;

function calculate()
{

n = document.getElementById("pname").value;
price = document.getElementById("price").value;
quantity = document.getElementById("qty").value;
tot = price*quantity;
document.getElementById("total").innerHTML = "Product Name: " + n + ", " + "Total Price: " + tot;

}