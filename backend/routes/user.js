const express = require("express")
const app = express()
const fs = require("fs")
const path = require("path")
// import du package multer
const multer  = require('multer')
const moment = require('moment') // require



app.get('/:id' , (req , res ) =>{ //GET => récupérer
    const { id } = req.params // je recupere mon parametre dynamique
    const user = user.find( user => user.id ===  (id)) //je fais un find pour trouver l 'id de mon user 

    res.json(user)
})

const upload =multer({dest: 'public'})  //création d'une "mini" config multer
// cette ligne va créer le dossier /public/uploads s'il n'existe pas



app.post('/:id/file', upload.single ('file'), (req, res) => { // POST => Créer une nouvelle donnée
    const { id } = req.params
    const userIndex = users.findIndex(element => element.id == id)
})

// POST sur la route `/file` qui utilise le middleware multer
// Le middleware va créer le fichier automatiquement et rendre
// les informations disponible dans `req.file`



// La méthode fs.readfile() sert à lire le contenu d'un fichier :
fs.readFile('./users.json', (err, data) => {
    const users = JSON.parse(data)   //La méthode JSON.parse() analyse une chaîne et renvoie un objet JavaScript.  La chaîne doit être écrite au format JSON.

  
    users.profile_picture = `http://localhost:5000/${req.file.originalname}`

    // La méthode fs.writeFile(path, data, [options,] callback) réécrit sur le fichier si celui-ci existe :
        //     - `path` : le chemin du fichier
        // - `data` : ce qui va être écrit dans le fichier
        // - `options` : paramètre optionnel contenant les options (encoding, mode, flag)
        // - `callback` : fonction qui ne récupère que le paramètre `error` dans le cas d’une erreur
    fs.writeFile('./users.json', JSON.stringify(users), (err) => {
      res.json( $({users})(moment().format('MMMM Do YYYY, h:mm:ss a'))  )
    })
  })




//   ## Autres méthodes

// - Lire un dossier `fs.readdir(path, callback)`
// - Supprimer un fichier `fs.unlink(path, callback)`
// - Créer un dossier `fs.mkdir(path[, mode], callback)`
// - Supprimer un dossier `fs.rmdir(path, callback)`



  
module.exports = app