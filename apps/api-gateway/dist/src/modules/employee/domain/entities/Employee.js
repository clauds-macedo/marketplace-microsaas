"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(params) {
        Object.assign(this, params);
    }
    static create(params) {
        if (!params.name || !params.position || params.salary <= 0) {
            throw new Error('Dados inválidos para funcionário.');
        }
        return new Employee({
            id: Date.now().toString(),
            ...params,
        });
    }
    hasValidSalary() {
        return this.salary > 0;
    }
}
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map