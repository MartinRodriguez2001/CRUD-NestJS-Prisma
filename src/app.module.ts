import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [ItemsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
