function checkCase(letter) {
    var upper = letter.toUpperCase();
    if ( letter == upper ) {
        upper = letter.toLowerCase();
    } return upper;
}

function alterCase() {
    var input = document.querySelector("#text")
    var str = input.value;
    var result = "";
    for (var i = 0; i < str.length; i++) {
        result += checkCase(str.charAt(i)) + "";
    }
    input.value = result;
}
