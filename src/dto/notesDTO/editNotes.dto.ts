import { PartialType } from '@nestjs/mapped-types';
import { CreateNotesDto } from './notes.dto';

export class updateDTO extends PartialType(CreateNotesDto) {}
