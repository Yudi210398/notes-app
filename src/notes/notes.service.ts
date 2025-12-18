import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { updateDTO } from 'src/dto/notesDTO/editNotes.dto';
import { CreateNotesDto } from 'src/dto/notesDTO/notes.dto';
import { PrismaDataService } from 'src/prisma-data/prisma-data.service';

@Injectable()
export class NotesService {
  constructor(private servicePrisma: PrismaDataService) {}

  async getAllData() {
    const dataAll = await this.servicePrisma.noteShema.findMany();
    if (dataAll.length === 0)
      throw new HttpException('gk ketemu semua data', HttpStatus.NOT_FOUND);
    return dataAll;
  }

  async createData(data: CreateNotesDto) {
    const createData = await this.servicePrisma.noteShema.create({
      data: { title: data.title, content: data.content },
    });

    return createData;
  }

  async updateData(id: number, dto: updateDTO) {
    const findId = await this.servicePrisma.noteShema.findFirst({
      where: { id },
    });

    if (!findId)
      throw new HttpException('gk ketemu  data', HttpStatus.NOT_FOUND);

    const updatedata = await this.servicePrisma.noteShema.update({
      where: { id },
      data: { title: dto.title, content: dto.content },
    });

    return updatedata;
  }

  async deleteData(id: number) {
    return await this.servicePrisma.noteShema.delete({ where: { id } });
  }
}
