import { VendasRepository } from "../../Database/Repository"

export class UpdateVendasService {
    async update( valor: number, id: string): Promise< any> {
        const idConvert = +id
        const repo = VendasRepository()
        const venda = await repo.findOne({ where: { id : idConvert } })
        if (!venda) {
            return new Error('Não foi possivel encontrar a unidade de medida.')
        }
        venda.valor = valor
        const result = await repo.save(venda)
        return result
    }
}

