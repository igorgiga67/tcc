import { CategoriaRepository } from "../../Database/Repository"

export class ListarCategoriaService {
    async listar(): Promise< any> {
        const repo = CategoriaRepository()
       
        const result = await repo.find()
        return result
    }
}

