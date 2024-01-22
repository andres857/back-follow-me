import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UbicationsAddColumnUrl1705864599808 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'ubications',
      new TableColumn({
        name: 'imageUrl',
        type: 'varchar',
        length: '255',
        isNullable: true, // o false si quieres que sea un campo obligatorio
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('ubications', 'imageUrl');
  }
}
