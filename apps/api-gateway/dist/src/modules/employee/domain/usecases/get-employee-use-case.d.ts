import { Employee } from '../../domain/entities/Employee';
import { IEmployeeRepository } from '../repositories/employee-repository';
export declare class GetEmployeeUseCase {
    private employeeRepository;
    constructor(employeeRepository: IEmployeeRepository);
    execute(id: string): Promise<Employee | null>;
}
