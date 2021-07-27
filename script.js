$(document).ready(function() {
    $(".design-click").click(function() {
        $("#designShow").toggle();
        $("#designHide").toggle();
    })
})

$(document).ready(function() {
    $(".dev-click").click(function() {
        $("#devShow").toggle();
        $("#devHide").toggle();
    })
})

$(document).ready(function() {
    $(".prod-click").click(function() {
        $("#prodShow").toggle();
        $("#prodHide").toggle();
    })
    $(".image-overlay").hover(function() {
        $(".image-title").css("border", "solid", "black");
        $(".image-title").css("padding", "20px");
    })
})