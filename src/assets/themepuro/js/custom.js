$(document).ready(function () {
//------------removing prime ng classes-----------------
//-------------buttons-----------------
$("button").removeClass("ui-button");

//------------login-----------------
//-------------ocultar header-----------------

    if(window.location.href.indexOf("prospective-users") > -1) {
       $(".navbar.navbar-expand-sm").hide();
    }
    if(window.location.href.indexOf("signup") > -1) {
        $(".navbar.navbar-expand-sm").hide();
     }
});