import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("clientes")
export class clientesEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    descricao!: string
}