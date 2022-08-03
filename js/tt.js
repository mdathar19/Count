function cal() {
    var first_no = document.getElementById('1st').value;
    var second_no = document.getElementById('2nd').value;
    var ope = document.getElementById('ope').value;
    if (ope == "greater") {
        if (first_no > second_no) {
            document.getElementsByClassName('res')[0].innerHTML = "True";
        }
        else if (first_no < second_no) {
            document.getElementsByClassName('res')[0].innerHTML = "false";
        }
    }
    else //(ope == "less")
    {
        if (first_no < second_no) {
            document.getElementsByClassName('res')[0].innerHTML = "True";
        } else if (first_no > second_no) {
            document.getElementsByClassName('res')[0].innerHTML = "false";
        }
    }
}