import { Router } from "express";
import { prisma } from "./prisma";

export const rotas = Router()

rotas.get('/', async (req, res) => {
   const cadastropizza = await prisma.cadastropizza.findMany()
   res.json(cadastropizza)

})

rotas.post('/create', async (req, res) => {
 const  {nome, tamanhopizza, saborpizza, adicionais } = req.body
 const PostCadastropizza = await prisma.cadastropizza.create ({
    data: {
        nome,
        tamanhopizza,
        saborpizza,
        adicionais
    }
 })
 res.json(PostCadastropizza)
})

rotas.delete('/delete/:id', async (req, res) => {

    const { id } = req.params
    const deleteCadastropizza = prisma.cadastropizza.delete({
        where: {
            id: id
        }
 }) 
 res.json(deleteCadastropizza)
})

rotas.put('/edit/:id', async (req, res) => { 
  const { id } = req.params
  const { nome, tamanhopizza, saborpizza, adicionais } = req.body
  const editCadastropizza = prisma.cadastropizza.update({
    where: {
        id
    }, 
    data:  {
        nome,
        tamanhopizza,
        saborpizza,
        adicionais
    }
})
res.json(editCadastropizza)
})
