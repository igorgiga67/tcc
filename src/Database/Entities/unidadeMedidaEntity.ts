import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("UnidadeMedida")
export class unidadeMedidaEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    descricao!: string
}