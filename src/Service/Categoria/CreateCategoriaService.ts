import { CategoriaRepository } from "../../Database/Repository"

export class CreateCategoriaService {
    async create( descricao: string): Promise< any> {
        const repo = CategoriaRepository()
        if (await repo.findOne({ where: { descricao: descricao } })) {
            return new Error('Já existe uma categoria com essa descrição.')
        }
        const categoria = repo.create({descricao})
        const result = await repo.save(categoria)
        return result
    }
}

