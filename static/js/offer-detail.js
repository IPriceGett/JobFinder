$(document).ready(function(){
    function checkInput(){
        $(".add").click(function (){
            //se deberia generar solicitud por medio de un endpoint
            window.location.href = "postulations.html"
        });
        $("#home").click(function() {
            window.location.href = "/index.html"
        });
        $("#upload").click(function() {
            window.location.href = "upload-offer.html"
        });
        $("#see-offers").click(function() {
            window.location.href = "offers.html"
        });
        $("#see-profile").click(function() {
            window.location.href = "see-profile.html"
        });
        $("#see-postulations").click(function() {
            window.location.href = "postulations.html"
        });
    }

    checkInput();
})