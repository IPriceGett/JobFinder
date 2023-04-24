$(document).ready(function(){
    var email = false;
    var pass = false;
    var user = false;

    function validateEmail(param){
        var email = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
        if(email.test(param)) return true;
        return false
    }

    function validatePhone(param){
        var cel = /^\+?569?[0-9]{8}$/
        var phone = /^\D*([9])(\d{8})\D*$/
        if((cel.test(param)&& param.length == 12) ||  phone.test(param) ) return true;
        return false
    }

    function checkInput(){
        if(user && pass){
            $("#register").removeClass("disbaled")
        }else{
            $("#register").addClass("disabled")
        }
        $("#register").click(
            function(){
                if(email && pass){
                    //deberia hacer llamada POST a api backend
                    window.location.href = "offers.html"
                }
                else{
                    if(!email){
                        $("#email").addClass("error");
                    }
                    if(!pass){
                        $("#password").addClass("error");
                    }
                }
            }
        )
        $("#login").click(function(){
            window.location.href = "login.html"

        })
        $("#login-head").click(function(){
            window.location.href = "login.html"

        })
        $("#register-head").click(function(){
            window.location.href = "register.html"

        })
    }

    function adjustInputs(){
        $("#email").keyup(
            function(){
                if(validateEmail($(this).val())){
                    email = true;
                    $(this).addClass("ok");
                    $(this).removeClass("error");
                }else{
                    email = false;
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

        $("#name").keyup(
            function(){
                if($(this).val().length > 7){
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

        $("#phone").keyup(
            function(){
                if(validatePhone($(this).val())){
                    phone = true;
                    $(this).addClass("ok");
                    $(this).removeClass("error");
                }else{
                    phone = false;
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