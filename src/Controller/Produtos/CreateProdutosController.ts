import { Request, Response } from 'express'
import { CreateProdutosService } from '../../Service/Produtos'

export class CreateProdutosController {
    async handle(request: Request, response: Response) {
        try {
            const { descricao, quantidade, precoCusto, precoVenda, categoriaId, unidadeMedidaId } = request.body
            const createService = new CreateProdutosService()
            const result = await createService.create( descricao,quantidade, precoCusto, precoVenda, categoriaId, unidadeMedidaId )
            if (result instanceof Error) {
                return response.status(400).json(result.message)
            }
            return response.json(result)
        } catch (error: any) {
            return response.status(500).json(error.message)
        }
    }
}