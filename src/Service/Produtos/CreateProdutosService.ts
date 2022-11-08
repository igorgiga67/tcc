import { ProdutosRepository } from "../../Database/Repository"

export class CreateProdutosService {
    async create( descricao: string, quantidade: number, precoCusto: number, precoVenda: number, categoriaId: number, unidadeMedidaId: number ): Promise< any> {
        const repo = ProdutosRepository()
        console.log('CHEGOU NO SERVICE')
        console.log(`Unidade Medida: ${unidadeMedidaId}`)
        //if (await repo.findOne({ where: { descricao: descricao } })) {
        //    return new Error('Já existe um produto com essa descrição.')
        //}
        const produtos = repo.create({descricao, quantidade, precoCusto, precoVenda, categoriaId, unidadeMedidaId })
        const result = await repo.save(produtos)
        return result
    }
}

