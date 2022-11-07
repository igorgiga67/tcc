import { AppDataSource } from "./"
import { categoriaEntity } from "./Entities"
import { unidadeMedidaEntity } from "./Entities"
import { clientesEntity } from "./Entities"

export const CategoriaRepository = () => {
    return AppDataSource.getRepository(categoriaEntity)
}

export const UnidadeMedidaRepository = () => {
    return AppDataSource.getRepository(unidadeMedidaEntity)
}

export const ClientesRepository = () => {
    return AppDataSource.getRepository(clientesEntity)
}