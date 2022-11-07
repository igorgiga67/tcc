import { UnidadeMedidaRepository } from "../../Database/Repository"

export class ListarUnidadeMedidaService {
    async listar(): Promise< any> {
        const repo = UnidadeMedidaRepository()
       
        const result = await repo.find()
        return result
    }
}

