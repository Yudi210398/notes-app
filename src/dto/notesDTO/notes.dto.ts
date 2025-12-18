import { IsNotEmpty } from 'class-validator';

export class CreateNotesDto {
  @IsNotEmpty({ message: 'Title Tidak Boleh kosong,' })
  title: string;

  @IsNotEmpty({ message: 'Title Tidak Boleh kosong,' })
  content: string;
}
