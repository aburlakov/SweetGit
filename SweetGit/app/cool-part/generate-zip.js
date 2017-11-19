function downloadZip() {
    $('#giveZip').hide();

    /*zip generated widget, style and fonts*/
    let zip = new JSZip();

    /*generated widget*/
    zip.file("widget.html", $('.html-container').html());

    /*widget style*/
    zip.file("styles/widget-style.css", "../your-sweetGit/styles/widget-style.css");

    /*widget fonts*/
    zip.file("fonts/Evolventa-Regular.ttf", "../your-sweetGit/fonts/Evolventa-Regular.ttf");
    zip.file("fonts/that i love you - TTF.ttf", "../your-sweetGit/fonts/that i love you - TTF.ttf");

    zip.generateAsync({type: "blob"})
        .then(function (content) {
            saveAs(content, "your-sweetGit.zip");
        });
}