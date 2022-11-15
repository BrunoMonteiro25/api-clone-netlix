const database = require('../services/database')
const Usuario = require('../models/usuario')
const usuarioJSON = require('../data/usuario.json')

const addUsers = async () => {
  try {
    for (let usuario of usuarioJSON) {
      console.log(`inserindo ${usuario.nome}`)
      await new Usuario(usuario).save()
    }
    console.log('final do script')
  } catch (err) {
    console.log(err.message)
  }
}

addUsers()
