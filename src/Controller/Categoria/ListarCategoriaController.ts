import { Request, Response } from 'express'
import { ListarCategoriaService } from '../../Service/Categoria'

export class ListarCategoriaController {
    async handle(request: Request, response: Response) {
        try {
            const createService = new ListarCategoriaService()
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