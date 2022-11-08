import { Request, Response } from 'express'
import { CreateClientesService } from '../../Service/Clientes'

export class CreateClientesController {
    async handle(request: Request, response: Response) {
        try {
            const { nome, telefone } = request.body
            const createService = new CreateClientesService()
            const result = await createService.create( nome, telefone )
            if (result instanceof Error) {
                return response.status(400).json(result.message)
            }
            return response.json(result)
        } catch (error: any) {
            return response.status(500).json(error.message)
        }
    }
}