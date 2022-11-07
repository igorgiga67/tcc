import { UnidadeMedidaRepository } from "../../Database/Repository"

export class CreateUnidadeMedidaService {
    async create( descricao: string): Promise< any> {
        const repo = UnidadeMedidaRepository()
        if (await repo.findOne({ where: { descricao: descricao } })) {
            return new Error('Já existe uma categoria com essa descrição.')
        }
        const categoria = repo.create({descricao})
        const result = await repo.save(categoria)
        return result
    }
}

