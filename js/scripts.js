$(document).ready(function(){
    $("#mycarousel").carousel({interval: 2000});  // Does not work for me.
    $("#carousel-button").click(function() {
        if ($("#carousel-button").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass("fa-pause");
            $("#carousel-button").children("span").addClass("fa-play");
        } else {
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").addClass("fa-pause");
            $("#carousel-button").children("span").removeClass("fa-play");
        }
    });
    $("#btn_reserve_table").click(function() {
        $("#reservationModal").modal("show");
    });
    $("#btn_login").click(function(){
        $("#loginModal").modal("show");
    });
});
