import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { produtoEntity } from "./produtoEntity"

@Entity("unidade_medida")
export class unidadeMedidaEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    descricao!: string

    @OneToMany(() => produtoEntity, (produtos) => produtos.unidadeMedida)
    produtos!: produtoEntity[]
}