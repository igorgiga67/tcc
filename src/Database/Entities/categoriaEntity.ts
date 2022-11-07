import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("categoria")
export class categoriaEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    descricao!: string
}