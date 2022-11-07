import { Router } from 'express'
import { CreateClientesController, DeleteClientesController, ListarClientesController, UpdateClientesController } from '../Controller/Clientes/'

export const clientesRoutes = Router()

clientesRoutes.post('/add', new CreateClientesController().handle)
clientesRoutes.get('/', new ListarClientesController().handle)
clientesRoutes.put('/update/:id', new UpdateClientesController().handle)
clientesRoutes.delete('/delete/:id', new DeleteClientesController().handle)