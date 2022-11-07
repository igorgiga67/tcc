import { CategoriaRepository } from "../../Database/Repository"

export class DeleteCategoriaService {
    async delete( id: string): Promise< any> {
        const repo = CategoriaRepository()
        const IdConvert: number = +id
        console.log(IdConvert)
        if (!await repo.findOne({ where: { id: IdConvert } })) {
            return new Error('Não foi possivel encontrar categoria')
        }
        await repo.delete(id)
    }
}

