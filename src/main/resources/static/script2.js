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
  //  var y = document.getElementsByClassName("myLogin");
    if (x[0].style.display === "none") {
  //  	y[0].style.display = "none";
        x[0].style.display = "block";
    } else {
        x[0].style.display = "none";
    }
}

function myFunction3() {
    var x = document.getElementsByClassName("myLogin");
  //  var y = document.getElementsByClassName("myItem");
    if (x[0].style.display === "none") {
    //	y[0].style.display = "none";
        x[0].style.display = "block";
    } else {
        x[0].style.display = "none";
    }
}

function clearField() {
	document.getElementById("nameField").value="";
	document.getElementById("passwordField").value="";
	document.getElementById("mobileField").value="";
	document.getElementById("addressField").value="";
	document.getElementById("landmarkField").value="";
	document.getElementById("pincodeField").value="";
	document.getElementById("typeField").value="";

}

function clearField2() {
	document.getElementById("nameField2").value="";
	document.getElementById("passwordField2").value="";
}

function resetDropDown() {
	document.getElementById("dropDown").selectedIndex = "0";
	
}

function hideTable() {
	alert("test");
	var table = document.getElementById("myTable");
	if(table.style.display == "block")
		table.style.display = "none";
}

function allFunctions() {
	myFunction3(); 
	clearField2();
	hideTable();
}
