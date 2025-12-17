import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private serviceNote: NotesService) {}

  @Get()
  async getData() {
    return await this.serviceNote.getAllData();
  }

  @Post()
  async createData() {
    return await this.serviceNote.createData();
  }

  @Patch(`:id`)
  async updateData(@Param('id') id: number) {
    return await this.serviceNote.updateData(+id);
  }

  @Delete(`:id`)
  async deleteData(@Param('id') id: number) {
    return await this.serviceNote.deleteData(+id);
  }
}
