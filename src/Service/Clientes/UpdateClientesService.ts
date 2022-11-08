import { ClientesRepository } from "../../Database/Repository"

export class UpdateClientesService {
    async update( nome: string, id: string, telefone: string): Promise< any> {
        const idConvert = +id
        const repo = ClientesRepository()
        const clientes = await repo.findOne({ where: { id : idConvert } })
        if (!clientes) {
            return new Error('Não foi possivel encontrar o cliente.')
        }
        clientes.nome = nome
        clientes.telefone = telefone
        const result = await repo.save(clientes)
        return result
    }
}

