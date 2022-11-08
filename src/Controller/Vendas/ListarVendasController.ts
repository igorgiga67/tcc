import { Request, Response } from 'express'
import { ListarVendasService } from '../../Service/Vendas'

export class ListarVendasController {
    async handle(request: Request, response: Response) {
        try {
            const createService = new ListarVendasService()
            const result = await createService.listar( )
            if (result instanceof Error) {
                return response.status(400).json(result.message)
            }
            return response.json(result)
        } catch (error: any) {
            return response.status(500).json(error.message)
        }
    }
}