export interface IEmployee {
    id: string;
    name: string;
    position: string;
    salary: number;
}
export declare class Employee implements IEmployee {
    id: string;
    name: string;
    position: string;
    salary: number;
    constructor(params: IEmployee);
    static create(params: Omit<IEmployee, 'id'>): Employee;
    hasValidSalary(): boolean;
}
