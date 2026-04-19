import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from '../prisma.service';
import { Prisma } from 'generated/prisma/client';

@Injectable()
export class BooksService {

  constructor(private prismaService: PrismaService) {

  }
  create(createBookDto: CreateBookDto) {
    this.prismaService.books.create({
      data: {
        title: createBookDto.title,
        authorId: createBookDto.authorId,
        published: true,
        summary: createBookDto.summary
      }
    })
    return 'This action adds a new book';
  }

  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(where: Prisma.BooksWhereUniqueInput) {
    this.prismaService.books.delete({
      where
    })
    return `This action removes a  book`;
  }
}
