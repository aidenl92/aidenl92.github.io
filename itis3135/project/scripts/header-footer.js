//header and footer script for project pages
$(document).ready(function(){
    $("header").append(
        "<h1>Charlotte Chain Champs</h1>\n" +
        "            <nav class=\"nav-bar\">\n" +
        "                <a href=\"discs.html\">Discs & Gear</a>\n" +
        "                -\n" +
        "                <a href=\"courses.html\">Course Reviews</a>\n" +
        "                -\n" +
        "                <a href=\"index.html\">Home Page</a>\n" +
        "                -\n" +
        "                <a href=\"tips.html\">Tips</a>\n" +
        "                -\n" +
        "                <a href=\"pro-quiz.html\">Pro Quiz</a>\n" +
        "                <br>"
    );

    $("footer").append(
        " <br>\n" +
        "            <a  href=\"https://validator.w3.org/check?uri=referer\">\n" +
        "                <img class=\"footer-image\" src=\" images/html5button.gif\" width=\"88\" height=\"31\" alt=\"link to html validator\">\n" +
        "            </a>\n" +
        "\n" +
        "            <a  href=\"https://jigsaw.w3.org/css-validator/check/referer\">\n" +
        "                <img class=\"footer-image\" src=\"images/cssbutton.gif\" width=\"88\" height=\"31\" alt=\"link to css validator\">\n" +
        "            </a>"
    );
});