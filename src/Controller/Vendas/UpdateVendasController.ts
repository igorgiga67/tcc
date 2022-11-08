import { Request, Response } from 'express'
import { UpdateVendasService } from '../../Service/Vendas'

export class UpdateVendasController {
    async handle(request: Request, response: Response) {
        try {
            const { descricao } = request.body
            const { id } = request.params
            const createService = new UpdateVendasService()
            const result = await createService.update( descricao, id )
            if (result instanceof Error) {
                return response.status(400).json(result.message)
            }
            return response.json(result)
        } catch (error: any) {
            return response.status(500).json(error.message)
        }
    }
}