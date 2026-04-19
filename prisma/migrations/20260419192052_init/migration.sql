-- AlterTable
CREATE SEQUENCE books_id_seq;
ALTER TABLE "Books" ALTER COLUMN "id" SET DEFAULT nextval('books_id_seq');
ALTER SEQUENCE books_id_seq OWNED BY "Books"."id";
