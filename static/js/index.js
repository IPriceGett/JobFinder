$(document).ready(function(){
    function checkInput(){
        $("#login-head").click(function(){
            window.location.href = "templates/login.html"

        })
        $("#register-head").click(function(){
            window.location.href = "templates/register.html"

        })
    }
    checkInput();
})