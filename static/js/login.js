$(document).ready(function(){
    var user = false;
    var pass = false;

    function validateEmail(param){
        var email = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
        if(email.test(param)) return true;
        return false
    }

    function checkInput(){
        if(user && pass){
            $("#login").removeClass("disbaled")
        }else{
            $("#login").addClass("disabled")
        }
        $("#login").click(
            function(){
                if(user && pass){
                    //deberia hacer llamada POST a api backend
                    window.location.href = "offers.html"
                }
                else{
                    if(!user){
                        $("#username").addClass("error");
                    }
                    if(!pass){
                        $("#password").addClass("error");
                    }
                }
            }
        )
        $("#register").click(function(){
            window.location.href = "register.html"

        })
        $("#login-head").click(function(){
            window.location.href = "login.html"

        })
        $("#register-head").click(function(){
            window.location.href = "register.html"

        })
    }

    function adjustInputs(){
        $("#username").keyup(
            function(){
                if(validateEmail($(this).val())){
                    user = true;
                    $(this).addClass("ok");
                    $(this).removeClass("error");
                }else{
                    user = false;
                    $(this).addClass("error");
                    $(this).removeClass("ok");
                }
                checkInput();
            }
        );

        $("#password").keyup(
            function(){
                if($(this).val().length > 5){
                    pass = true;
                    $(this).addClass("ok");
                    $(this).removeClass("error");
                }else{
                    pass = false;
                    $(this).addClass("error");
                    $(this).removeClass("ok");
                }
                checkInput();
            }
        );
    }

    adjustInputs();
    checkInput();
})