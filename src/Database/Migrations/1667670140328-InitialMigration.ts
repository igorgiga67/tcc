import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class InitialMigration1667670140328 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "categoria",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isNullable: false
                    },
                    {
                        name: "descricao",
                        type: "varchar",
                    },
                ],
            }),
            true,
        ),
        await queryRunner.createTable(
            new Table({
                name: "unidade_medida",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "descricao",
                        type: "varchar",
                    },
                ],
            }),
            true,
        ),
        await queryRunner.createTable(
            new Table({
                name: "cliente",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "nome",
                        type: "varchar",
                    },
                    {
                        name: "telefone",
                        type: "varchar"
                    }
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categoria")
        await queryRunner.dropTable("unidade_medida")
        await queryRunner.dropTable("cliente")
    }

}
