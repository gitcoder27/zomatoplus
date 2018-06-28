function myFunction() {
    var x = document.getElementsByClassName("myDIV");
    if (x[0].style.display === "none") {
        x[0].style.display = "block";
    } else {
        x[0].style.display = "none";
    }
}

function myFunction2() {
    var x = document.getElementsByClassName("myItem");
    var y = document.getElementsByClassName("myLogin");
    if (x[0].style.display === "none") {
    	y[0].style.display = "none";
        x[0].style.display = "block";
    } else {
        x[0].style.display = "none";
    }
}

function myFunction3() {
    var x = document.getElementsByClassName("myLogin");
    var y = document.getElementsByClassName("myItem");
    if (x[0].style.display === "none") {
    	y[0].style.display = "none";
        x[0].style.display = "block";
    } else {
        x[0].style.display = "none";
    }
}

