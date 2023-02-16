import { MigrationInterface, QueryRunner } from 'typeorm';

export class todoApi1676467304571 implements MigrationInterface {
  name = 'todoApi1676467304571';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "todos"
       (
           "id"     SERIAL            NOT NULL,
           "todo"   character varying NOT NULL,
           "isDone" boolean           NOT NULL,
           CONSTRAINT "PK_ca8cafd59ca6faaf67995344225" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "todos"`);
  }
}
