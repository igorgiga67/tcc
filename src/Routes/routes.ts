import { Router } from 'express'
import { produtosRoutes, clientesRoutes, unidadeMedidaRoutes, categoriaRoutes, vendasRoutes } from './'

 export const routes = Router()
 routes.use('/categoria', categoriaRoutes)
 routes.use('/unidade_medida', unidadeMedidaRoutes)
 routes.use('/clientes', clientesRoutes)
 routes.use('/produtos', produtosRoutes)
 routes.use('/vendas', vendasRoutes)