/**
 * Serveur Express pour la mise en place backend  Node.js
 */

const express = require('express')// Import de Express
const app = express() // Application Express
const port = 4000 // Port de démarrage de l'application 

app.set('view engine', 'ejs')//Définir ejs comme moteur de template


//Route "/"accessible avec GET
app.get('/', (req, res) => {
    //res, est une réponse HTTP
    res.send('Bonjour les gens');
  })

//Demarrage de l'application
app.listen(port, () => {
    console.log(`
        Le serveur est en écoute sur le port http://localhost:${port}
        ctrl+clic (cmd+clic) : http://localhost:${port}`)
});