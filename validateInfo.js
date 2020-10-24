/*
    validateEmail() makes sure that only an aggie email is inputed.
    Also, makes sure that there is characters in front of the '@' symbol.
*/
function validateEmail() {
    var aggie = document.getElementById("c2").value;
    var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-] + "@aggies.ncat.edu"/;
    // rest of email format after '@' symbol - [a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(!aggie.match(emailFormat)) {
        alert("Please enter a vaild aggie email.");
        return false;
    }
}