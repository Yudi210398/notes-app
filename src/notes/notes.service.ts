import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesService {
  async getAllData() {
    return await `all data`;
  }

  async createData() {
    return `create data`;
  }

  async updateData(id: number) {
    console.log(+id);
    return `update data`;
  }

  async deleteData(id: number) {
    console.log(id);
    return `delete data`;
  }
}
