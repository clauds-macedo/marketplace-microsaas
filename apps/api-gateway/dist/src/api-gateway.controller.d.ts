import { RequestEmployeeUseCase } from './modules/employee/application/usecases/request-employee-use-case';
import { CreateEmployeeDTO } from './modules/employee/infra/validators/dtos/create-employee-dto';
export declare class EmployeeController {
    private readonly requestEmployeeUseCase;
    constructor(requestEmployeeUseCase: RequestEmployeeUseCase);
    createEmployee(employeeData: CreateEmployeeDTO): Promise<import("rxjs").Observable<any>>;
    getEmployee(id: string): Promise<import("rxjs").Observable<any>>;
}
