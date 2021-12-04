//header and footer script for project pages
$(document).ready(function(){
    $("header").append(
        "<h1>Charlotte Chain Chasers</h1>\n" +
        "            <nav class=\"nav-bar\">\n" +
        "                <a href=\"discs.html\">Discs & Gear</a>\n" +
        "                -\n" +
        "                <a href=\"http://webpages.uncc.edu/alinster/itis3135/project/courses.html\">Course Reviews</a>\n" +
        "                -\n" +
        "                <a href=\"http://webpages.uncc.edu/alinster/itis3135/project/\">Home Page</a>\n" +
        "                -\n" +
        "                <a href=\"http://webpages.uncc.edu/alinster/itis3135/project/tips.html\">Tips</a>\n" +
        "                -\n" +
        "                <a href=\"http://webpages.uncc.edu/alinster/itis3135/project/pro-quiz.html\">Pro Quiz</a>\n" +
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