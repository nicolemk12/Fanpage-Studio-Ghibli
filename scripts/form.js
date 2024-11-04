(function init(){
    "use strict";

    const form = document.getElementById("form");
    const inputs = document.querySelectorAll("input, select, textarea");
    const meinung = document.getElementById("message");
    const email = document.getElementById("mail");

    // fügt Event-Listener zum Klick-Ereignis auf den Submit-Button hinzu
    const submitBtn = document.querySelector("[type=submit]");

    submitBtn.addEventListener("click", e => {
        e.preventDefault(); // verhindert das Standardverhalten des Submit-Buttons
        resetErrors();      // eventuell zuvor angezeigte Fehlermeldungen zurückzusetzen

        const validates = validate();

        if (validates) {
            outputDataToConsole(); // Formulardaten in der Konsole auszugeben
            formDataToJson();      // an einen Server senden
            addSuccessMessage();   // Erfolgsmeldung anzuzeigen
            form.reset();          // Formular zurückgesetzt, indem alle Eingabefelder auf ihre Standardwerte zurückgesetzt werden
        }
    }, false);

    // beim Klicken auf den Reset-Button wird die resetErrors-Funktion aufgerufen
    const resetBtn = form.querySelector("[type=reset]");
    resetBtn.addEventListener("click", resetErrors, false);

    function validateMeinung() {
        if (meinung.value.length == 0) {
            addErrorMessage(meinung, "Bitte füllen Sie das Textfeld aus");
            return false;
        }
        return true;
    }

    function validateEmail() {
        if (email.value.length == 0) {
            addErrorMessage(email, "Bitte füllen Sie das Textfeld aus"); 
            return false;
        }
        return true;
    }

    // Validations-Funktion
    function validate() {
        const isMeinungValid = validateMeinung();
        const isEmailValid = validateEmail();

        if (!isMeinungValid || !isEmailValid) {
            return false;
        }
        return true;
    }

    // Erfolgsmeldung
    function addSuccessMessage() {
        const successMessageContainer = document.createElement("small"); // dient als Container für die Erfolgsmeldung
        const successMessage = document.createTextNode("Dankeschön für die Teilnahme an der Umfrage");
        successMessageContainer.append(successMessage); // Der Textknoten wird dem Erfolgsmeldungs-Container als Kind hinzugefügt
        successMessageContainer.classList.add("success"); // um das Styling der Erfolgsmeldung anzupassen
        form.appendChild(successMessageContainer); // Dadurch wird die Erfolgsmeldung innerhalb des Formulars angezeigt
    
        setTimeout(() => { // Nach einer Verzögerung von 5000 Millisekunden (5 Sekunden) wird die Erfolgsmeldung aus dem Formular entfernt
            form.removeChild(successMessageContainer);
        }, "5000");
    }

    // fügt eine Fehlermeldung zu einem bestimmten Eingabeelement hinzu
    function addErrorMessage(currentInput, errorText) {
    const errorMessageContainer = document.createElement("small"); // Container für die Fehlermeldung
    const errorMessage = document.createTextNode(errorText); // Textknoten mit dem angegebenen Fehlermeldungstext wird erstellt
    errorMessageContainer.appendChild(errorMessage); // Textknoten wird dem Fehlermeldung-Container als Kind hinzugefügt
    errorMessageContainer.classList.add("error"); // Styling der Fehlermeldung
    
    const parent = currentInput.parentElement;
    parent.appendChild(errorMessageContainer);
}

    // entfernt alle vorhandenen Fehlermeldungen aus dem Formular
    function resetErrors() {
        const errors = document.querySelectorAll("small");

        errors.forEach(error => {
            error.parentNode.removeChild(error);
        })
    }

    // Ausgabe der Formulardaten in der Konsole
    function outputDataToConsole() {
        console.log("Angaben:");

        inputs.forEach(input => {
            if (input.value.length != 0) {
                if (input.type == "radio" || input.type == "checkbox") {
                    // nur die Ausgabe der ausgewählten Buttons oder der asugwählten Checkbox zu der Konsole
                    if (input.checked) {
                        console.log(input.getAttribute("name"));
                        console.log(input.value);
                    }
                }
                else {
                    console.log(input.getAttribute("name"));
                    console.log(input.value);
                }
            }
        })
    }

    // Umwandlund der Formulardaten in ein JSON-Objekt
    function formDataToJson() {
        const formData = new FormData(form); // ermöglicht den Zugriff auf die Werte und Eigenschaften der Eingabeelemente im Formular

        const jsonObject = {}; // // Ein leeres JavaScript-Objekt ({}) wird erstellt, das als Container für die konvertierten Formulardaten dient
        formData.forEach((value, key) => { // // über jedes Formularelement und dessen Wert zu iterieren
            jsonObject[key] = value; 
        });

        console.log(jsonObject); // Ausgabe in der Konsole
    }
})();