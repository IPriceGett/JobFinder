$(document).ready(function(){
    function checkInput(){

        $(".cancel").click(function (){
            //se deberia generar solicitud por medio de un endpoint para cancelar postulacion y recargar pagina
            window.location.href = "postulations.html"
        })

        $(".card").click(function (){
            //se visita el detalle de la oferta de trabajo
            window.location.href = "offer-detail.html"
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