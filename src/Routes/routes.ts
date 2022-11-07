import { Router } from 'express'
import { categoriaRoutes } from './'
import { unidadeMedidaRoutes } from './'
import { clientesRoutes } from './'

 export const routes = Router()
 routes.use('/categoria', categoriaRoutes)
 routes.use('/unidadeMedida', unidadeMedidaRoutes)
 routes.use('/clientes', clientesRoutes)