import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNotesDto } from 'src/dto/notesDTO/notes.dto';
import { updateDTO } from 'src/dto/notesDTO/editNotes.dto';

@Controller('notes')
export class NotesController {
  constructor(private serviceNote: NotesService) {}

  @Get()
  async getData() {
    return await this.serviceNote.getAllData();
  }

  @Post()
  async createData(@Body() data: CreateNotesDto) {
    return await this.serviceNote.createData(data);
  }

  @Patch(`:id`)
  async updateData(@Body() dto: updateDTO, @Param('id') id: number) {
    return await this.serviceNote.updateData(+id, dto);
  }

  @Delete(`:id`)
  async deleteData(@Param('id') id: number) {
    return await this.serviceNote.deleteData(+id);
  }
}
