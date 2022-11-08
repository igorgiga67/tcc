import { ClientesRepository } from "../../Database/Repository"

export class CreateClientesService {
    async create( nome: string, telefone: string): Promise< any> {
        const repo = ClientesRepository()
        if (await repo.findOne({ where: { nome: nome } })) {
            return new Error('Já existe um cliente com esse nome.')
        }
        const clientes = repo.create({nome, telefone})
        const result = await repo.save(clientes)
        return result
    }
}

