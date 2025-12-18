import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { PrismaDataModule } from 'src/prisma-data/prisma-data.module';

@Module({
  controllers: [NotesController],
  providers: [NotesService],
  imports: [PrismaDataModule],
})
export class NotesModule {}
