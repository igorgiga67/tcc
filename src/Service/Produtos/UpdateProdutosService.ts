import { ProdutosRepository } from "../../Database/Repository"

export class UpdateProdutosService {
    async update( descricao: string, id: string): Promise< any> {
        const idConvert = +id
        const repo = ProdutosRepository()
        const produtos = await repo.findOne({ where: { id : idConvert } })
        if (!produtos) {
            return new Error('Não foi possivel encontrar um produto.')
        }
        produtos.descricao = descricao
        const result = await repo.save(produtos)
        return result
    }
}

