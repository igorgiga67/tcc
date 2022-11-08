import { ProdutosRepository } from "../../Database/Repository"

export class ListarProdutosService {
    async listar(): Promise< any> {
        const repo = ProdutosRepository()
       
        const result = await repo.find({relations: ['unidadeMedida', 'categoria']})
        return result
    }
}

