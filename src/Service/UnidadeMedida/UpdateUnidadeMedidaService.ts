import { UnidadeMedidaRepository } from "../../Database/Repository"

export class UpdateUnidadeMedidaService {
    async update( descricao: string, id: string): Promise< any> {
        const idConvert = +id
        const repo = UnidadeMedidaRepository()
        const unidadeMedida = await repo.findOne({ where: { id : idConvert } })
        if (!unidadeMedida) {
            return new Error('Não foi possivel encontrar a unidade de medida.')
        }
        unidadeMedida.descricao = descricao
        const result = await repo.save(unidadeMedida)
        return result
    }
}

