import { Router } from 'express'
import { CreateVendasController, DeleteVendasController, ListarVendasController, UpdateVendasController } from '../Controller/Vendas/'

export const vendasRoutes = Router()

vendasRoutes.post('/add', new CreateVendasController().handle)
vendasRoutes.get('/', new ListarVendasController().handle)
vendasRoutes.put('/update/:id', new UpdateVendasController().handle)
vendasRoutes.delete('/delete/:id', new DeleteVendasController().handle)