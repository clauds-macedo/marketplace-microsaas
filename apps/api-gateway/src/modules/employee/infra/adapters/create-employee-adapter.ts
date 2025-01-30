import { Employee } from '../../domain/entities/employee';
import { CreateEmployeeDTO } from '../validators/dtos/create-employee-dto';

export class CreateEmployeeAdapter {
  static toEntity(dto: CreateEmployeeDTO): Employee {
    return Employee.create(dto);
  }
}
