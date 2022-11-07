import { ClientesRepository } from "../../Database/Repository"

export class UpdateClientesService {
    async update( descricao: string, id: string): Promise< any> {
        const idConvert = +id
        const repo = ClientesRepository()
        const clientes = await repo.findOne({ where: { id : idConvert } })
        if (!clientes) {
            return new Error('Não foi possivel encontrar categoria.')
        }
        clientes.descricao = descricao
        const result = await repo.save(clientes)
        return result
    }
}

