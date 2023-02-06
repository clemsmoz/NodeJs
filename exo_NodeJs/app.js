// créer une constante pour appeler  le frameworks express et ainsi faciliter la construction d'un serveur 
const express = require('express');
// créer une constante pour appeler fs et lire les fichier Json
const fs = require('fs');
// // créer une constante pour dire que app = express() est ainsi stoker le framework express directement dans l'application 

 const app = express();


// lecture de la route où envoyer la requête
app.get("/data", (requeste, response) => {
    // lecture du fichier data.json contenant les données
    fs.readFile("data.json", (err, data) => {
      // si le fichier n'a pas été trouvé renvoie une erreur

        if (err) {
        response.status(500).json({
          message: "une érreur lors de la lecture des données",
          error: err,
        });
        // si le fichier a été trouvé renvoie le contenu du fichier
      } else {
        response.status(200).json(JSON.parse(data));
      }
    });
  });

// écoute du port sélectionné pour le serveur local
  app.listen(8000, () => {
    console.log("Server listening on port 8000");
    
  })
  
