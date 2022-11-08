import { Request, Response } from 'express'
import { ListarByIdProdutosService } from '../../Service/Produtos'

export class ListarByIdProdutosController {
    async handle(request: Request, response: Response) {
        try {
            const { id } = request.params
            const createService = new ListarByIdProdutosService()
            const result = await createService.listarById( id )
            if (result instanceof Error) {
                return response.status(400).json(result.message)
            }
            return response.json(result)
        } catch (error: any) {
            return response.status(500).json(error.message)
        }
    }
}