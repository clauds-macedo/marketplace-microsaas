import { ClientProxy } from '@nestjs/microservices';
export declare class RequestEmployeeUseCase {
    private employeeService;
    constructor(employeeService: ClientProxy);
    createEmployee(name: string, position: string, salary: number): Promise<import("rxjs").Observable<any>>;
    getEmployee(id: string): Promise<import("rxjs").Observable<any>>;
}
