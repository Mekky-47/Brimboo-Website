

function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}




    var loginBtn = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");

function login() {
        x.style.left = "4px";
        y.style.right = "-520px";

}

function register() {
        x.style.left = "-510px";
        y.style.right = "5px";

}


