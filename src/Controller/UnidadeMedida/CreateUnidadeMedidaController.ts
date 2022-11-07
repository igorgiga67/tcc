import { Request, Response } from 'express'
import { CreateUnidadeMedidaService } from '../../Service/UnidadeMedida'

export class CreateUnidadeMedidaController {
    async handle(request: Request, response: Response) {
        try {
            const { descricao } = request.body
            const createService = new CreateUnidadeMedidaService()
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