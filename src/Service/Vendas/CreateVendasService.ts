import { VendasRepository } from "../../Database/Repository"

export class CreateVendasService {
    async create( valor: number): Promise< any> {
        const repo = VendasRepository()
        if (await repo.findOne({ where: { valor: valor } })) {
            return new Error('Já existe uma venda com essa descrição.')
        }
        const venda = repo.create({valor})
        const result = await repo.save(venda)
        return result
    }
}

