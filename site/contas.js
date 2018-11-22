function contas() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var result = 0;
    if (document.getElementsByName("op")[0].checked) {
        result = n1 + n2;
    }
    if (document.getElementsByName("op")[1].checked) {
        result = n1 - n2;
    }
    if (document.getElementsByName("op")[2].checked) {
        result = n1 * n2;
    }
    if (document.getElementsByName("op")[3].checked) {
        result = n1 / n2;
    }
    if (document.getElementsByName("op")[4].checked) {
        result = Math.pow(n1, n2);
    }
    document.getElementById("result").value = result;
}