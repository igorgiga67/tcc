import { ClientesRepository } from "../../Database/Repository"

export class CreateClientesService {
    async create( descricao: string): Promise< any> {
        const repo = ClientesRepository()
        if (await repo.findOne({ where: { descricao: descricao } })) {
            return new Error('Já existe uma categoria com essa descrição.')
        }
        const clientes = repo.create({descricao})
        const result = await repo.save(clientes)
        return result
    }
}

