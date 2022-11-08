import { UnidadeMedidaRepository } from "../../Database/Repository"

export class CreateUnidadeMedidaService {
    async create( descricao: string): Promise< any> {
        const repo = UnidadeMedidaRepository()
        if (await repo.findOne({ where: { descricao: descricao } })) {
            return new Error('Já existe uma unidade de medida com essa descrição.')
        }
        const unidade = repo.create({descricao})
        const result = await repo.save(unidade)
        return result
    }
}

