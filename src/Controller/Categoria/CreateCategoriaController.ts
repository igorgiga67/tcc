import { Request, Response } from 'express'
import { CreateCategoriaService } from '../../Service/Categoria'

export class CreateCategoriaController {
    async handle(request: Request, response: Response) {
        try {
            console.log('CHegou no controller')
            const { descricao } = request.body
            const createService = new CreateCategoriaService()
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