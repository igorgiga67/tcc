import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("cliente")
export class clientesEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nome!: string

    @Column()
    telefone!: string
}