import { ProdutosRepository } from "../../Database/Repository"

export class DeleteProdutosService {
    async delete( id: string): Promise< any> {
        const repo = ProdutosRepository()
        const IdConvert: number = +id
        console.log(IdConvert)
        if (!await repo.findOne({ where: { id: IdConvert } })) {
            return new Error('Não foi possivel encontrar um produto')
        }
        await repo.delete(id)
    }
}

