import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

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
                    name: "cliente",
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
                            name: "nome",
                            type: "varchar",
                        },
                        {
                            name: "telefone",
                            type: "varchar"
                        }
                    ],
                }),
                true
            )
            await queryRunner.createTable(
                new Table({
                    name: "produto",
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
                        {
                            name: "quantidade",
                            type: "decimal(10,2)"
                        },
                        {
                            name: "preco_custo",
                            type: "decimal(10,2)"
                        },
                        {
                            name: "preco_venda",
                            type: "decimal(10,2)"
                        },
                        {
                            name: "categoria_id",
                            type: "int"
                        },
                        {
                            name: "unidade_medida_id",
                            type: "int"
                        },
                    ],
                    foreignKeys: [
                        {
                          columnNames: ['categoria_id'],
                          referencedColumnNames: ['id'],
                          referencedTableName: 'categoria',
                          name: 'fk_produtos_categoria',
                          onDelete: 'RESTRICT',
                          onUpdate: 'CASCADE'
                        },
                        {
                          columnNames: ['unidade_medida_id'],
                          referencedColumnNames: ['id'],
                          referencedTableName: 'unidade_medida',
                          name: 'fk_produtos_unidade_medida',
                          onDelete: 'RESTRICT',
                          onUpdate: 'CASCADE'
                        }
                      ]
                }),
            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categoria")
        await queryRunner.dropTable("unidade_medida")
        await queryRunner.dropTable("cliente")
        await queryRunner.dropTable("produto")
    }

}
