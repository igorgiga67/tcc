import { Request, Response } from 'express'
import { DeleteClientesService } from '../../Service/Clientes'

export class DeleteClientesController {
    async handle(request: Request, response: Response) {
        try {
            const { id } = request.params
            const createService = new DeleteClientesService()
            const result = await createService.delete( id )
            if (result instanceof Error) {
                return response.status(400).json(result.message)
            }
            return response.json(result)
        } catch (error: any) {
            return response.status(500).json(error.message)
        }
    }
}