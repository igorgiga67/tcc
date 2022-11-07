import { ClientesRepository } from "../../Database/Repository"

export class DeleteClientesService {
    async delete( id: string): Promise< any> {
        const repo = ClientesRepository()
        const IdConvert: number = +id
        console.log(IdConvert)
        if (!await repo.findOne({ where: { id: IdConvert } })) {
            return new Error('Não foi possivel encontrar categoria')
        }
        await repo.delete(id)
    }
}

