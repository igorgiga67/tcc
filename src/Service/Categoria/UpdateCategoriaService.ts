import { CategoriaRepository } from "../../Database/Repository"

export class UpdateCategoriaService {
    async update( descricao: string, id: string): Promise< any> {
        const idConvert = +id
        const repo = CategoriaRepository()
        const categoria = await repo.findOne({ where: { id : idConvert } })
        if (!categoria) {
            return new Error('Não foi possivel encontrar categoria.')
        }
        categoria.descricao = descricao
        const result = await repo.save(categoria)
        return result
    }
}

