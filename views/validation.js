function validateForm() {
    let x = document.forms["myForm"]["firstName"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }

    let x1 = document.forms["myForm"]["lastName"].value;
    if (x1 == "") {
        alert("LastName must be filled out");
        return false;
    }

    let x3 = document.forms["myForm"]["email"].value;
    if (x3 == "") {
        alert("Mail must be filled out");
        return false;
    }

    let x4 = document.forms["myForm"]["mobile"].value;
    if (x4 == "") {
        alert("Number must be filled out");
        return false;
    }

    let x5 = document.forms["myForm"]["date"].value;
    if (x5 == "") {
        alert("Date must be filled out");
        return false;
    }

    let x6 = document.forms["myForm"]["time"].value;
    if (x6 == "") {
        alert("time  must be filled out");
        return false;
    }
    let x7 = document.forms["myForm"]["table"].value;
    if (x7 == "") {
        alert("Table must be filled out");
        return false;
    }


}