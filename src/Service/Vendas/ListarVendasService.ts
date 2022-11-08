import { VendasRepository } from "../../Database/Repository"

export class ListarVendasService {
    async listar(): Promise< any> {
        const repo = VendasRepository()
       
        const result = await repo.find()
        return result
    }
}

