import { Request, Response } from 'express'
import { ListarProdutosService } from '../../Service/Produtos'

export class ListarProdutosController {
    async handle(request: Request, response: Response) {
        try {
            const createService = new ListarProdutosService()
            const result = await createService.listar( )
            if (result instanceof Error) {
                return response.status(400).json(result.message)
            }
            return response.json(result)
        } catch (error: any) {
            return response.status(500).json(error.message)
        }
    }
}