function showCode() {
    $('#giveCode').hide();
    $('#widgetCode').show();

    /* here goes the generated code*/
    var code = $('.html-container').html();
    $('.html-viewer').text(code);

    /* here goes the css
    $.get("../beauty-part/styles/widget-style.css", function(data) {
        $(".css-viewer").text(data);
    });*/
}