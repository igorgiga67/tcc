import { AppDataSource } from "./"
import { categoriaEntity, produtoEntity, clientesEntity, unidadeMedidaEntity, vendasEntity } from "./Entities"

export const CategoriaRepository = () => {
    return AppDataSource.getRepository(categoriaEntity)
}

export const UnidadeMedidaRepository = () => {
    return AppDataSource.getRepository(unidadeMedidaEntity)
}

export const ClientesRepository = () => {
    return AppDataSource.getRepository(clientesEntity)
}

export const ProdutosRepository = () => {
    return AppDataSource.getRepository(produtoEntity)
}

export const VendasRepository = () => {
    return AppDataSource.getRepository(vendasEntity)
}