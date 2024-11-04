(function init(){

    "use strict";

    const form = document.forms[0];
    console.log(form);    
  
    const submit = document.querySelector("[type=submit]");
    submit.addEventListener("click",
                            e => {e.preventDefault();
                                new FormData(form);},
                            false);
  
    // Event Listener für das formdata-Event
    form.addEventListener("formdata", (e) => {
        // Zugriff auf die Formulardaten
        let data = e.formData;
  
        // Erstellt ein leeres Objekt, um die Formulardaten zu speichern
        let formData = {};
  
        // Fügt die Werte der Formularelemente zum formData-Objekt hinzu
        for(let value of data.entries()){
            // Überprüft, ob der Schlüssel bereits existiert (für Checkboxen)
            if(formData[value[0]]) {
                // Wenn der Schlüssel bereits existiert, fügt den neuen Wert hinzu
                formData[value[0]].push(value[1]);
            } else {
                // Wenn der Schlüssel noch nicht existiert, erstellt ein neues Array und fügt den Wert hinzu
                formData[value[0]] = [value[1]];
            }
        }
  
        // Konvertiert das formData-Objekt in ein JSON-Objekt
        let jsonFormData = JSON.stringify(formData);
  
        // Zeigt das JSON-Objekt in der Konsole an
        console.log(jsonFormData);
    }, false);
  
    
  
  })();