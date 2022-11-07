import { ClientesRepository } from "../../Database/Repository"

export class ListarClientesService {
    async listar(): Promise< any> {
        const repo = ClientesRepository()
       
        const result = await repo.find()
        return result
    }
}

