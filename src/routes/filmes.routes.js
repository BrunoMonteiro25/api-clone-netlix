const express = require('express')
const router = express.Router()
const Filme = require('../models/filme')

//Recuperar todos os registros
router.get('/', async (req, res) => {
  try {
    const filmes = await Filme.find({})
    res.json({ error: false, filmes })
  } catch (err) {
    res.json({ error: true, message: err.message })
  }
})

//Recuperar somente o resgistro com o id:
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const filme = await Filme.findById(id)
    res.json({ error: false, filme })
  } catch (err) {
    res.json({ error: true, message: err.message })
  }
})

//Criar um novo registro
router.post('/', async (req, res) => {
  try {
    const filme = req.body
    const response = await new Filme(filme).save()
    res.json({ error: false, filme: response })
  } catch (err) {
    res.json({ error: true, message: err.message })
  }
})

//Atualizar somente o resgistro com o id:
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const novo_filme = req.body
    const filme = await Filme.findByIdAndUpdate(id, novo_filme)
    res.json({ error: false, filme })
  } catch (err) {
    res.json({ error: true, message: err.message })
  }
})

//deletar somente o resgistro com o id:
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    await Filme.findByIdAndDelete(id)
    res.json({ error: false })
  } catch (err) {
    res.json({ error: true, message: err.message })
  }
})

module.exports = router
