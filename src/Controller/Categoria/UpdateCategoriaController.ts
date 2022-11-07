import { Request, Response } from 'express'
import { UpdateCategoriaService } from '../../Service/Categoria'

export class UpdateCategoriaController {
    async handle(request: Request, response: Response) {
        try {
            const { descricao } = request.body
            const { id } = request.params
            const createService = new UpdateCategoriaService()
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