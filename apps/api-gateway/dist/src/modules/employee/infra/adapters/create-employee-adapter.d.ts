import { Employee } from '../../domain/entities/Employee';
import { CreateEmployeeDTO } from '../validators/dtos/create-employee-dto';
export declare class CreateEmployeeAdapter {
    static toEntity(dto: CreateEmployeeDTO): Employee;
}
