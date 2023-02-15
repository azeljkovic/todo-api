import { MigrationInterface, QueryRunner } from 'typeorm';

export class todoApi1676447074813 implements MigrationInterface {
  name = 'todoApi1676447074813';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "todo_entity" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "isActive" boolean NOT NULL, CONSTRAINT "PK_5e18fff6d62959da212066f2882" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "todo_entity"`);
  }
}
