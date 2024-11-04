// Studio Ghibli
(function init() {
    "use strict";

    const img = document.querySelector("img");

    function changeImage(){
        if (img.src.match("th.png")){
            img.src = "pics/th2.jpg";
            console.log(img.src);
        }
        else {
            console.log("click",img.src);
            img.src = "pics/th.png";
        }
    }

    function changeImgAlert(message){
        if (img.src.match("th.png"))
            img.src = "pics/th2.jpg";
        else
            img.src = "pics/th.png";
        alert(message);
    }

    img.addEventListener("click", 
    evt => {changeImgAlert("Das Bild wird geändert!");}, 
    false);
})();


//Mein Nachbar Totoro
(function init() {
    "use strict";
  
    const imageElement = document.getElementById("totoro");   //imageElement wird mit dem Element mit der ID "image" aus dem DOM (Document Object Model) verknüpft
    const captionElement = document.getElementById("totoroCap"); //captionElement wird mit dem Element mit der ID "caption" aus dem DOM verknüpft
  
    imageElement.addEventListener("click", () => {
      if (imageElement.src.includes("totoro.jpg")) {
        imageElement.src = "pics/totoro2.jpg";
      } else {
        imageElement.src = "pics/totoro.jpg";
      }
  
      const existingCaption = captionElement.textContent;
      if (!existingCaption.includes("Das Bild wurde geändert")) {
        captionElement.textContent = existingCaption + " Das Bild wurde geändert!";
      }
    });

    /**
     * Ein Klick-Eventlistener wird dem imageElement hinzugefügt. Wenn das Bild geklickt wird:
Überprüft der Code, ob die Quell-URL des Bildes (über imageElement.src) den Text "bild1.jpg" enthält. 
Falls ja, wird die Quell-URL auf "pics/totoro2.jpg" geändert. 
Andernfalls wird die Quell-URL auf "pics/totoro.jpg" geändert.
existingCaption wird mit dem aktuellen Textinhalt der Bildunterschrift (captionElement.textContent) gespeichert.
Der Code überprüft, ob der Text "Das Bild wurde geändert" bereits in der Bildunterschrift enthalten ist (existingCaption.includes("Das Bild wurde geändert")). 
Falls nicht, wird der Text " Das Bild wurde geändert!" 
zur Bildunterschrift hinzugefügt (mit captionElement.textContent = existingCaption + " Das Bild wurde geändert!").
     */
  
    const elements = document.querySelectorAll("p");
    elements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.classList.add("mark");
      });
      element.addEventListener("mouseleave", () => {
        element.classList.remove("mark");
      });
    });
    /**
     * Alle Elemente mit der Klasse "p" werden mit document.querySelectorAll("p") aus dem DOM ausgewählt und in der elements-Variablen gespeichert.
Eine Schleife (forEach) wird verwendet, um über jedes Element in elements zu iterieren.
Für jedes Element wird ein Mouseenter-Eventlistener hinzugefügt. Wenn der Mauszeiger über das Element bewegt wird:
Der Klasse "mark" wird mit element.classList.add("mark") hinzugefügt, um das Element zu markieren.
Für jedes Element wird auch ein Mouseleave-Eventlistener hinzugefügt. Wenn der Mauszeiger das Element verlässt:
Die Klasse "mark" wird mit element.classList.remove("mark") entfernt, um das Element nicht mehr zu markieren.
     */
  })();
  
  //Kiki's kleiner Lieferservice
  (function init() {
    "use strict";
  
    const imageElement = document.getElementById("kiki");
    const captionElement = document.getElementById("kikiCap");
  
    imageElement.addEventListener("click", () => {
      if (imageElement.src.includes("kiki.jpg")) {
        imageElement.src = "pics/kiki2.png";
      } else {
        imageElement.src = "pics/kiki.jpg";
      }
  
      const existingCaption = captionElement.textContent;
    if (!existingCaption.includes("Das Bild wurde geändert")) {
      captionElement.textContent = existingCaption + " Das Bild wurde geändert!";
    }
    });
  })();

  
  //Chihiros Reise ins Zauberland
  (function init() {
    "use strict";
  
    const imageElement = document.getElementById("chihiro");
    const captionElement = document.getElementById("chihiroCap");
  
    imageElement.addEventListener("click", () => {
      if (imageElement.src.includes("chihiro.jpg")) {
        imageElement.src = "pics/chihiro2.jpg";
      } else {
        imageElement.src = "pics/chihiro.jpg";
      }
  
      const existingCaption = captionElement.textContent;
      if (!existingCaption.includes("Das Bild wurde geändert")) {
        captionElement.textContent = existingCaption + " Das Bild wurde geändert!";
      }
    });
  })();
  
  
  //Das wandelnde Schloss
  (function init() {
    "use strict";
  
    const imageElement = document.getElementById("schloss");
    const captionElement = document.getElementById("schlossCap");
  
    imageElement.addEventListener("click", () => {
      if (imageElement.src.includes("schloss.jpg")) {
        imageElement.src = "pics/schloss2.jpg";
      } else {
        imageElement.src = "pics/schloss.jpg";
      }
  
      const existingCaption = captionElement.textContent;
      if (!existingCaption.includes("Das Bild wurde geändert")) {
        captionElement.textContent = existingCaption + " Das Bild wurde geändert!";
      }
    });
  })();