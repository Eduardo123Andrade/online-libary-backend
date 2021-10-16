import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addImagePathColumnInBooksTable1634086572432 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("book", new TableColumn({
            name: "image_path",
            type: "varchar",
            isNullable: false
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("book", 'image_path')
    }

}
