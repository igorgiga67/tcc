import { Request, Response } from 'express'
import { UpdateClientesService } from '../../Service/Clientes'

export class UpdateClientesController {
    async handle(request: Request, response: Response) {
        try {
            const { nome, telefone } = request.body
            const { id } = request.params
            const createService = new UpdateClientesService()
            const result = await createService.update( nome, id, telefone )
            if (result instanceof Error) {
                return response.status(400).json(result.message)
            }
            return response.json(result)
        } catch (error: any) {
            return response.status(500).json(error.message)
        }
    }
}