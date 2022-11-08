import { VendasRepository } from "../../Database/Repository"

export class DeleteVendasService {
    async delete( id: string): Promise< any> {
        const repo = VendasRepository()
        const IdConvert: number = +id
        console.log(IdConvert)
        if (!await repo.findOne({ where: { id: IdConvert } })) {
            return new Error('Não foi possivel encontrar a venda')
        }
        await repo.delete(id)
    }
}

