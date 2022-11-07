import { Router } from 'express'
import { CreateCategoriaController, DeleteCategoriaController, ListarCategoriaController, UpdateCategoriaController } from '../Controller/Categoria/'

export const categoriaRoutes = Router()

categoriaRoutes.post('/add', new CreateCategoriaController().handle)
categoriaRoutes.get('/', new ListarCategoriaController().handle)
categoriaRoutes.put('/update/:id', new UpdateCategoriaController().handle)
categoriaRoutes.delete('/delete/:id', new DeleteCategoriaController().handle)