import { UnidadeMedidaRepository } from "../../Database/Repository"

export class DeleteUnidadeMedidaService {
    async delete( id: string): Promise< any> {
        const repo = UnidadeMedidaRepository()
        const IdConvert: number = +id
        console.log(IdConvert)
        if (!await repo.findOne({ where: { id: IdConvert } })) {
            return new Error('Não foi possivel encontrar a unidade de medida')
        }
        await repo.delete(id)
    }
}

