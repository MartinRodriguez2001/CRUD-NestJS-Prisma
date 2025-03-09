import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

//Aqui esta la logica del CRUD
@Injectable()
export class ItemsService {

  constructor(private prismaService: PrismaService) {}

  create(createItemDto: CreateItemDto) {
    return this.prismaService.item.create({
      data: createItemDto
    }
      
    );
  }

  findAll() {
    return this.prismaService.item.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
