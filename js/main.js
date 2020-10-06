function ztext() {
    var ztxt = new Ztextify(".title-logo-heading h1", {
        depth: "20px",
        layers: 30,
        fade: true,
        direction: "forwards",
        event: "pointer",
        eventRotation: "45deg"
    });
}

$(document).ready(function() {
    $(".newaccount-button").click(function(){
        $('.login-container').toggleClass('focused');
        $('.createaccount-container').toggleClass('focused');
    })
    $(".back-button").click(function(){
        $('.login-container').toggleClass('focused');
        $('.createaccount-container').toggleClass('focused');
    })
});