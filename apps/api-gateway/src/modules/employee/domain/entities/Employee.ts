export interface IEmployee {
  id: string;
  name: string;
  position: string;
  salary: number;
}

export class Employee implements IEmployee {
  id: string;
  name: string;
  position: string;
  salary: number;

  constructor(params: IEmployee) {
    Object.assign(this, params);
  }

  static create(params: Omit<IEmployee, 'id'>): Employee {
    if (!params.name || !params.position || params.salary <= 0) {
      throw new Error('Dados inválidos para funcionário.');
    }

    return new Employee({
      id: Date.now().toString(),
      ...params,
    });
  }

  hasValidSalary(): boolean {
    return this.salary > 0;
  }
}
