import { Router } from 'express'
import { CreateUnidadeMedidaController, DeleteUnidadeMedidaController, ListarUnidadeMedidaController, UpdateUnidadeMedidaController } from '../Controller/UnidadeMedida/'

export const unidadeMedidaRoutes = Router()

unidadeMedidaRoutes.post('/add', new CreateUnidadeMedidaController().handle)
unidadeMedidaRoutes.get('/', new ListarUnidadeMedidaController().handle)
unidadeMedidaRoutes.put('/update/:id', new UpdateUnidadeMedidaController().handle)
unidadeMedidaRoutes.delete('/delete/:id', new DeleteUnidadeMedidaController().handle)