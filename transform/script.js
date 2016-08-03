function checkCase(x,y) {
    y = x.toUpperCase();
    if ( x == y ) {
        y = x.toLowerCase();
    } return y;
}

function alterCase() {
    var str = document.getElementById("text").value;
    var result = "";
    for (i = 0; i < str.length; i++) {
        result += checkCase(str.charAt(i)) + "";
    }
    document.getElementById("text").value = result;
}
