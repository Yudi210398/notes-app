import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { PrismaDataModule } from './prisma-data/prisma-data.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    NotesModule,
    PrismaDataModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
