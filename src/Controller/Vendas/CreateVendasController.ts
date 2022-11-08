import { Request, Response } from 'express'
import { CreateVendasService } from '../../Service/Vendas'

export class CreateVendasController {
    async handle(request: Request, response: Response) {
        try {
            const { descricao } = request.body
            const createService = new CreateVendasService()
            const result = await createService.create( descricao )
            if (result instanceof Error) {
                return response.status(400).json(result.message)
            }
            return response.json(result)
        } catch (error: any) {
            return response.status(500).json(error.message)
        }
    }
}