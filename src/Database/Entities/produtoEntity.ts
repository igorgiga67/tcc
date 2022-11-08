import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import { categoriaEntity } from "./categoriaEntity"
import { unidadeMedidaEntity } from "./unidadeMedidaEntity"

@Entity("produto")
export class produtoEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    descricao!: string

    @Column()
    quantidade!: number

    @Column({name: "categoria_id"})
    categoriaId!: number

    @Column({name: 'unidade_medida_id' })
    unidadeMedidaId!: number

    @Column({name: "preco_custo"})
    precoCusto!: number

    @Column({name: "preco_venda"})
    precoVenda!: number

    @ManyToOne(() => unidadeMedidaEntity, (unidadeMedida) => unidadeMedida.produtos)
    @JoinColumn({ name: 'unidade_medida_id' })
    unidadeMedida?: unidadeMedidaEntity

    @ManyToOne(() => categoriaEntity, (categoria) => categoria.produtos)
    @JoinColumn({ name: 'categoria_id' })
    categoria?: categoriaEntity
}