import { Router } from 'express'
import { CreateProdutosController, DeleteProdutosController, ListarProdutosController, UpdateProdutosController,ListarByIdProdutosController } from '../Controller/Produtos/'

export const produtosRoutes = Router()

produtosRoutes.post('/add', new CreateProdutosController().handle)
produtosRoutes.get('/', new ListarProdutosController().handle)
produtosRoutes.get('/:id', new ListarByIdProdutosController().handle)
produtosRoutes.put('/update/:id', new UpdateProdutosController().handle)
produtosRoutes.delete('/delete/:id', new DeleteProdutosController().handle)