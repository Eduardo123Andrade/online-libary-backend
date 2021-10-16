import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class book1634075548135 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "book",
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "title",
                    type: "varchar", 
                    isNullable: false
                },
                {
                    name: "page",
                    type: "integer",
                    isNullable: false,
                },
                {
                    name: "description",
                    type: "varchar",
                    isNullable: false,
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("book")
    }

}
