{
    // namespace für block scope
    "use strict";

    const einf = document.getElementById("einfuehrung");
    console.log(einf);
    console.log(einf.id);
    console.log(typeof einf);

    const article = document.querySelectorAll("article");
    console.log(article);
    const firstArticle = document.querySelector("article");
    console.log(firstArticle);

    const pic = document.getElementsByClassName("picture");
    console.log(pic);

    const text = document.getElementsByTagName("p");
    console.log(text);

    /*
    const x = document.getElementByName("");
    console.log(x);
    */

    console.clear();
}