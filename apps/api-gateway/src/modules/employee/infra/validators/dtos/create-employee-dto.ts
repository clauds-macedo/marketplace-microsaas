import { IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDTO {
  @IsString()
  name: string;

  @IsString()
  position: string;

  @IsNumber()
  salary: number;
}
