import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"


@Entity("vendas")
export class vendasEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    valor!: number
}