import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { produtoEntity } from "./produtoEntity"

@Entity("categoria")
export class categoriaEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    descricao!: string

    @OneToMany(() => produtoEntity, (produtos) => produtos.categoria)
    produtos!: produtoEntity[]
}