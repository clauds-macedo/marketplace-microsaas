import { Employee, IEmployee } from '../entities/employee';
import { IEmployeeRepository } from '../repositories/employee-repository';
export declare class CreateEmployeeUseCase {
    private employeeRepository;
    constructor(employeeRepository: IEmployeeRepository);
    execute({ name, position, salary, }: Omit<IEmployee, 'id'>): Promise<Employee>;
}
