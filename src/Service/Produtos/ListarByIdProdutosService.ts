import { ProdutosRepository } from "../../Database/Repository"

export class ListarByIdProdutosService {
    async listarById(id: string): Promise< any> {
        const repo = ProdutosRepository()
       
        const idConvert: number = +id
        const result = await repo.find({where: {id: idConvert},relations: ['unidadeMedida', 'categoria']})
        return result
    }
}

