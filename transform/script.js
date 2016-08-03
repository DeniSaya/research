function checkCase(x,y) {
    y = x.toUpperCase();
    if ( x == y ) {
        y = x.toLowerCase();
    } return y;
}

function alterCase() {
    var str = document.getElementById("text").value ;
    var r = "" ;
    for (i = 0; i < str.length; i++) {
        r += checkCase(str.charAt(i)) + "";
    }
    document.getElementById("text").value = r ;
}
