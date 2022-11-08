import { Request, Response } from 'express'
import { DeleteProdutosService } from '../../Service/Produtos'

export class DeleteProdutosController {
    async handle(request: Request, response: Response) {
        try {
            const { id } = request.params
            const createService = new DeleteProdutosService()
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